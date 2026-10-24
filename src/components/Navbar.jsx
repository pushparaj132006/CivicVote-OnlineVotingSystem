import React, { useState } from 'react';

/**
 * Responsive Navigation Bar Component
 * Demonstrates:
 * - Responsive Breakpoints: md:*, lg:*
 * - Responsive Visibility: hidden md:flex, flex md:hidden
 * - Flexbox alignment: items-center, justify-between
 * - Responsive Padding: px-4 sm:px-6 lg:px-8
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-civic-700 text-white flex items-center justify-center shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                Civic<span className="text-civic-600">Vote</span>
              </span>
              <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Official Election Portal
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links: Responsive Visibility (hidden on mobile, visible on md+) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#elections" className="text-civic-600 font-semibold hover:text-civic-700 transition">
              Elections & Events
            </a>
            <a href="#candidates" className="hover:text-slate-900 transition">
              Candidates
            </a>
            <a href="#results" className="hover:text-slate-900 transition">
              Results & Audits
            </a>
            <a href="#help" className="hover:text-slate-900 transition">
              Voter Assistance
            </a>
          </nav>

          {/* Right Header Area: Authenticated Voter Info & Secure Session Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-xs font-bold text-slate-800">Ishan Katariya</span>
              <span className="text-[11px] font-mono text-slate-400">Voter ID: VA-D15A-19</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="hidden md:inline">Secure Session</span> Active
            </div>
          </div>

          {/* Mobile Menu Button: Responsive Visibility (block md:hidden) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-civic-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="px-3 py-2 bg-slate-50 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900">Ishan Katariya</p>
                <p className="text-[11px] font-mono text-slate-500">Voter ID: VA-D15A-19 • Class D15A</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-medium">Verified</span>
            </div>
            <a
              href="#elections"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-civic-700 bg-civic-50"
            >
              Available Elections
            </a>
            <a
              href="#candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
            >
              Candidate List
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
            >
              Election Results
            </a>
            <a
              href="#help"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
            >
              Help & Polling Locator
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
