import React from 'react';

/**
 * ElectionModal Component
 * Interactive ballot preview modal matching View 5 / View 6 / View 17 of the design.
 * Demonstrates:
 * - Responsive sizing: max-w-lg md:max-w-2xl
 * - Responsive Flexbox & Grid: flex-col md:flex-row, grid-cols-1 sm:grid-cols-2
 * - Responsive typography and padding
 */
export default function ElectionModal({ election, onClose }) {
  if (!election) return null;

  const candidates = [
    {
      name: "Sarah Jenkins",
      party: "Progressive Civic Party",
      bio: "Focusing on urban renewal, public transportation expansion, and green energy infrastructure.",
      initials: "SJ",
      bgColor: "bg-blue-600"
    },
    {
      name: "Marcus Thorne",
      party: "Conservative Alliance",
      bio: "Committed to fiscal responsibility, lowering local business taxes, and public safety initiatives.",
      initials: "MT",
      bgColor: "bg-indigo-700"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg md:max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
              Electoral Ballot Preview • {election.code}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase text-civic-600">{election.category} Election</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">{election.title}</h2>
            </div>
            <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold border ${election.badgeColor}`}>
              {election.status}
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            {election.description}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <span className="font-semibold text-slate-700">Polling Dates:</span>
              <p className="text-slate-500">{election.startDate} to {election.endDate}</p>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Hours of Operation:</span>
              <p className="text-slate-500">{election.timeWindow}</p>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Designated Precinct:</span>
              <p className="text-slate-500">{election.precinct}</p>
            </div>
            <div>
              <span className="font-semibold text-slate-700">Participation Status:</span>
              <p className="font-semibold text-civic-600">{election.votedStatus}</p>
            </div>
          </div>

          {/* Candidates Section */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Official Candidates on Ballot ({election.candidatesCount})
            </h4>

            <div className="mt-3 space-y-3">
              {candidates.map((cand, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-civic-400 bg-white transition gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${cand.bgColor} text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow`}>
                      {cand.initials}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{cand.name}</h5>
                      <p className="text-xs text-civic-700 font-medium">{cand.party}</p>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{cand.bio}</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 hover:bg-slate-50 text-slate-700 transition">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2.5">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>
              <strong>Important Warning:</strong> Under State Election Code §14-A, duplicate vote casting is prohibited. Once a ballot is cryptographically submitted, the record is irreversible.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
          >
            Close Preview
          </button>
          {election.status === 'Active' && (
            <button
              onClick={() => alert(`Simulated: Initializing cryptographic voting session for ${election.title}...`)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-civic-600 hover:bg-civic-700 text-white shadow-md transition"
            >
              Proceed to Cast Vote →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
