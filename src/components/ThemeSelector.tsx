import React from 'react';
import type { Theme } from '../types';
import { Palette } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes: { id: Theme; name: string; description: string; colors: string[] }[] = [
  { 
    id: 'blue', 
    name: 'Business Class', 
    description: 'Classic professional theme',
    colors: ['from-blue-600', 'via-blue-700', 'to-blue-800'] 
  },
  { 
    id: 'purple', 
    name: 'First Class', 
    description: 'Premium luxury experience',
    colors: ['from-purple-600', 'via-purple-700', 'to-purple-800'] 
  },
  { 
    id: 'green', 
    name: 'Eco Class', 
    description: 'Sustainable development',
    colors: ['from-emerald-600', 'via-emerald-700', 'to-emerald-800'] 
  },
  { 
    id: 'orange', 
    name: 'Sunset Express', 
    description: 'Vibrant and energetic',
    colors: ['from-orange-600', 'via-orange-700', 'to-orange-800'] 
  },
  { 
    id: 'red', 
    name: 'Priority Line', 
    description: 'Bold and impactful',
    colors: ['from-red-600', 'via-red-700', 'to-red-800'] 
  },
  { 
    id: 'pink', 
    name: 'Cloud Nine', 
    description: 'Modern and fresh',
    colors: ['from-pink-600', 'via-pink-700', 'to-pink-800'] 
  },
  { 
    id: 'teal', 
    name: 'Ocean View', 
    description: 'Calm and focused',
    colors: ['from-teal-600', 'via-teal-700', 'to-teal-800'] 
  },
];

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="max-w-5xl mx-auto mb-6">
      <div className="flex items-center gap-2 mb-3 text-gray-600">
        <Palette className="w-4 h-4" />
        <span className="text-sm font-medium">Select Ticket Class</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`group relative flex flex-col items-start p-3 rounded-lg transition-all duration-200
              ${currentTheme === theme.id 
                ? 'bg-white shadow-md ring-2 ring-gray-200' 
                : 'bg-white/60 hover:bg-white hover:shadow-md'}`}
          >
            <div className={`w-full h-2 rounded bg-gradient-to-r ${theme.colors.join(' ')} mb-2`} />
            <span className="text-sm font-medium text-gray-900">{theme.name}</span>
            <span className="text-xs text-gray-500">{theme.description}</span>
            {currentTheme === theme.id && (
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}