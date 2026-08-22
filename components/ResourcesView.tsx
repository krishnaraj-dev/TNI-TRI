'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import resourcesData from '@/content/resources.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Search,
  Eye,
  X,
  BookOpen,
  FileText,
  Sparkles,
  Layers,
  ArrowRight,
  Printer
} from 'lucide-react';

export interface ResourceItem {
  id: string;
  category: string;
  title: string;
  type: string;
  readTime: string;
  date: string;
  summary: string;
  tags: string[];
}

export function ResourcesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<ResourceItem | null>(null);

  // Flatten all items across categories with their parent category name
  const allItems: ResourceItem[] = resourcesData.categories.flatMap((cat, catIdx) =>
    cat.items.map((item, itemIdx) => ({
      id: `${cat.id}-${itemIdx}`,
      category: cat.name,
      title: item.title,
      type: item.type,
      readTime: item.readTime,
      date: item.date,
      summary: item.summary,
      tags: item.tags,
    }))
  );

  const categories = ['All', ...resourcesData.categories.map((c) => c.name)];

  const filtered = allItems.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: 'Resources & Intelligence', href: '/resources' }]}
        pageNumber="PAGE 09 — RESOURCES"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {resourcesData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {resourcesData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {resourcesData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {resourcesData.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Resource Library */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-[#002d62] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications & insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs font-bold text-slate-500 mb-6 flex items-center justify-between">
            <span>Showing {filtered.length} Resource Intelligence Assets</span>
            {selectedCategory !== 'All' && (
              <span className="text-[#0284c7]">Filtered by: {selectedCategory}</span>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res) => (
              <div
                key={res.id}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-[#002d62] border border-blue-200">
                      {res.type}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 font-mono">
                      {res.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#002d62] mb-2 group-hover:text-blue-900 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {res.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {res.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">{res.readTime}</span>
                  <button
                    onClick={() => setActiveModalItem(res)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#002d62] hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Executive Summary</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0284c7] block">
                  {activeModalItem.category} • {activeModalItem.type}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#002d62] mt-1">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400 mb-4">
              Published: {activeModalItem.date} • Estimated Reading Time: {activeModalItem.readTime}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Executive Synthesis
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {activeModalItem.summary}
              </p>
            </div>

            <div className="space-y-3 mb-6 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>Full Report Context:</strong> This intelligence document forms part of the ongoing TNI²TRI 2026 industrial capability repository. Participating enterprises receive tailored benchmark extracts directly compared against sector-wide performance distributions.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1">
                {activeModalItem.tags.map((t) => (
                  <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#002d62]">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Print Summary
                </button>
                <Link
                  href="/register"
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-[#002d62] text-white hover:bg-[#07192d]"
                >
                  Apply for Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
