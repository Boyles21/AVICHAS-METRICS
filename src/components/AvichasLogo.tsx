import React from 'react';

interface AvichasLogoProps {
  className?: string;
  iconOnly?: boolean;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AvichasLogo: React.FC<AvichasLogoProps> = ({
  className = '',
  iconOnly = false,
  textColor = 'text-white',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.24em]',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.35em]',
    md: 'text-[9px] tracking-[0.4em]',
    lg: 'text-[11px] tracking-[0.42em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Gold Chevron Logo Emblem matching the design */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(201,151,91,0.35)]"
        >
          <defs>
            <linearGradient id="avichasGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C089" />
              <stop offset="45%" stopColor="#C9975B" />
              <stop offset="100%" stopColor="#9B6C34" />
            </linearGradient>
            <linearGradient id="avichasGoldLight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A771" />
              <stop offset="100%" stopColor="#F9DFB0" />
            </linearGradient>
          </defs>

          {/* Outer triangular chevron */}
          <path
            d="M24 5L43 39H34.5L24 19.5L13.5 39H5L24 5Z"
            fill="url(#avichasGold)"
          />
          {/* Inner accent bridge */}
          <path
            d="M24 24L31 37H17L24 24Z"
            fill="url(#avichasGoldLight)"
            opacity="0.9"
          />
          {/* Bottom baseline notch */}
          <path
            d="M21 39H27L24 34L21 39Z"
            fill="#1E1914"
            opacity="0.6"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold font-sans ${titleSizes[size]} ${textColor} uppercase font-semibold`}>
            Avichas
          </span>
          <span className={`font-medium ${subtitleSizes[size]} text-[#C9975B] uppercase font-mono mt-1`}>
            Metrics
          </span>
        </div>
      )}
    </div>
  );
};
