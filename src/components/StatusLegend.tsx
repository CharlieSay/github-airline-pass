import React from 'react';

export function StatusLegend() {
  const statuses = [
    {
      name: 'ROOKIE',
      color: 'bg-green-500',
      years: '0-2 years',
      description: 'Every expert was once a beginner!'
    },
    {
      name: 'GOLD',
      color: 'bg-yellow-500',
      years: '2-5 years',
      description: 'Building great things!'
    },
    {
      name: 'PLATINUM',
      color: 'bg-gray-300',
      years: '5-8 years',
      description: 'Mastering the craft!'
    },
    {
      name: 'DIAMOND',
      color: 'bg-blue-300',
      years: '8+ years',
      description: 'True coding veteran!'
    }
  ];

  return (
    <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-5xl mx-auto">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Developer Status Levels</h3>
      <div className="grid grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div key={status.name} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${status.color}`} />
              <span className="font-mono text-sm font-medium">{status.name}</span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{status.years}</p>
            <p className="text-xs text-gray-600">{status.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}