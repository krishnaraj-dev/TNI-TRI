import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          404 — PAGE NOT FOUND
        </span>
        <h1 className="text-3xl font-black text-[#002d62] mt-4 mb-2">
          Page Not Located
        </h1>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          The requested section does not exist or has been relocated within the TNI²TRI 2026 industrial intelligence framework.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#002d62] hover:bg-[#07192d] text-white font-bold text-xs uppercase tracking-wider transition-all w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 bg-slate-50 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Secretariat</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
