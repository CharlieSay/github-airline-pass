import { Ticket } from "lucide-react";
import { getThemeList, type Theme } from "../types";

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelector({
  currentTheme,
  onThemeChange,
}: Readonly<ThemeSelectorProps>) {
  const themes = getThemeList();

  return (
    <div className="max-w-5xl mx-auto mb-6">
      <div className="flex items-center gap-2 mb-3 text-gray-600">
        <Ticket className="w-4 h-4" />
        <span className="text-sm font-medium">Select Ticket Class</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`group relative flex flex-col items-start  rounded-lg transition-all duration-200
              ${
                currentTheme === theme.id
                  ? "bg-green-100 shadow-md ring-2 ring-gray-200"
                  : "bg-white/60 hover:bg-white hover:shadow-md"
              }`}
          >
            <div
              className={`w-full h-full rounded bg-gradient-to-r ${theme.colors.gradient.join(
                " "
              )} `}
            >
              <span className="text-sm font-bold text-white">
                {theme.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
