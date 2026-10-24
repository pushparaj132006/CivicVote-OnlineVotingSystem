import React from 'react';

/**
 * Reusable ElectionCard Component (Event Card)
 * Demonstrates:
 * - Flexbox & Alignment: flex, items-center, justify-between, flex-row, flex-col, gap-*
 * - Responsive Breakpoints: sm:*, md:*, lg:*
 * - Responsive Typography: text-xs sm:text-sm md:text-base lg:text-xl
 * - Responsive Background Color: bg-white md:bg-white lg:hover:bg-slate-50
 * - Responsive Padding: p-4 sm:p-5 md:p-6
 * - Responsive Flex Direction: flex-col sm:flex-row, flex-col md:flex-row
 * - Responsive Visibility: hidden sm:inline-block, hidden md:flex
 * - Width utilities: w-full, md:w-auto, sm:w-auto
 */
export default function ElectionCard({ election, onSelect }) {
  const {
    code,
    title,
    category,
    description,
    startDate,
    endDate,
    timeWindow,
    precinct,
    status,
    votedStatus,
    candidatesCount,
    contestsCount,
    receiptNo
  } = election;

  const isActive = status === 'Active';
  const isUpcoming = status === 'Upcoming';
  const isClosed = status === 'Closed';

  return (
    <article
      className="group relative flex flex-col justify-between h-full bg-white rounded-2xl border border-slate-200 
                 p-4 sm:p-5 md:p-6 lg:p-7
                 shadow-sm hover:shadow-xl transition-all duration-300 
                 hover:border-civic-500/50 hover:-translate-y-1"
    >
      {/* Top Header: Category tag, Status badges with Responsive Flex Direction & Alignment */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-civic-50 text-civic-700 border border-civic-200">
              {category}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              {code}
            </span>
          </div>

          {/* Status Badges with Responsive Visibility */}
          <div className="flex items-center gap-2">
            {isActive && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active
              </span>
            )}
            {isUpcoming && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300">
                Upcoming
              </span>
            )}
            {isClosed && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-300">
                Closed
              </span>
            )}

            {/* Voter participation badge */}
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                votedStatus === 'Voted'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
              }`}
            >
              {votedStatus}
            </span>
          </div>
        </div>

        {/* Title & Description with Responsive Typography */}
        <div className="mt-4">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-civic-700 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Event Key Metrics in Responsive Grid / Flex */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
          {/* Voting Period */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-civic-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <span className="block font-medium text-slate-900">Voting Period</span>
              <span className="text-slate-500">{startDate} – {endDate}</span>
            </div>
          </div>

          {/* Time Window */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-civic-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="block font-medium text-slate-900">Hours</span>
              <span className="text-slate-500">{timeWindow}</span>
            </div>
          </div>

          {/* Precinct Location */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-civic-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <span className="block font-medium text-slate-900">Assigned Polling</span>
              <span className="text-slate-500 truncate max-w-[150px] sm:max-w-none block">{precinct}</span>
            </div>
          </div>

          {/* Candidates & Contests Count */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-civic-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <span className="block font-medium text-slate-900">Ballot Stats</span>
              <span className="text-slate-500">{candidatesCount} Candidates • {contestsCount} Contests</span>
            </div>
          </div>
        </div>

        {/* Responsive Visibility: Extra verification notice shown only on medium and larger screens */}
        <div className="mt-3 hidden md:flex items-center gap-1.5 text-xs text-slate-400">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>End-to-End Cryptographically Audited Event</span>
        </div>
      </div>

      {/* Card Action Footer: Responsive Flex Direction, Alignment, and Width Utilities */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {receiptNo ? (
          <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
            <span className="text-slate-400">Receipt:</span>
            <span className="font-semibold text-slate-700">{receiptNo}</span>
          </div>
        ) : (
          <div className="text-xs text-slate-500">
            {isActive ? 'Voting closes at 8:00 PM' : isUpcoming ? 'Registration open' : 'Election finalized'}
          </div>
        )}

        {/* Call-to-action button: Responsive Width (w-full on mobile, sm:w-auto on larger screens) */}
        {isActive && (
          <button
            onClick={() => onSelect(election)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 
                       bg-civic-600 hover:bg-civic-700 active:bg-civic-800 text-white text-xs sm:text-sm font-semibold 
                       rounded-xl shadow-sm hover:shadow transition-all duration-150 focus:ring-2 focus:ring-civic-500 focus:outline-none"
          >
            <span>Access Ballot</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}

        {isUpcoming && (
          <button
            onClick={() => onSelect(election)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 
                       bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold 
                       rounded-xl transition-all duration-150 border border-slate-300"
          >
            <span>Preview Candidates</span>
          </button>
        )}

        {isClosed && (
          <button
            onClick={() => onSelect(election)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 
                       bg-civic-50 hover:bg-civic-100 text-civic-700 text-xs sm:text-sm font-semibold 
                       rounded-xl transition-all duration-150 border border-civic-200"
          >
            <span>View Certified Results</span>
          </button>
        )}
      </div>
    </article>
  );
}
