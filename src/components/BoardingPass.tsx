import {
  Building,
  GitFork,
  Github,
  MapPin,
  Plane,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import QRCode from "react-qr-code";
import type { BoardingPassData, Theme } from "../types";
import { MovingBanner } from "./MovingBanner";

interface BoardingPassProps {
  data: BoardingPassData;
  theme: Theme;
}

const themeGradients: Record<Theme, { from: string; via: string; to: string }> =
  {
    blue: { from: "from-blue-600", via: "via-blue-700", to: "to-blue-800" },
    purple: {
      from: "from-purple-600",
      via: "via-purple-700",
      to: "to-purple-800",
    },
    green: {
      from: "from-emerald-600",
      via: "via-emerald-700",
      to: "to-emerald-800",
    },
    orange: {
      from: "from-orange-600",
      via: "via-orange-700",
      to: "to-orange-800",
    },
    red: { from: "from-red-600", via: "via-red-700", to: "to-red-800" },
    pink: { from: "from-pink-600", via: "via-pink-700", to: "to-pink-800" },
    teal: { from: "from-teal-600", via: "via-teal-700", to: "to-teal-800" },
  };

export function BoardingPass({ data, theme }: BoardingPassProps) {
  const experience =
    new Date().getFullYear() - new Date(data.joinDate).getFullYear();
  const memberStatus =
    experience < 2
      ? "ROOKIE"
      : experience < 5
      ? "GOLD"
      : experience < 8
      ? "PLATINUM"
      : "DIAMOND";

  const flightNumber = `GA${data.totalRepos}${data.followers}`;
  const terminal = String.fromCharCode(65 + (data.stars % 8));
  const gate = (Math.floor((data.followers + data.stars) / 10) % 50) + 1;
  const gradient = themeGradients[theme];

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
      <MovingBanner theme={theme} />

      {/* Ticket Header */}
      <div
        className={`bg-gradient-to-r ${gradient.from} ${gradient.via} ${gradient.to} p-4 sm:p-6 text-white relative`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
            <div className="relative mb-3 sm:mb-0">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50">
                <img
                  src={data.avatarUrl}
                  alt={data.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -bottom-1 -right-1 bg-${theme}-500 rounded-full p-1`}
              >
                <Plane className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">
                GITHUB AIRLINES
              </h1>
              <div className="flex items-center justify-center sm:justify-start space-x-2 mt-1">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      memberStatus === "ROOKIE"
                        ? "bg-green-500"
                        : memberStatus === "GOLD"
                        ? "bg-yellow-500"
                        : memberStatus === "PLATINUM"
                        ? "bg-gray-300"
                        : "bg-blue-300"
                    }`}
                  />
                  <p className="text-white/90 text-sm">{memberStatus} MEMBER</p>
                </div>
                <span className="text-white/70">•</span>
                <p className="text-white/90 text-sm">FLIGHT {flightNumber}</p>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <QRCode
              value={data.profileUrl}
              size={64}
              className="mb-2 bg-white p-1 rounded"
            />
            <p className="text-xs text-white/90">SCAN TO VIEW PROFILE</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-8">
        {/* Passenger Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Passenger Name
            </p>
            <p className="font-mono text-xl">{data.username}</p>
            <div className="flex items-center space-x-2 mt-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-600">
                {data.location || "Remote Developer"}
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Building className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-600">
                {data.company || "Independent Developer"}
              </p>
            </div>
            {data.twitter_username && (
              <div className="flex items-center space-x-2 mt-1">
                <Twitter className="w-4 h-4 text-blue-400" />
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  @{data.twitter_username}
                </a>
              </div>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Flight Details
            </p>
            <div className="space-y-2">
              <div className="flex space-x-8">
                <div>
                  <p className="text-sm text-gray-500">Terminal</p>
                  <p className="font-mono text-lg">{terminal}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gate</p>
                  <p className="font-mono text-lg">{gate}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Boarding Time</p>
                <p className="font-mono text-lg">
                  {new Date(data.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Developer Stats
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Followers</span>
                </div>
                <span className="font-mono">{data.followers}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm">Following</span>
                </div>
                <span className="font-mono">{data.following}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Stars</span>
                </div>
                <span className="font-mono">{data.stars}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Showcase */}
        <div className="border-t border-dashed pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Featured Repository
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-mono text-lg mb-2 truncate">
                  {data.topRepo}
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{data.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{data.forks}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Developer Journey
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-mono text-lg">{experience} Years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-mono text-lg">{memberStatus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Footer */}
      <div className="bg-gray-50 p-4 border-t border-dashed">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm text-gray-600">
          <p className="font-mono">
            ISSUED: {new Date(data.joinDate).toLocaleDateString()}
          </p>
          <p className="font-mono">
            PASSENGER ID: GH-{data.username.toUpperCase()}
          </p>
          <a
            href={data.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            <Github className="w-4 h-4" />
            <span>View Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
