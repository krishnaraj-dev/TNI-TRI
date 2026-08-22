'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import siteMeta from '@/content/site-meta.json';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200" id="site-global-header">
      {/* Top Utility Bar */}
      <div className="bg-[#07192d] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteMeta.contact.location}</span>
            </span>
            <a
              href={`tel:${siteMeta.contact.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteMeta.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteMeta.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteMeta.contact.email}</span>
            </a>
          </div>

          {/* Utility Navigation */}
          <div className="flex items-center gap-3 font-semibold text-[11px] tracking-wider">
            <span className="text-slate-500 hidden sm:inline">ARCHITECTURE:</span>
            {siteMeta.utilityNav.map((u, i) => (
              <React.Fragment key={u.label}>
                <Link
                  href={u.href}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  title={u.desc}
                >
                  <span className="text-amber-400 font-bold">●</span>
                  <span>{u.label}</span>
                </Link>
                {i < siteMeta.utilityNav.length - 1 && <span className="text-slate-700">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${scrolled ? 'shadow-md border-slate-200 py-2.5' : 'border-slate-200/80 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo variant="full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 text-[14px] font-semibold text-slate-700">
            {siteMeta.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#002d62] font-bold'
                      : 'hover:bg-slate-100 hover:text-[#002d62]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/assessment"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#002d62] bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg transition-colors"
            >
              <span>Explore Framework</span>
            </Link>
            <Link
              href="/register"
              id="header-register-btn"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#002d62] to-[#0284c7] hover:from-[#07192d] hover:to-[#0369a1] px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>{siteMeta.primaryCTA.label}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#002d62] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            {siteMeta.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'bg-blue-50 text-[#002d62] font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#002d62]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-2 space-y-3">
            <Link
              href="/register"
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-[#002d62] to-[#0284c7] px-4 py-3 rounded-lg shadow"
            >
              <span>{siteMeta.primaryCTA.label}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>

            <Link
              href="/about"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-lg"
            >
              <span>{siteMeta.secondaryCTA.label}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
