import React from 'react';

interface LVBrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const LVBrandLogo: React.FC<LVBrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  showTagline = false,
  className = '',
  onClick,
}) => {
  // Height sizing according to size prop
  const logoHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const iconSizes = {
    sm: 'w-8 h-7',
    md: 'w-11 h-9',
    lg: 'w-16 h-14',
    xl: 'w-24 h-20',
  };

  // Monogram SVG emblem element (reusable)
  const renderEmblem = () => (
    <svg
      viewBox="0 0 160 140"
      className="w-full h-full transition-transform duration-300 group-hover:scale-105 select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 1. Blue Industrial Gear (Background of Right Arm) */}
      <g id="gear" fill="#1e73be">
        {/* 6 Prominent Gear Teeth (Cogs) */}
        <rect x="133" y="30" width="13" height="15" rx="1.5" transform="rotate(-38 139.5 37.5)" />
        <rect x="144" y="50" width="13" height="15" rx="1.5" transform="rotate(-14 150.5 57.5)" />
        <rect x="144" y="71" width="13" height="15" rx="1.5" transform="rotate(10 150.5 78.5)" />
        <rect x="135" y="91" width="13" height="15" rx="1.5" transform="rotate(34 141.5 98.5)" />
        <rect x="117" y="106" width="13" height="15" rx="1.5" transform="rotate(58 123.5 113.5)" />
        <rect x="94" y="113" width="13" height="15" rx="1.5" transform="rotate(82 100.5 120.5)" />

        {/* Outer Gear Body Arc */}
        <path
          d="M 104 32
             A 39 39 0 0 1 143 71
             A 39 39 0 0 1 104 110
             L 104 95
             A 24 24 0 0 0 128 71
             A 24 24 0 0 0 104 47
             Z"
        />

        {/* 6 Perforated White Rivet Holes in Gear Body */}
        <circle cx="132" cy="45" r="2.8" fill="#ffffff" />
        <circle cx="137" cy="61" r="2.8" fill="#ffffff" />
        <circle cx="135" cy="78" r="2.8" fill="#ffffff" />
        <circle cx="127" cy="93" r="2.8" fill="#ffffff" />
        <circle cx="114" cy="103" r="2.8" fill="#ffffff" />
        <circle cx="98" cy="106" r="2.8" fill="#ffffff" />
      </g>

      {/* 2. Deep Crimson Red Letter 'L' */}
      <path
        d="M 4 12
           H 32
           V 94
           H 56
           V 122
           H 4
           Z"
        fill="#ad1c24"
      />

      {/* 3. Deep Crimson Red Letter 'V' */}
      {/* Left diagonal arm */}
      <path
        d="M 36 12
           H 64
           L 76 76
           L 66 122
           L 52 122
           Z"
        fill="#ad1c24"
      />

      {/* Right Arm of V with integrated circular medallion */}
      <path
        d="M 66 122
           L 76 76
           C 76 50, 94 36, 114 36
           C 127 36, 135 45, 135 55
           C 135 69, 126 83, 112 91
           L 128 12
           H 104
           L 94 48
           C 86 54, 82 64, 82 74
           Z"
        fill="#ad1c24"
      />

      {/* 4. Pure White Lightning Bolt Cutout */}
      <polygon
        points="114,43 103,66 116,64 96,98 108,74 97,76"
        fill="#ffffff"
      />
    </svg>
  );

  if (variant === 'monogram') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center ${iconSizes[size]} ${onClick ? 'cursor-pointer group' : ''} ${className}`}
        id="lv-engineering-brand-monogram"
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Low Voltage Engineering"
      >
        {renderEmblem()}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
      id="lv-engineering-brand-logo"
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label="Low Voltage Engineering"
    >
      {/* Complete Official Vector Logo: Emblem + Wordmark + Terminal Underline */}
      <svg
        viewBox="0 0 520 145"
        className={`${logoHeights[size]} w-auto max-w-full transition-transform duration-200 group-hover:opacity-95`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .lv-brand-black {
                font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 900;
                font-size: 32.5px;
                fill: #111827;
                letter-spacing: 0.04em;
              }
              .lv-brand-red {
                font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 900;
                font-size: 32.5px;
                fill: #ad1c24;
                letter-spacing: 0.04em;
              }
              .lv-brand-blue {
                font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 900;
                font-size: 26.5px;
                fill: #1e73be;
                letter-spacing: 0.13em;
              }
            `}
          </style>
        </defs>

        {/* ==================== LEFT: EMBLEM MARK ==================== */}
        <g id="emblem-group" transform="translate(6, 6)">
          {/* Blue Industrial Gear */}
          <g id="gear-mesh" fill="#1e73be">
            <rect x="133" y="30" width="13" height="15" rx="1.5" transform="rotate(-38 139.5 37.5)" />
            <rect x="144" y="50" width="13" height="15" rx="1.5" transform="rotate(-14 150.5 57.5)" />
            <rect x="144" y="71" width="13" height="15" rx="1.5" transform="rotate(10 150.5 78.5)" />
            <rect x="135" y="91" width="13" height="15" rx="1.5" transform="rotate(34 141.5 98.5)" />
            <rect x="117" y="106" width="13" height="15" rx="1.5" transform="rotate(58 123.5 113.5)" />
            <rect x="94" y="113" width="13" height="15" rx="1.5" transform="rotate(82 100.5 120.5)" />

            <path
              d="M 104 32
                 A 39 39 0 0 1 143 71
                 A 39 39 0 0 1 104 110
                 L 104 95
                 A 24 24 0 0 0 128 71
                 A 24 24 0 0 0 104 47
                 Z"
            />

            <circle cx="132" cy="45" r="2.8" fill="#ffffff" />
            <circle cx="137" cy="61" r="2.8" fill="#ffffff" />
            <circle cx="135" cy="78" r="2.8" fill="#ffffff" />
            <circle cx="127" cy="93" r="2.8" fill="#ffffff" />
            <circle cx="114" cy="103" r="2.8" fill="#ffffff" />
            <circle cx="98" cy="106" r="2.8" fill="#ffffff" />
          </g>

          {/* Deep Crimson Red Letter 'L' */}
          <path
            d="M 4 12
               H 32
               V 94
               H 56
               V 122
               H 4
               Z"
            fill="#ad1c24"
          />

          {/* Deep Crimson Red Letter 'V' */}
          <path
            d="M 36 12
               H 64
               L 76 76
               L 66 122
               L 52 122
               Z"
            fill="#ad1c24"
          />

          <path
            d="M 66 122
               L 76 76
               C 76 50, 94 36, 114 36
               C 127 36, 135 45, 135 55
               C 135 69, 126 83, 112 91
               L 128 12
               H 104
               L 94 48
               C 86 54, 82 64, 82 74
               Z"
            fill="#ad1c24"
          />

          {/* White Lightning Bolt Cutout */}
          <polygon
            points="114,43 103,66 116,64 96,98 108,74 97,76"
            fill="#ffffff"
          />
        </g>

        {/* ==================== RIGHT: WORDMARK LOCKUP ==================== */}
        <g id="wordmark-group" transform="translate(182, 14)">
          {/* Line 1: LOW VOLTAGE */}
          <text x="0" y="44">
            <tspan className="lv-brand-black">LOW </tspan>
            <tspan className="lv-brand-red">VOLTAGE</tspan>
          </text>

          {/* Line 2: ENGINEERING */}
          <text x="0" y="80" className="lv-brand-blue">
            ENGINEERING
          </text>

          {/* Line 3: Signature Red Rule with Terminal Square Box */}
          <g id="terminal-bar-group" transform="translate(0, 93)">
            <line x1="0" y1="5" x2="278" y2="5" stroke="#ad1c24" strokeWidth="3.5" strokeLinecap="square" />
            <rect x="274" y="0" width="10" height="10" fill="#ad1c24" rx="0.5" />
          </g>
        </g>
      </svg>

      {/* Optional Tagline (if explicitly requested via showTagline) */}
      {showTagline && (
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider pl-[4.75rem] -mt-1">
          Turning Concepts into Engineering Marvels
        </span>
      )}
    </div>
  );
};
