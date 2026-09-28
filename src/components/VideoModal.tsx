import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle2, ChevronRight, Layers, Target, AlertTriangle } from 'lucide-react';
import { AvichasLogo } from './AvichasLogo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: '01. Telemetric Ingestion',
      time: '0:00 - 0:35',
      heading: 'Unifying fragmented ERP, CRM & cloud data into verified KPIs',
      stat: '99.98% Telemetry Integrity',
    },
    {
      title: '02. OKR & Milestone Cascade',
      time: '0:35 - 1:05',
      heading: 'Linking board-level targets directly to sprint dependencies',
      stat: '100% Alignment Traceability',
    },
    {
      title: '03. Predictive Risk Radar',
      time: '1:05 - 1:40',
      heading: 'Catching schedule slips 4 weeks before quarterly deadlines',
      stat: '3.4x Quicker Intervention',
    },
    {
      title: '04. Institutional Memory',
      time: '1:40 - 2:00',
      heading: 'Preserving decision rationale across executive generations',
      stat: 'Zero Knowledge Loss',
    },
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        const next = prev + 1;
        if (next > 75) setActiveChapter(3);
        else if (next > 50) setActiveChapter(2);
        else if (next > 25) setActiveChapter(1);
        else setActiveChapter(0);
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#09111D] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#060B14] border-b border-white/10">
          <div className="flex items-center gap-2">
            <AvichasLogo size="sm" />
            <span className="text-xs text-slate-400 border-l border-white/10 pl-2">
              Product Walkthrough (2 min)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Simulator */}
        <div className="relative aspect-video w-full bg-[#050912] overflow-hidden flex flex-col justify-between p-6 sm:p-8">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Info Banner in Simulator */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              {chapters[activeChapter].title}
            </div>
            <span className="text-xs font-mono text-slate-400">
              {chapters[activeChapter].stat}
            </span>
          </div>

          {/* Central Animated Graphic */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9975B]/20 to-teal-500/20 border border-white/20 flex items-center justify-center text-[#C9975B] mb-4 shadow-xl">
              {activeChapter === 0 && <Layers className="w-7 h-7 text-teal-300" />}
              {activeChapter === 1 && <Target className="w-7 h-7 text-[#C9975B]" />}
              {activeChapter === 2 && <AlertTriangle className="w-7 h-7 text-amber-400" />}
              {activeChapter === 3 && <CheckCircle2 className="w-7 h-7 text-teal-300" />}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              {chapters[activeChapter].heading}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              Avichas establishes mathematically verified telemetry bridges,
              ensuring executive teams act on unambiguous performance truth.
            </p>
          </div>

          {/* Bottom Player Controls */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-3">
            {/* Progress Scrubber */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
              className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all relative"
            >
              <div
                className="h-full bg-gradient-to-r from-[#C9975B] via-teal-400 to-[#C9975B]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => {
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className="hover:text-white transition-colors"
                  title="Replay from start"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-[11px]">
                  {Math.floor((progress * 1.2) / 60)}:
                  {String(Math.floor((progress * 1.2) % 60)).padStart(2, '0')} / 2:00
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-3.5 py-1.5 rounded-md bg-[#C9975B] hover:bg-[#D4A771] text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Private Briefing</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
