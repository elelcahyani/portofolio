import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2 rounded-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
          : 'bg-gradient-to-r from-amber-400 to-orange-500'
      }`} />
      
      {/* Button background */}
      <div className={`relative rounded-lg p-2 border transition-all duration-300 ${
        isDark
          ? 'bg-slate-800/50 border-white/10 hover:border-cyan-500/50'
          : 'bg-white/80 border-slate-200 hover:border-blue-500/50 shadow-sm'
      }`}>
        {/* Icon container with rotation animation */}
        <div className="relative w-5 h-5">
          {/* Moon Icon (Dark Mode) */}
          <Moon 
            className={`absolute inset-0 transition-all duration-500 ${
              isDark 
                ? 'opacity-100 rotate-0 scale-100 text-cyan-400' 
                : 'opacity-0 -rotate-90 scale-0 text-slate-400'
            }`}
            size={20}
          />
          
          {/* Sun Icon (Light Mode) */}
          <Sun 
            className={`absolute inset-0 transition-all duration-500 ${
              !isDark 
                ? 'opacity-100 rotate-0 scale-100 text-amber-500' 
                : 'opacity-0 rotate-90 scale-0 text-slate-400'
            }`}
            size={20}
          />
        </div>
      </div>

      {/* Tooltip */}
      <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isDark 
          ? 'bg-slate-800 text-cyan-400 border border-white/10' 
          : 'bg-white text-slate-700 border border-slate-200 shadow-lg'
      }`}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
};

export default ThemeToggle;
