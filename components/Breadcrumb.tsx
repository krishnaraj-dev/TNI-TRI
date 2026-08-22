import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  pageNumber?: string;
}

export function Breadcrumb({ items, pageNumber }: BreadcrumbProps) {
  return (
    <div className="bg-slate-100/80 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-600">
        <nav className="flex items-center space-x-1.5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#002d62] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-500" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.label}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {isLast || !item.href ? (
                  <span className="text-[#002d62] font-semibold">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-[#002d62] transition-colors">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {pageNumber && (
          <div className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
            {pageNumber}
          </div>
        )}
      </div>
    </div>
  );
}
