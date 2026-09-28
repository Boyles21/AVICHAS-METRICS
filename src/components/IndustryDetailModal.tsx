import React from 'react';
import { X, Building2, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { IndustryItem } from './IndustriesSection';

interface IndustryDetailModalProps {
  industry: IndustryItem | null;
  onClose: () => void;
  onContact: () => void;
}

export const IndustryDetailModal: React.FC<IndustryDetailModalProps> = ({
  industry,
  onClose,
  onContact,
}) => {
  if (!industry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0C1524] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with image banner */}
        <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
          <img
            src={industry.image}
            alt={industry.title}
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1524] via-[#0C1524]/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white bg-black/40 backdrop-blur-md rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] text-teal-300 font-mono uppercase tracking-widest block mb-1">
              Industry Briefing
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {industry.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          <div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {industry.description}
            </p>
          </div>

          {/* Quantified Impact Metrics */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Validated Executive Impact
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {industry.stats.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col"
                >
                  <span className="text-2xl font-extrabold text-[#C9975B] tabular-nums mb-1">
                    {s.value}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Client deployment profile */}
          <div className="p-3.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-xs text-teal-200 flex items-center gap-2.5">
            <Building2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Deployed across {industry.clientsServed}</span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C9975B] hover:bg-[#D4A771] text-slate-950 font-semibold text-xs tracking-wide shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore {industry.title} Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
