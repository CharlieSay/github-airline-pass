import React from 'react';

interface StatusTooltipProps {
  status: string;
}

export function StatusTooltip({ status }: StatusTooltipProps) {
  const getStatusInfo = (status: string) => {
    const info = {
      ROOKIE: 'New developer (0-2 years) - Every expert was once a beginner!',
      GOLD: 'Experienced developer (2-5 years) - Building great things!',
      PLATINUM: 'Senior developer (5-8 years) - Mastering the craft!',
      DIAMOND: 'Elite developer (8+ years) - True coding veteran!'
    };
    return info[status as keyof typeof info] || 'Unknown status';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      ROOKIE: 'bg-green-500',
      GOLD: 'bg-yellow-500',
      PLATINUM: 'bg-gray-300',
      DIAMOND: 'bg-blue-300'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="relative group inline-block">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
        <p className="text-blue-200 text-sm">{status} MEMBER</p>
      </div>
      <div className="absolute left-0 -top-14 transform -translate-x-1/4 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 min-w-[200px]">
        {getStatusInfo(status)}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
}