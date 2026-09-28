import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface AssessmentBannerProps {
  onStartAssessment: () => void;
}

export const AssessmentBanner: React.FC<AssessmentBannerProps> = ({
  onStartAssessment,
}) => {
  return (
    <section id="assessment" className="relative py-28 overflow-hidden bg-[#0A111F]">
      {/* Mountain Climber Summit Background Image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/src/assets/images/mountain_climber_summit_1790544601804.jpg"
          alt="Leader standing at the summit of a mountain at dusk representing organizational heights"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right sm:object-center"
        />
        {/* Deep Slate Left Scrim for absolute typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D19] via-[#0A1424]/90 to-[#070D19]/60" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F7F4] via-transparent to-transparent opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Block: Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#C9975B] uppercase font-mono mb-3">
              READY TO MOVE FORWARD?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-tight mb-4 text-balance">
              Let&apos;s turn your intentions into measurable outcomes.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8">
              Take our quick assessment to see how Avichas can help your organization.
            </p>

            <button
              onClick={onStartAssessment}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-slate-950 bg-[#C9975B] hover:bg-[#D4A771] shadow-[0_4px_24px_rgba(201,151,91,0.35)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Start Your Assessment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Block: Frosted Glass Profile Teaser Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              onClick={onStartAssessment}
              className="group w-full max-w-lg p-6 sm:p-7 rounded-2xl bg-[#0F1B2E]/80 border border-white/20 hover:border-[#C9975B]/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer flex items-center justify-between gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#C9975B] shrink-0 group-hover:scale-105 group-hover:bg-[#C9975B]/20 transition-all duration-300">
                  <Compass className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-medium text-teal-300">
                      In 2 minutes, get your
                    </span>
                    <Sparkles className="w-3 h-3 text-[#C9975B]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5 group-hover:text-teal-200 transition-colors">
                    Organizational Alignment Profile
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    See where you stand, what to improve, and get personalized recommendations.
                  </p>
                </div>
              </div>

              {/* Action Circle Arrow */}
              <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white shrink-0 group-hover:bg-[#C9975B] group-hover:border-[#C9975B] group-hover:text-slate-950 transition-all duration-200">
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
