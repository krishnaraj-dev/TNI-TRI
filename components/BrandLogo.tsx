'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'emblem' | 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export function BrandLogo({
  variant = 'full',
  className = '',
  showSubtitle = true,
}: BrandLogoProps) {
  const isLightMode = variant === 'light'; // on dark backgrounds
  
  const emblem = (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TNI²TRI Industrial Intelligence Emblem"
    >
      {/* Outer Gear Wheel Rim */}
      <circle
        cx="92"
        cy="96"
        r="80"
        stroke={isLightMode ? "#38bdf8" : "#0284c7"}
        strokeWidth="5"
        strokeDasharray="4 2"
        opacity="0.7"
      />
      <circle
        cx="92"
        cy="96"
        r="72"
        stroke={isLightMode ? "#e0f2fe" : "#0f3a68"}
        strokeWidth="9"
      />
      
      {/* Gear Teeth / Cogs on the left & top rim */}
      <path
        d="M 22 96 L 12 96 A 8 8 0 0 1 12 80 L 22 83
           M 28 60 L 19 53 A 8 8 0 0 1 25 41 L 35 48
           M 47 33 L 42 22 A 8 8 0 0 1 56 16 L 61 28
           M 78 19 L 79 8 A 8 8 0 0 1 95 8 L 94 19
           M 115 22 L 122 12 A 8 8 0 0 1 135 20 L 128 30
           M 33 130 L 22 135 A 8 8 0 0 0 28 149 L 39 143
           M 54 158 L 47 169 A 8 8 0 0 0 61 176 L 68 165"
        stroke={isLightMode ? "#7dd3fc" : "#0c4a7c"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Concentric Tech Ring with Nodes */}
      <circle
        cx="92"
        cy="96"
        r="54"
        stroke={isLightMode ? "#0284c7" : "#00529b"}
        strokeWidth="3"
      />
      <circle cx="48" cy="80" r="3.5" fill={isLightMode ? "#38bdf8" : "#0284c7"} />
      <circle cx="132" cy="74" r="3.5" fill={isLightMode ? "#38bdf8" : "#0284c7"} />
      <circle cx="92" cy="42" r="4" fill={isLightMode ? "#fbbf24" : "#f59e0b"} />
      <line x1="48" y1="80" x2="68" y2="92" stroke={isLightMode ? "#38bdf8" : "#0284c7"} strokeWidth="1.5" />
      <line x1="132" y1="74" x2="118" y2="88" stroke={isLightMode ? "#38bdf8" : "#0284c7"} strokeWidth="1.5" />

      {/* Tamil Nadu State Silhouette representation */}
      <path
        d="M 88 56 
           L 104 62 
           L 110 74 
           L 106 88 
           L 108 104 
           L 102 122 
           L 96 136 
           L 86 142 
           L 82 132 
           L 74 122 
           L 70 108 
           L 74 92 
           L 68 84 
           L 74 70 
           L 84 64 Z"
        fill={isLightMode ? "#0f2f57" : "#0b2545"}
        stroke={isLightMode ? "#38bdf8" : "#38bdf8"}
        strokeWidth="1.5"
      />

      {/* Constellation / Network node mesh over Tamil Nadu */}
      <g stroke={isLightMode ? "#93c5fd" : "#60a5fa"} strokeWidth="1" opacity="0.85">
        <line x1="84" y1="68" x2="98" y2="76" />
        <line x1="98" y1="76" x2="102" y2="92" />
        <line x1="84" y1="68" x2="78" y2="88" />
        <line x1="78" y1="88" x2="94" y2="96" />
        <line x1="94" y1="96" x2="102" y2="92" />
        <line x1="94" y1="96" x2="88" y2="114" />
        <line x1="102" y1="92" x2="98" y2="120" />
        <line x1="88" y1="114" x2="98" y2="120" />
        <line x1="88" y1="114" x2="84" y2="134" />
      </g>
      <circle cx="84" cy="68" r="2.5" fill="#f59e0b" />
      <circle cx="98" cy="76" r="2.5" fill="#38bdf8" />
      <circle cx="78" cy="88" r="2.5" fill="#38bdf8" />
      <circle cx="102" cy="92" r="2.5" fill="#10b981" />
      <circle cx="94" cy="96" r="3" fill="#ffffff" />
      <circle cx="88" cy="114" r="2.5" fill="#38bdf8" />
      <circle cx="98" cy="120" r="2.5" fill="#f59e0b" />
      <circle cx="84" cy="134" r="2.5" fill="#10b981" />

      {/* Dynamic Growth / Transformation Arrow Sweeping Upward */}
      {/* Lower Green Base Curve */}
      <path
        d="M 32 165 C 55 186 102 195 146 172 C 168 160 182 142 188 126"
        stroke="#0d9488"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Inner Green Arc */}
      <path
        d="M 46 172 C 72 192 118 190 156 160"
        stroke="#16a34a"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Main Golden/Amber Rising Arc & Arrowhead */}
      <path
        d="M 38 152 C 60 170 108 174 152 135 C 168 120 178 98 184 76"
        stroke="url(#arrowGrad)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Dynamic Arrowhead */}
      <polygon
        points="184,54 196,86 168,78"
        fill="#ea580c"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="arrowGrad" x1="40" y1="160" x2="184" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="45%" stopColor="#eab308" />
          <stop offset="85%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`w-12 h-12 flex-shrink-0 ${className}`}>{emblem}</div>;
  }

  const textColorMain = isLightMode ? 'text-white' : 'text-[#002d62]';
  const textColor2 = 'text-[#ea580c]';
  const textColorSub = isLightMode ? 'text-slate-300' : 'text-[#003870]';
  const dividerColor = isLightMode ? 'border-slate-500' : 'border-[#003870]/40';

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`} id="tni2tri-main-logo">
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        {emblem}
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline font-black tracking-tight leading-none text-2xl sm:text-3xl">
          <span className={`${textColorMain} font-black tracking-wider`}>TNI</span>
          <sup className={`${textColor2} font-extrabold text-lg sm:text-xl ml-0.5 mr-0.5`}>2</sup>
          <span className={`${textColorMain} font-black tracking-wider`}>TRI</span>
        </div>
        
        {/* Year line */}
        <div className="flex items-center gap-2 my-0.5">
          <span className={`h-px flex-1 border-t ${dividerColor}`}></span>
          <span className={`text-[11px] sm:text-xs font-bold tracking-[0.25em] ${isLightMode ? 'text-amber-400' : 'text-[#002d62]'}`}>
            2 0 2 6
          </span>
          <span className={`h-px flex-1 border-t ${dividerColor}`}></span>
        </div>

        {showSubtitle && (
          <div className={`text-[9.5px] sm:text-[10.5px] font-medium leading-tight ${textColorSub} hidden sm:block`}>
            <div>Tamil Nadu Industrial Intelligence</div>
            <div className="flex items-center gap-1 font-semibold text-[#0284c7]">
              <span>→</span>
              <span>Transformation Readiness & Implementation</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
