import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'corner' | 'compact' | 'header';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'corner',
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'header' || variant === 'compact') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`p-2 rounded-xl transition cursor-pointer flex items-center justify-center relative overflow-hidden ${
          isDark
            ? 'bg-slate-800 hover:bg-slate-700 text-yellow-300 border border-slate-700 shadow-sm'
            : 'bg-slate-100 hover:bg-slate-200 text-blue-900 border border-slate-300 shadow-sm'
        } ${className}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex items-center gap-1.5"
            >
              <Moon className="w-4 h-4 text-yellow-300 fill-yellow-400/20" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex items-center gap-1.5"
            >
              <Sun className="w-4 h-4 text-amber-500 fill-amber-400/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  // Corner floating toggle (bottom-left corner)
  return (
    <div className={`fixed bottom-5 left-5 z-40 ${className}`}>
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Toggle theme (currently ${theme} mode)`}
        title={`Click to switch to ${isDark ? 'Light' : 'Dark'} mode`}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-slate-900/90 text-slate-100 border-slate-700 shadow-black/40 hover:border-yellow-400/50 hover:shadow-yellow-500/10'
            : 'bg-white/95 text-slate-800 border-slate-200 shadow-slate-900/10 hover:border-blue-300 hover:shadow-blue-900/10'
        }`}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon-icon"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute"
              >
                <Moon className="w-5 h-5 text-yellow-300 fill-yellow-400/25" />
              </motion.div>
            ) : (
              <motion.div
                key="sun-icon"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute"
              >
                <Sun className="w-5 h-5 text-amber-500 fill-amber-400/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="text-xs font-bold tracking-tight select-none">
          {isDark ? (
            <span className="text-yellow-300">Dark</span>
          ) : (
            <span className="text-blue-950 font-extrabold">Light</span>
          )}
        </span>

        {/* Subtle status indicator dot */}
        <span
          className={`w-2 h-2 rounded-full transition-colors ${
            isDark ? 'bg-yellow-400 shadow-[0_0_8px_#FACC15]' : 'bg-blue-600'
          }`}
        />
      </motion.button>
    </div>
  );
};
