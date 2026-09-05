import React from 'react';

interface NitLogoProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
  animate?: boolean;
}

export const NitLogo: React.FC<NitLogoProps> = ({
  className = '',
  size = 48,
  showGlow = false,
  animate = false
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className} ${
        animate ? 'hover:rotate-6 hover:scale-105 transition-transform duration-500' : ''
      }`}
      style={{ width: dimension, height: dimension }}
    >
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-yellow-400/25 blur-md scale-110 pointer-events-none animate-pulse" />
      )}
      <img
        src={`${import.meta.env.BASE_URL}nit-logo.svg`}
        alt="New Institute of Technology (NIT) Kolhapur Official Emblem"
        className="w-full h-full object-contain select-none pointer-events-none drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
};

