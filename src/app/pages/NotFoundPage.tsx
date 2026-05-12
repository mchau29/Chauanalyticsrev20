import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function NotFoundPage() {
  return (
    <div className="antialiased min-h-screen bg-[#1B1B1B] flex flex-col">

      {/* Status bar */}
      <div className="w-full bg-black text-[#E2E2E2] py-1.5 px-4 md:px-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
          <span className="text-[9px] mono tracking-[0.3em] opacity-70 uppercase">System State: Error</span>
        </div>
        <span className="text-[9px] mono tracking-[0.3em] opacity-50 uppercase font-light hidden sm:block">
          Error Code: <span className="text-red-400 opacity-100">404_NOT_FOUND</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1 md:py-2 flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <ImageWithFallback
              src="https://i.ibb.co/bMLxFNT8/logo-new-version.png"
              alt="Chau Analytics Logo"
              className="h-16 md:h-24 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <Link
            to="/"
            className="group relative flex-shrink-0 flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-[#E2E2E2] border border-white/15 px-5 py-3 overflow-hidden transition-all whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1B1B1B] transition-colors duration-300">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </span>
            <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="max-w-2xl w-full text-center">

          {/* Ghost 404 background number */}
          <div className="relative mb-6 select-none">
            <p
              className="anta text-[130px] sm:text-[180px] md:text-[220px] font-bold leading-none text-white/[0.035] absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              404
            </p>

            {/* Foreground content */}
            <div className="relative z-10 pt-10 pb-8">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="h-px w-8 bg-red-400/50" />
                <span className="mono text-[10px] text-red-400 uppercase tracking-[0.4em]">Signal_Lost</span>
                <span className="h-px w-8 bg-red-400/50" />
              </div>
              <h1 className="anta text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-3">
                PAGE_<span className="text-red-400">NULL</span>
              </h1>
              <p className="mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">
                Route not resolved
              </p>
            </div>
          </div>

          {/* Diagnostic block */}
          <div className="border border-white/8 bg-white/[0.025] p-6 md:p-8 mb-10 mx-auto max-w-md">
            <div className="flex gap-3 items-start text-left">
              <div className="w-0.5 flex-shrink-0 self-stretch bg-red-400/40 mt-0.5" />
              <div>
                <p className="mono text-[9px] text-red-400/80 uppercase tracking-[0.3em] mb-2">Diagnostic_Output</p>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  The requested route could not be resolved. The node you are looking for has been moved, removed, or never existed in this system.
                </p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group relative w-full sm:w-auto bg-[#4682B4] text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all shadow-xl text-center whitespace-nowrap"
            >
              <span className="relative z-10 group-hover:text-[#1B1B1B] transition-colors duration-300">Return_to_Home</span>
              <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* Footer sig */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="h-px w-6 bg-white/8" />
            <span className="mono text-[9px] text-slate-600 uppercase tracking-widest">Chau Analytics // System V2.06</span>
            <span className="h-px w-6 bg-white/8" />
          </div>
        </div>
      </main>

    </div>
  );
}