import type { Theme } from '../types';

const themeGradients: Record<Theme, { from: string; via: string; to: string }> = {
  blue: { from: 'from-blue-900', via: 'via-blue-800', to: 'to-blue-900' },
  purple: { from: 'from-purple-900', via: 'via-purple-800', to: 'to-purple-900' },
  green: { from: 'from-emerald-900', via: 'via-emerald-800', to: 'to-emerald-900' },
  orange: { from: 'from-orange-900', via: 'via-orange-800', to: 'to-orange-900' },
  red: { from: 'from-red-900', via: 'via-red-800', to: 'to-red-900' },
  pink: { from: 'from-pink-900', via: 'via-pink-800', to: 'to-pink-900' },
  teal: { from: 'from-teal-900', via: 'via-teal-800', to: 'to-teal-900' },
};

interface MovingBannerProps {
  theme: Theme;
}

export function MovingBanner({ theme }: MovingBannerProps) {
  const gradient = themeGradients[theme];
  const pulseGradient = {
    blue: 'from-blue-400/20 via-blue-500/20 to-blue-400/20',
    purple: 'from-purple-400/20 via-purple-500/20 to-purple-400/20',
    green: 'from-emerald-400/20 via-emerald-500/20 to-emerald-400/20',
    orange: 'from-orange-400/20 via-orange-500/20 to-orange-400/20',
    red: 'from-red-400/20 via-red-500/20 to-red-400/20',
    pink: 'from-pink-400/20 via-pink-500/20 to-pink-400/20',
    teal: 'from-teal-400/20 via-teal-500/20 to-teal-400/20',
  };

  return (
    <div className={`bg-gradient-to-r ${gradient.from} ${gradient.via} ${gradient.to} flex items-center overflow-hidden`}>
      <div className="relative w-full h-full">
        <div className={`absolute inset-0 bg-gradient-to-r ${pulseGradient[theme]} animate-pulse`}></div>
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
