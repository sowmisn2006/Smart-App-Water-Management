import { BrainCircuit, Power } from 'lucide-react';

export default function AiReportPanel({ report, pumpStatus, togglePump }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mt-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="bg-gradient-to-r from-emerald-900 via-blue-900 to-blue-950 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 backdrop-blur-sm rounded-xl text-emerald-400 border border-emerald-500/30">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Local AI Analysis Report</h2>
              <p className="text-emerald-100/70 text-sm mt-1">Real-time inference via Qwen LLM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Automated Supply</span>
            <button 
              onClick={togglePump}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-blue-900 ${
                pumpStatus ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-gray-400/50'
              }`}
            >
              <span className="sr-only">Toggle automated water supply</span>
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                  pumpStatus ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-bold w-8 ${pumpStatus ? 'text-emerald-400 drop-shadow-md' : 'text-gray-400'}`}>
              {pumpStatus ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-blue-500 rounded-l-2xl transition-all duration-300 group-hover:w-2"></div>
          
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-emerald-600 opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.5-.5 2.5-1.5 3.5"></path></svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-xl italic font-medium">
                {report}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
