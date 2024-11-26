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

export type Theme =
  | "sapphire"
  | "amethyst"
  | "jade"
  | "coral"
  | "ruby"
  | "turquoise"
  | "amber"
  | "grape";

export type MemberStatus = "ROOKIE" | "GOLD" | "PLATINUM" | "DIAMOND";

export interface StatusConfig {
    threshold: number;
    backgroundColor: string;
}

export interface ThemeConfig {
  name: string;
  description: string;
  colors: {
    primary: {
      from: string;
      via: string;
      to: string;
    };
    iconBackground: string;
    pulse: string;
    gradient: string[];
  };
}

export const themeConfig: Record<Theme, ThemeConfig> = {
  sapphire: {
    name: "Business Class",
    description: "Classic professional theme",
    colors: {
      primary: {
        from: "from-blue-900",
        via: "via-blue-700",
        to: "to-blue-800",
      },
      pulse: "from-blue-400/20 via-blue-500/20 to-blue-400/20",
      gradient: ["from-blue-600", "via-blue-700", "to-blue-800"],
      iconBackground: "bg-blue-400",
    },
  },
  amethyst: {
    name: "First Class",
    description: "Premium luxury experience",
    colors: {
      primary: {
        from: "from-violet-900",
        via: "via-violet-800",
        to: "to-violet-900",
      },
      pulse: "from-violet-400/20 via-violet-500/20 to-violet-400/20",
      gradient: ["from-violet-600", "via-violet-700", "to-violet-800"],
      iconBackground: "bg-violet-400",
    },
  },
  jade: {
    name: "Eco Class",
    description: "Sustainable development",
    colors: {
      primary: {
        from: "from-green-900",
        via: "via-green-800",
        to: "to-green-900",
      },
      pulse: "from-green-400/20 via-green-500/20 to-green-400/20",
      gradient: ["from-green-600", "via-green-700", "to-green-800"],
      iconBackground: "bg-green-400",
    },
  },
  coral: {
    name: "Sunset Express",
    description: "Vibrant and energetic",
    colors: {
      primary: {
        from: "from-rose-900",
        via: "via-rose-800",
        to: "to-rose-900",
      },
      pulse: "from-rose-400/20 via-rose-500/20 to-rose-400/20",
      gradient: ["from-rose-600", "via-rose-700", "to-rose-800"],
      iconBackground: "bg-rose-400",
    },
  },
  ruby: {
    name: "Priority Line",
    description: "Bold and impactful",
    colors: {
      primary: {
        from: "from-red-900",
        via: "via-red-800",
        to: "to-red-900",
      },
      pulse: "from-red-400/20 via-red-500/20 to-red-400/20",
      gradient: ["from-red-600", "via-red-700", "to-red-800"],
      iconBackground: "bg-red-400",
    },
  },
  turquoise: {
    name: "Cloud Nine",
    description: "Modern and fresh",
    colors: {
      primary: {
        from: "from-cyan-900",
        via: "via-cyan-800",
        to: "to-cyan-900",
      },
      pulse: "from-cyan-400/20 via-cyan-500/20 to-cyan-400/20",
      gradient: ["from-cyan-600", "via-cyan-700", "to-cyan-800"],
      iconBackground: "bg-cyan-400",
    },
  },
  amber: {
    name: "Ocean View",
    description: "Calm and focused",
    colors: {
      primary: {
        from: "from-amber-900",
        via: "via-amber-800",
        to: "to-amber-900",
      },
      pulse: "from-amber-400/20 via-amber-500/20 to-amber-400/20",
      gradient: ["from-amber-600", "via-amber-700", "to-amber-800"],
      iconBackground: "bg-amber-400",
    },
  },
  grape: {
    name: "Night Flight",
    description: "Sophisticated and elegant",
    colors: {
      primary: {
        from: "from-purple-900",
        via: "via-purple-800",
        to: "to-purple-900",
      },
      pulse: "from-purple-400/20 via-purple-500/20 to-purple-400/20",
      gradient: ["from-purple-600", "via-purple-700", "to-purple-800"],
      iconBackground: "bg-purple-400",
    },
  },
};

// Helper functions to get theme information
export const getThemeList = () =>
  Object.entries(themeConfig).map(([id, config]) => ({
    id: id as Theme,
    ...config,
  }));
