import React from 'react';

/**
 * StatsBanner Component
 * Demonstrates:
 * - Responsive Grid Columns: grid-cols-2 sm:grid-cols-2 lg:grid-cols-4
 * - Responsive Typography: text-xl sm:text-2xl md:text-3xl lg:text-4xl
 * - Responsive Padding: p-4 sm:p-6 md:p-8
 * - Responsive Flex Direction: flex-col md:flex-row
 * - Flexbox Alignment: items-start md:items-center justify-between
 */
export default function StatsBanner() {
  const stats = [
    { label: "Total Elections", value: "6", change: "Current Cycle", sub: "Municipal & State" },
    { label: "Active Ballots", value: "2", change: "Voting Open", highlight: true, sub: "Closes 8:00 PM" },
    { label: "Registered Voters", value: "24,592", change: "+12% this month", sub: "District 4 Verified" },
    { label: "System Integrity", value: "100%", change: "Zero Anomalies", sub: "Cryptographic Audit" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-civic-900 to-slate-800 rounded-3xl text-white p-5 sm:p-7 md:p-10 shadow-xl border border-slate-700/50">
      {/* Header section with responsive flex direction and alignment */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-civic-500/20 text-civic-200 border border-civic-400/30 mb-2">
            <span>● 2024 Election Cycle Active</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Voter Dashboard & Electoral Events
          </h1>
          <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl">
            Welcome back, <strong className="text-white">Ishan Katariya</strong>. Your voter registration is verified for the current electoral term. Cast your vote securely below.
          </p>
        </div>

        {/* Action badge with responsive width */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Registered Precinct</span>
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Precinct 42 – Downtown Library
          </span>
          <span className="text-[11px] text-slate-400">Class: D15A | Roll No: 19</span>
        </div>
      </div>

      {/* Responsive Grid of summary statistics */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-3.5 sm:p-4 md:p-5 rounded-2xl border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] ${
              stat.highlight
                ? 'bg-civic-600/30 border-civic-400/40 text-civic-100'
                : 'bg-slate-800/50 border-slate-700/60 text-slate-200'
            }`}
          >
            <span className="text-xs sm:text-sm font-medium text-slate-300 block truncate">
              {stat.label}
            </span>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {stat.value}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px] sm:text-xs">
              <span className="text-emerald-400 font-medium">{stat.change}</span>
              <span className="hidden sm:inline text-slate-400">{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
