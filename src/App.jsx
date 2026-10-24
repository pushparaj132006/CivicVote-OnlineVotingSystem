import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import StatsBanner from './components/StatsBanner';
import ElectionCard from './components/ElectionCard';
import ElectionModal from './components/ElectionModal';
import { electionsData } from './data/electionsData';

/**
 * Main Event Page Application: CivicVote Online Voting System
 * Demonstrates:
 * 1. Flexbox & Alignment: flex, items-center, justify-between, flex-row, flex-col, gap-4
 * 2. Responsive Breakpoints: sm:*, md:*, lg:*, xl:*
 * 3. Responsive Grid Columns: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
 * 4. Responsive Typography: text-sm md:text-base, text-xl md:text-2xl lg:text-3xl
 * 5. Responsive Background Color: bg-slate-50 md:bg-gray-50/80
 * 6. Responsive Padding: p-4 sm:p-6 md:p-8 lg:p-10
 * 7. Responsive Flex Direction: flex-col sm:flex-row, flex-col md:flex-row
 * 8. Responsive Visibility: hidden sm:inline, hidden md:flex, block md:hidden
 * 9. Width Utilities: w-full, md:w-auto, max-w-7xl
 */
export default function App() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElection, setSelectedElection] = useState(null);

  // Filtered elections based on active tab & search query
  const filteredElections = useMemo(() => {
    return electionsData.filter((election) => {
      const matchesFilter = filter === 'All' ? true : election.status === filter;
      const matchesSearch =
        election.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        election.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        election.precinct.toLowerCase().includes(searchQuery.toLowerCase()) ||
        election.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 md:bg-slate-100/60 flex flex-col justify-between font-sans text-slate-800">
      {/* Sticky Navigation Bar with Responsive Breakpoints */}
      <Navbar />

      {/* Main Container with Responsive Max-Width and Responsive Padding */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8">
        
        {/* Top Hero / Stats Banner */}
        <StatsBanner />

        {/* Section Header: Controls & Filtering Section */}
        <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Title with Responsive Typography */}
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-civic-600"></span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Available Elections & Ballot Events
                </h2>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Select an election to review participating candidates and cast your encrypted vote.
              </p>
            </div>

            {/* Filter Tabs & Search Bar: Responsive Flex Direction (Column on mobile, Row on md+) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Input: Responsive Width (w-full on mobile, sm:w-64 on desktop) */}
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search election or precinct..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-civic-500 focus:border-transparent transition"
                />
              </div>

              {/* Status Filter Badges: Responsive Width & Flexbox */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto">
                {['All', 'Active', 'Upcoming', 'Closed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                      filter === status
                        ? 'bg-white text-civic-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-bar showing count and responsive helper visibility */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{filteredElections.length}</strong> of{' '}
              <strong className="text-slate-800">{electionsData.length}</strong> scheduled voting events
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              CivicVote Real-Time Ballot Sync
            </span>
          </div>
        </section>

        {/* Responsive Grid Section for Event Cards */}
        {/* Mobile: 1 column | Tablet (sm/md): 2 columns | Desktop (lg/xl): 3 columns */}
        <section>
          {filteredElections.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {filteredElections.map((election) => (
                <ElectionCard
                  key={election.id}
                  election={election}
                  onSelect={(selected) => setSelectedElection(selected)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800">No elections match your filter</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching for a different keyword or reset the filter status to view all scheduled events.
              </p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-civic-600 text-white rounded-xl text-xs font-semibold hover:bg-civic-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Quick Help & Polling Station Locator Callout: Demonstrates Responsive Flex Direction and Width */}
        <section className="bg-gradient-to-r from-civic-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-civic-200">
              Need Voting Assistance?
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              In-Person Polling Station & Accessible Voting Equipment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Voters requiring curbside voting, language assistance in Spanish or Cantonese, or physical ballot delivery can connect with our 24/7 Election Help Desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => alert('Hotline: 1-800-CIVIC-VOTE (Toll Free)')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition text-center shadow"
            >
              Contact Election Officer
            </button>
            <button
              onClick={() => alert('Opening interactive GIS Precinct map...')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-civic-700 hover:bg-civic-600 text-white text-xs sm:text-sm font-semibold transition text-center border border-civic-500"
            >
              Find Polling Location
            </button>
          </div>
        </section>
      </main>

      {/* Responsive Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-slate-800">CivicVote Online Voting System</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>FSD Lab Experiment 2: Responsive Event Page</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block font-semibold text-slate-700">Ishan Katariya | Class: D15A | Roll No: 19</span>
              <span className="text-[11px] text-slate-400">React Components & Tailwind CSS Responsive Layout</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Ballot Preview Modal */}
      <ElectionModal
        election={selectedElection}
        onClose={() => setSelectedElection(null)}
      />
    </div>
  );
}
