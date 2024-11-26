import { Building, GitFork, MapPin, Plane, Star, Users } from "lucide-react";
import QRCode from "react-qr-code";
import { themeConfig, type BoardingPassData, type Theme } from "../types";
import { getMemberStatus, getMemberStatusColor } from "../utils";
import { MovingBanner } from "./MovingBanner";
import ShareButton from "./ShareButton";

interface BoardingPassProps {
  data: BoardingPassData;
  theme: Theme;
}

export function BoardingPass({ data, theme }: Readonly<BoardingPassProps>) {
  const experience =
    new Date().getFullYear() - new Date(data.joinDate).getFullYear();
  const baseUrl = window.location.origin;
  const shareUrl = `${baseUrl}?username=${data.username}`;
  const memberStatus = getMemberStatus(experience);
  const shareText = `🚀 Check out my GitHub Airline Pass! They've been coding for ${experience} years and apparently am a ${memberStatus} member of the GitHub community. 👨‍💻`;

  const flightNumber = `${data.mainLanguage.slice(0, 2).toUpperCase()}${
    data.totalRepos
  }${data.followers}`;
  const terminal = String.fromCharCode(65 + (data.stars % 8));
  const gate = (Math.floor((data.followers + data.stars) / 10) % 50) + 1;
  const config = themeConfig[theme];
  const { from, via, to } = config.colors.primary;

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
      <MovingBanner theme={theme} />

      <div
        className={`bg-gradient-to-r ${from} ${via} ${to} p-4 sm:p-6 text-white relative`}
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
                className={`absolute -bottom-1 -right-1 ${config.colors.iconBackground} rounded-full p-1`}
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
                    className={`w-2 h-2 rounded-full ${getMemberStatusColor(
                      memberStatus
                    )}`}
                  />
                  <p className="text-white/90 text-sm">{memberStatus} MEMBER</p>
                </div>
                <span className="text-white/70">•</span>
                <p className="text-white/90 text-sm">FLIGHT {flightNumber}</p>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-right ">
            <QRCode
              value={data.profileUrl}
              size={64}
              className="mb-2 bg-white p-1 rounded m-auto lg:ml-auto"
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
                <svg
                  height={16}
                  width={16}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
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
            <div className="flex flex-col h-full">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Featured Repository
              </p>
              <div className="bg-gray-50 rounded-lg p-4 h-full">
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
            <div className="flex flex-col h-full">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Developer Journey
              </p>
              <div className="bg-gray-50 rounded-lg p-4 h-full">
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
            PASSENGER ID: GH-{data.username.toUpperCase()}
          </p>
          <ShareButton shareUrl={shareUrl} shareText={shareText} />
          <a
            href={data.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            <svg
              aria-hidden="true"
              height={18}
              width={18}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
