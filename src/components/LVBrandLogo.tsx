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
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  // Monogram SVG emblem element (Pure, solid, pixel-faithful to Original Logo)
  const renderEmblem = () => (
    <svg
      viewBox="0 0 172 140"
      className="w-full h-full transition-transform duration-300 group-hover:scale-105 select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 1. LAYER 1 (BASE/BACK): BLUE INDUSTRIAL GEAR */}
      <g id="gear-emblem" fill="#275ba4">
        {/* Outer Circular Gear Rim */}
        <circle cx="106" cy="70" r="44" />

        {/* 5 Concentric Gear Teeth rotated radially around center (106, 70) */}
        <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(-32 106 70)" />
        <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(-8 106 70)" />
        <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(16 106 70)" />
        <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(40 106 70)" />
        <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(64 106 70)" />
      </g>

      {/* 2. LAYER 2 (MIDDLE): RED LETTER 'L' */}
      <path
        d="M 12 16
           H 36
           V 98
           H 64
           V 124
           H 12
           Z"
        fill="#b0212b"
      />

      {/* 3. LAYER 3 (MIDDLE): RED LETTER 'V' LEFT ARM */}
      <polygon
        points="38,16 62,16 88,124 64,124"
        fill="#b0212b"
      />

      {/* 4. LAYER 4 (MIDDLE): RED CIRCULAR MEDALLION */}
      <circle cx="106" cy="70" r="35" fill="#b0212b" />

      {/* 5. LAYER 5 (MIDDLE): RED LETTER 'V' RIGHT ARM */}
      <polygon
        points="64,124 88,124 140,16 116,16"
        fill="#b0212b"
      />

      {/* 6. LAYER 6 (FRONT OF ALL LAYERS): BOLD, PROMINENT WHITE LIGHTNING BOLT (⚡) */}
      <polygon
        id="prominent-white-lightning-bolt"
        points="118,36 90,70 112,70 82,104 130,62 108,62"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinejoin="miter"
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
        viewBox="0 0 535 140"
        className={`${logoHeights[size]} w-auto max-w-full transition-transform duration-200 group-hover:opacity-95`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .lv-brand-title {
                font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
                font-weight: 900;
                font-size: 34px;
                fill: #1f2328;
                letter-spacing: 0.04em;
              }
              .lv-brand-eng {
                font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
                font-weight: 900;
                font-size: 32px;
                fill: #275ba4;
              }
            `}
          </style>
        </defs>

        {/* ==================== LEFT: EMBLEM MARK ==================== */}
        <g id="emblem-group" transform="translate(4, 0)">
          {/* Layer 1 (Back): Blue Industrial Gear with 5 Radial Teeth */}
          <g fill="#275ba4">
            <circle cx="106" cy="70" r="44" />
            <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(-32 106 70)" />
            <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(-8 106 70)" />
            <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(16 106 70)" />
            <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(40 106 70)" />
            <rect x="144" y="62" width="17" height="16" rx="2" transform="rotate(64 106 70)" />
          </g>

          {/* Layer 2: Red Letter 'L' */}
          <path
            d="M 12 16
               H 36
               V 98
               H 64
               V 124
               H 12
               Z"
            fill="#b0212b"
          />

          {/* Layer 3: Red Letter 'V' Left Arm */}
          <polygon
            points="38,16 62,16 88,124 64,124"
            fill="#b0212b"
          />

          {/* Layer 4: Red Circular Medallion */}
          <circle cx="106" cy="70" r="35" fill="#b0212b" />

          {/* Layer 5: Red Letter 'V' Right Arm */}
          <polygon
            points="64,124 88,124 140,16 116,16"
            fill="#b0212b"
          />

          {/* Layer 6 (FRONT OF ALL LAYERS): BOLD, PROMINENT WHITE LIGHTNING BOLT (⚡) */}
          <polygon
            id="prominent-white-lightning-bolt"
            points="118,36 90,70 112,70 82,104 130,62 108,62"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="miter"
          />
        </g>

        {/* ==================== RIGHT: WORDMARK LOCKUP ==================== */}
        <g id="wordmark-group" transform="translate(178, 16)">
          {/* Line 1: LOW VOLTAGE - All Dark Charcoal / Black (#1f2328) */}
          <text
            x="0"
            y="38"
            className="lv-brand-title"
          >
            LOW VOLTAGE
          </text>

          {/* Line 2: ENGINEERING - Royal Blue (#275ba4) */}
          <text
            x="0"
            y="76"
            textLength="330"
            lengthAdjust="spacing"
            className="lv-brand-eng"
          >
            ENGINEERING
          </text>

          {/* Line 3: Signature Red Rule with Terminal Square Box (#b0212b) */}
          <g id="terminal-bar-group" transform="translate(0, 91)">
            {/* Red horizontal rule */}
            <line x1="0" y1="6" x2="314" y2="6" stroke="#b0212b" strokeWidth="4.5" strokeLinecap="round" />
            {/* Solid red terminal square block at right end */}
            <rect x="314" y="-1.5" width="16" height="16" fill="#b0212b" rx="2" />
          </g>
        </g>
      </svg>

      {/* Optional Tagline */}
      {showTagline && (
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider pl-[4.75rem] -mt-1">
          Turning Concepts into Engineering Marvels
        </span>
      )}
    </div>
  );
};
