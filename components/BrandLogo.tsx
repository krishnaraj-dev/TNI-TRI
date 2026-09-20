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
}: BrandLogoProps) {
  const isLightMode = variant === 'light'; // on dark backgrounds (e.g. footer)

  if (variant === 'emblem') {
    return (
      <div className={`w-12 h-12 flex-shrink-0 ${className}`}>
        <Image
          src="/tni2tri-logo.png"
          alt="TNI²TRI 2026 Industrial Intelligence Emblem"
          width={160}
          height={160}
          priority
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </div>
    );
  }

  // Official logo image lockups:
  // - Light theme (Header): /tni2tri-full-logo.png
  // - Dark theme (Footer): /tni2tri-full-logo-dark.png
  const logoSrc = isLightMode ? '/tni2tri-full-logo-dark.png' : '/tni2tri-full-logo.png';

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      id={isLightMode ? 'tni2tri-footer-logo' : 'tni2tri-header-logo'}
      title="TNI²TRI 2026 — Tamilnadu Industrial Intelligence & Transformation Readiness Implementation"
    >
      <Image
        src={logoSrc}
        alt="TNI²TRI 2026 — Tamilnadu Industrial Intelligence & Transformation Readiness Implementation"
        width={540}
        height={180}
        priority
        referrerPolicy="no-referrer"
        className="h-10 sm:h-12 md:h-13 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </Link>
  );
}
