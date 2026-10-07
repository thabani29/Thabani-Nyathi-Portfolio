import { NextResponse } from 'next/server';

type GitHubUserResponse = {
  login: string;
  public_repos: number;
  followers: number;
  total_private_repos?: number;
};

export const dynamic = 'force-dynamic';

function isGitHubUserResponse(data: unknown): data is GitHubUserResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'login' in data &&
    typeof data.login === 'string' &&
    'public_repos' in data &&
    typeof data.public_repos === 'number' &&
    'followers' in data &&
    typeof data.followers === 'number' &&
    (!('total_private_repos' in data) ||
      typeof data.total_private_repos === 'number')
  );
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const endpoint = token
    ? 'https://api.github.com/user'
    : 'https://api.github.com/users/thabani29';
  const headers = new Headers({
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  });

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(endpoint, { headers, cache: 'no-store' });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Unable to load GitHub stats.' },
      { status: 502 }
    );
  }

  const data: unknown = await response.json();

  if (!isGitHubUserResponse(data) || data.login.toLowerCase() !== 'thabani29') {
    return NextResponse.json(
      { error: 'GitHub returned an invalid profile response.' },
      { status: 502 }
    );
  }

  const privateRepos =
    typeof data.total_private_repos === 'number' ? data.total_private_repos : null;

  return NextResponse.json({
    publicRepos: data.public_repos,
    privateRepos,
    totalRepos:
      privateRepos === null ? null : data.public_repos + privateRepos,
    followers: data.followers,
  });
}
