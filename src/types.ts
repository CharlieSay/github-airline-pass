export interface GitHubUser {
  login: string;
  name: string;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
  followers: number;
  following: number;
  public_gists: number;
  company: string;
  location: string;
  twitter_username: string;
}

export interface Repository {
  name: string;
  language: string;
  size: number;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

export interface BoardingPassData {
  username: string;
  avatarUrl: string;
  profileUrl: string;
  topRepo: string;
  totalRepos: number;
  mainLanguage: string;
  totalSize: number;
  joinDate: string;
  followers: number;
  following: number;
  gists: number;
  stars: number;
  forks: number;
  company: string;
  location: string;
  twitter_username: string;
  public_repos: number;
  total_repos: number;
}

export type Theme = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'pink' | 'teal';
