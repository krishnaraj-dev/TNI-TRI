import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`text-xs font-bold uppercase tracking-widest mb-2.5 inline-flex items-center gap-2 ${
          dark ? 'text-amber-400' : 'text-[#0284c7]'
        }`}>
          <span className="w-2 h-0.5 bg-current rounded-full"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3.5xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-[#002d62]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
