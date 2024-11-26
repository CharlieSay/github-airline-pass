import { themeConfig, type Theme } from "../types";

interface MovingBannerProps {
  theme: Theme;
}

export function MovingBanner({ theme }: Readonly<MovingBannerProps>) {
  const config = themeConfig[theme];
  const { from, via, to } = config.colors.primary;

  return (
    <div
      className={`bg-gradient-to-r ${from} ${via} ${to} flex items-center overflow-hidden`}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${config.colors.pulse} animate-pulse`}
        ></div>
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 text-xs text-white/90 tracking-wider font-medium">
            GITHUB AIRLINES OFFICIAL BOARDING PASS
          </span>
          <span className="mx-4 text-xs text-white/70">•</span>
          <span className="mx-4 text-xs text-white/90 tracking-wider font-medium">
            VERIFIED TICKET
          </span>
          <span className="mx-4 text-xs text-white/70">•</span>
          <span className="mx-4 text-xs text-white/90 tracking-wider font-medium">
            NOT TRANSFERABLE
          </span>
          <span className="mx-4 text-xs text-white/70">•</span>
        </div>
      </div>
    </div>
  );
}
