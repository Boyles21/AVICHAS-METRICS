import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

interface HeroProps {
  onExplore: () => void;
  onTalkToAvichas: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onTalkToAvichas,
  onWatchVideo,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-24 flex items-center overflow-hidden bg-[#0A1220]"
    >
      {/* Background Image with Atmospheric Lighting Overlays */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/src/assets/images/hero_mountain_sunset_1790544530051.jpg"
          alt="Atmospheric mountain sunset backdrop representing organizational elevation and clarity"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:15s]"
        />
        {/* Deep Slate Left Scrim for absolute typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F1D] via-[#0B1527]/85 to-transparent" />
        {/* Top bar vignette */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#060B14]/90 to-transparent" />
        {/* Bottom smooth fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F8F7F4] via-[#0A1220]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
            {/* Kicker */}
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#C9975B] uppercase mb-4 font-mono">
              TRUSTED FOUNDATION FOR INTELLIGENT EXECUTION
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Turn organizational intent into measurable execution.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
              Avichas gives organizations a trusted foundation for understanding
              performance, aligning execution, and turning decisions into
              measurable outcomes.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-slate-950 bg-[#C9975B] hover:bg-[#D4A771] shadow-[0_4px_20px_rgba(201,151,91,0.35)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Avichas</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onTalkToAvichas}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium tracking-wide text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/20 hover:border-white/35 backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Talk to Avichas
              </button>
            </div>

            {/* Video Link */}
            <button
              onClick={onWatchVideo}
              className="group inline-flex items-center gap-3 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center bg-white/10 group-hover:bg-[#C9975B] group-hover:border-[#C9975B] group-hover:text-slate-950 transition-all duration-200">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span className="font-normal underline underline-offset-4 decoration-slate-500 group-hover:decoration-white">
                Watch how Avichas works (2 min)
              </span>
            </button>
          </div>

          {/* Right Column: Interactive SaaS Window Preview */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
