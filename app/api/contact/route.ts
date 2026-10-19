import { NextResponse } from 'next/server';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_SIZE = 16_384;
const MAX_NAME_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5_000;

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readContactMessage(value: unknown): ContactMessage | null {
  if (!isRecord(value)) return null;

  const { name, email, subject, message } = value;
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return null;
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim().replace(/[\r\n]+/g, ' ');
  const cleanMessage = message.trim();

  if (
    !cleanName ||
    cleanName.length > MAX_NAME_LENGTH ||
    cleanEmail.length > 254 ||
    !EMAIL_PATTERN.test(cleanEmail) ||
    !cleanSubject ||
    cleanSubject.length > MAX_SUBJECT_LENGTH ||
    cleanMessage.length < 20 ||
    cleanMessage.length > MAX_MESSAGE_LENGTH
  ) {
    return null;
  }

  return {
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json({ error: 'The message is too large.' }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit a valid message.' }, { status: 400 });
  }

  const contact = readContactMessage(body);
  if (!contact) {
    return NextResponse.json(
      { error: 'Please check your details and message, then try again.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.error('Contact email is not configured. Set RESEND_API_KEY, CONTACT_EMAIL_FROM, and CONTACT_EMAIL_TO.');
    return NextResponse.json(
      {
        error:
          'Email sending is not configured yet. Please email nyathiza31@gmail.com directly.',
      },
      { status: 503 }
    );
  }

  const safeName = escapeHtml(contact.name);
  const safeEmail = escapeHtml(contact.email);
  const safeSubject = escapeHtml(contact.subject);
  const safeMessage = escapeHtml(contact.message).replace(/\n/g, '<br>');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: contact.email,
        subject: `Portfolio contact: ${contact.subject}`,
        text: [
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          `Subject: ${contact.subject}`,
          '',
          contact.message,
        ].join('\n'),
        html: [
          `<p><strong>Name:</strong> ${safeName}</p>`,
          `<p><strong>Email:</strong> ${safeEmail}</p>`,
          `<p><strong>Subject:</strong> ${safeSubject}</p>`,
          `<p>${safeMessage}</p>`,
        ].join(''),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`Resend rejected a contact email with status ${response.status}.`);
      return NextResponse.json(
        { error: 'Your message could not be sent right now. Please try again or email me directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unable to reach the email provider for a contact message.', error);
    return NextResponse.json(
      { error: 'Your message could not be sent right now. Please try again or email me directly.' },
      { status: 502 }
    );
  }
}
