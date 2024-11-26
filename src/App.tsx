import { Analytics } from "@vercel/analytics/react";
import { AlertCircle, Plane } from "lucide-react";
import { useState } from "react";
import { BoardingPass } from "./components/BoardingPass";
import { SearchForm } from "./components/SearchForm";
import { ThemeSelector } from "./components/ThemeSelector";
import type { BoardingPassData, GitHubUser, Repository, Theme } from "./types";

export default function App() {
  const [boardingPass, setBoardingPass] = useState<BoardingPassData | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("sapphire");

  const fetchGitHubData = async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`),
      ]);

      if (!userResponse.ok || !reposResponse.ok) {
        throw new Error("User not found");
      }

      const userData: GitHubUser = await userResponse.json();
      const repos: Repository[] = await reposResponse.json();

      // Calculate main language - with safety check
      const languages = repos.map((repo) => repo.language).filter(Boolean);
      const mainLanguage =
        languages.length > 0
          ? languages.reduce((acc, curr) =>
              languages.filter((lang) => lang === acc).length >=
              languages.filter((lang) => lang === curr).length
                ? acc
                : curr
            )
          : "Unknown";

      // Calculate total size and stats
      const totalSize = repos.reduce((acc, repo) => acc + repo.size, 0);
      const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
      const forks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

      // Find top repository (by stars)
      const topRepo =
        repos.length > 0
          ? repos.reduce((acc, curr) =>
              curr.stargazers_count > acc.stargazers_count ? curr : acc
            )
          : { name: "No public repositories", stargazers_count: 0 };

      setBoardingPass({
        username: userData.login,
        avatarUrl: userData.avatar_url,
        profileUrl: userData.html_url,
        topRepo: topRepo.name,
        totalRepos: userData.public_repos,
        mainLanguage,
        totalSize,
        joinDate: userData.created_at,
        followers: userData.followers,
        following: userData.following,
        gists: userData.public_gists,
        stars,
        forks,
        company: userData.company || "",
        location: userData.location || "",
        twitter_username: userData.twitter_username || "",
        public_repos: userData.public_repos,
        total_repos: userData.public_repos,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch GitHub data"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-3">
            <Plane className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              GitHub Airlines
            </h1>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Generate your GitHub boarding pass by entering your username below.
          </p>
        </div>

        <SearchForm onSearch={fetchGitHubData} isLoading={loading} />

        {error && (
          <div className="flex items-center justify-center space-x-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {boardingPass && !loading && (
          <>
            <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
            <div className="flex justify-center">
              <BoardingPass data={boardingPass} theme={theme} />
            </div>
          </>
        )}
      </div>
      <Analytics />
    </div>
  );
}
