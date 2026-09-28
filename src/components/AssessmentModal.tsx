import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, RotateCcw, Sparkles, Compass } from 'lucide-react';
import { AvichasLogo } from './AvichasLogo';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookBriefing: () => void;
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: { text: string; score: number; hint: string }[];
}

const assessmentQuestions: Question[] = [
  {
    id: 'strategy',
    category: 'Strategic Alignment',
    question: 'How clearly are 12-month organizational priorities cascaded into daily team milestones?',
    options: [
      {
        text: 'Siloed & fragmented — departments run on disjointed goals with high friction.',
        score: 15,
        hint: 'High risk of organizational drift',
      },
      {
        text: 'Documented in slides, but rarely referenced in weekly execution routines.',
        score: 45,
        hint: 'Passive alignment',
      },
      {
        text: 'Structured OKRs across leadership, though front-line linkage remains manual.',
        score: 75,
        hint: 'Developing execution rhythm',
      },
      {
        text: 'Continuous real-time alignment — every sprint maps directly to corporate value targets.',
        score: 100,
        hint: 'Enterprise benchmark tier',
      },
    ],
  },
  {
    id: 'data',
    category: 'Data Trust & KPIs',
    question: 'How do executive leaders currently evaluate core performance telemetry?',
    options: [
      {
        text: 'Manual spreadsheets compiled hours before executive board briefings.',
        score: 20,
        hint: 'Lagging & error-prone',
      },
      {
        text: 'Disparate BI dashboards where teams frequently debate whose metrics are accurate.',
        score: 45,
        hint: 'Metric trust deficit',
      },
      {
        text: 'Centralized data warehouse with weekly refreshes and verified metric owners.',
        score: 80,
        hint: 'Solid foundational hygiene',
      },
      {
        text: 'Avichas-grade single source of truth with automated lineage and anomaly alerts.',
        score: 100,
        hint: 'Continuous intelligence',
      },
    ],
  },
  {
    id: 'velocity',
    category: 'Execution Velocity',
    question: 'When a critical initiative encounters a blocker or slips schedule, how is it detected?',
    options: [
      {
        text: 'Discovered weeks later during quarterly reviews when it is too late to course-correct.',
        score: 15,
        hint: 'Critical latency exposure',
      },
      {
        text: 'Escalated through informal channels depending on individual initiative managers.',
        score: 50,
        hint: 'Ad-hoc intervention',
      },
      {
        text: 'Flagged in bi-weekly cross-functional standups with dependency tracking.',
        score: 80,
        hint: 'Proactive management',
      },
      {
        text: 'Automated predictive indicators signal delay risks before milestones are breached.',
        score: 100,
        hint: 'Leading-edge execution',
      },
    ],
  },
  {
    id: 'memory',
    category: 'Institutional Memory',
    question: 'How does your organization preserve decision rationale and learn from historic outcomes?',
    options: [
      {
        text: 'Decisions are forgotten when executives depart, resulting in repeated mistakes.',
        score: 10,
        hint: 'Organizational amnesia',
      },
      {
        text: 'Stored across scattered email threads, Slack archives, and meeting recordings.',
        score: 40,
        hint: 'Unstructured archives',
      },
      {
        text: 'Structured post-mortems conducted for major enterprise milestones.',
        score: 75,
        hint: 'Formal retrospectives',
      },
      {
        text: 'Unified institutional memory with continuous learning and predictive recommendations.',
        score: 100,
        hint: 'Enduring competitive moat',
      },
    ],
  },
];

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookBriefing,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = assessmentQuestions[currentStep];

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentStep] = score;
    setAnswers(nextAnswers);

    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Calculate composite score
  const totalScore =
    answers.length > 0
      ? Math.round(answers.reduce((a, b) => a + b, 0) / answers.length)
      : 0;

  const getProfileTier = (score: number) => {
    if (score >= 85) {
      return {
        title: 'Execution Exemplar',
        color: 'text-teal-400',
        badge: 'Top 5% of Enterprises',
        summary:
          'Your organization possesses advanced alignment architecture. Avichas Institutional Intelligence can convert this into an enduring competitive moat.',
      };
    }
    if (score >= 65) {
      return {
        title: 'Scalable Alignment Leader',
        color: 'text-[#C9975B]',
        badge: 'High Acceleration Potential',
        summary:
          'Strong core capabilities with occasional friction between strategic intent and frontline velocity. Avichas Execution & Intelligence will eliminate delay cycles.',
      };
    }
    return {
      title: 'Emerging Foundation',
      color: 'text-amber-400',
      badge: 'Immediate Value Opportunity',
      summary:
        'Substantial value is lost between board-level decisions and operational execution. Implementing Avichas Foundation will yield rapid clarity and metric trust.',
    };
  };

  const profile = getProfileTier(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0C1524] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#09101C] border-b border-white/10">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#C9975B]" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Organizational Alignment Profile
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!isCompleted ? (
            <div>
              {/* Progress Tracker */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                <span>
                  Question {currentStep + 1} of {assessmentQuestions.length}
                </span>
                <span className="text-teal-400 uppercase tracking-wider font-semibold">
                  {currentQ.category}
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C9975B] to-teal-400 transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="group text-left p-4 rounded-xl bg-white/5 hover:bg-[#14233A] border border-white/10 hover:border-[#C9975B]/60 transition-all duration-200 cursor-pointer flex flex-col gap-1 active:scale-[0.99]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {opt.text}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C9975B] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {opt.hint}
                    </span>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-1">
                {profile.badge}
              </span>

              <h3 className={`text-2xl font-bold ${profile.color} mb-2`}>
                {profile.title}
              </h3>

              <div className="my-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white tabular-nums">
                  {totalScore}
                </span>
                <span className="text-sm text-slate-400 font-mono">/ 100 Alignment Index</span>
              </div>

              <p className="text-sm text-slate-300 max-w-lg leading-relaxed mb-6">
                {profile.summary}
              </p>

              {/* Category Breakdown */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
                {assessmentQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className="text-[10px] text-slate-400 block truncate">
                      {q.category}
                    </span>
                    <span className="text-base font-bold text-white tabular-nums">
                      {answers[idx] || 0}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <button
                  onClick={() => {
                    onClose();
                    onBookBriefing();
                  }}
                  className="px-6 py-3 rounded-lg bg-[#C9975B] hover:bg-[#D4A771] text-slate-950 font-semibold text-xs tracking-wide shadow-lg transition-all active:scale-95 cursor-pointer whitespace-nowrap flex items-center gap-2"
                >
                  <span>Review with Avichas Executive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-medium transition-all cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
