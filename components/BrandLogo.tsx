'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div
      className={`relative w-full h-full rounded-full flex items-center justify-center transition-all ${
        isLightMode
          ? 'bg-white/10 p-0.5 ring-1 ring-white/20 shadow-md shadow-sky-950/40'
          : 'bg-transparent drop-shadow-sm'
      }`}
    >
      <Image
        src="/tni2tri-logo.png"
        alt="TNI²TRI 2026 Industrial Intelligence Emblem"
        width={160}
        height={160}
        priority
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain rounded-full select-none pointer-events-none"
      />
    </div>
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
