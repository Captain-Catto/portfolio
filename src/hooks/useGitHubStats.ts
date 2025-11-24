"use client";

import { useEffect, useState } from "react";
import type { GitHubStats } from "@/types/github";

const CACHE_KEY = "github_stats_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CachedData {
  data: GitHubStats;
  timestamp: number;
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp }: CachedData = JSON.parse(cached);
          const now = Date.now();

          // If cache is still valid, use it
          if (now - timestamp < CACHE_DURATION) {
            setStats(data);
            setLoading(false);
            return;
          }
        }

        // Fetch from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData = await response.json();

        // Fetch repositories for language stats
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        const repos = await reposResponse.json();

        // Calculate language statistics
        const languageCount: Record<string, number> = {};
        repos.forEach((repo: { language: string | null; fork: boolean }) => {
          if (repo.language && !repo.fork) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        const totalRepos = Object.values(languageCount).reduce(
          (sum, count) => sum + count,
          0
        );

        const topLanguages = Object.entries(languageCount)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalRepos) * 100),
            color: getLanguageColor(name),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        // Fetch recent events
        const eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=10`
        );
        const events = await eventsResponse.json();

        const recentActivity = events
          .filter((event: { type: string }) =>
            ["PushEvent", "PullRequestEvent", "IssuesEvent"].includes(
              event.type
            )
          )
          .slice(0, 5)
          .map((event: { id: string; type: string; created_at: string; repo: { name: string }; payload?: { commits?: Array<{ message: string }>; pull_request?: { title: string; html_url?: string }; issue?: { title: string; html_url?: string } } }) => ({
            id: event.id,
            type:
              event.type === "PushEvent"
                ? "commit"
                : event.type === "PullRequestEvent"
                  ? "pr"
                  : "issue",
            title:
              event.type === "PushEvent"
                ? event.payload?.commits?.[0]?.message || "Pushed commits"
                : event.payload?.pull_request?.title ||
                  event.payload?.issue?.title ||
                  "Activity",
            date: event.created_at,
            repoName: event.repo.name,
            url:
              event.payload?.pull_request?.html_url ||
              event.payload?.issue?.html_url,
          }));

        const githubStats: GitHubStats = {
          totalContributions: 0, // This requires GraphQL API or scraping
          currentStreak: 0, // This requires GraphQL API or scraping
          longestStreak: 0, // This requires GraphQL API or scraping
          totalRepos: userData.public_repos,
          topLanguages,
          recentActivity,
        };

        // Cache the data
        const cacheData: CachedData = {
          data: githubStats,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

        setStats(githubStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubStats();
    }
  }, [username]);

  return { stats, loading, error };
}

// Helper function to get language colors (matching GitHub's color scheme)
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    PHP: "#4F5D95",
    "C++": "#f34b7d",
    C: "#555555",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Vue: "#41b883",
    React: "#61dafb",
  };

  return colors[language] || "#8b949e";
}
