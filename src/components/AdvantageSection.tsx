import React, { useState } from 'react';
import { ShieldCheck, Brain, Target, BarChart2, Infinity as InfinityIcon } from 'lucide-react';

interface AdvantageItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  detail: string;
}

export const AdvantageSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const advantages: AdvantageItem[] = [
    {
      id: 'trusted',
      icon: ShieldCheck,
      title: 'Trusted',
      description: 'Your data, decisions and ambitions are protected.',
      detail: 'Zero data leakage, tenant isolation, and cryptographic integrity check on all telemetry.',
    },
    {
      id: 'intelligent',
      icon: Brain,
      title: 'Intelligent',
      description: 'Turn complex data into clear, actionable insights.',
      detail: 'Automated trend correlation and root-cause indicators distilled for executive decision-makers.',
    },
    {
      id: 'aligned',
      icon: Target,
      title: 'Aligned',
      description: 'Connect strategy, people, resources and execution.',
      detail: 'Dynamic cascade linking frontline sprint milestones straight to board-level strategic targets.',
    },
    {
      id: 'measurable',
      icon: BarChart2,
      title: 'Measurable',
      description: 'Track what matters. Drive real outcomes.',
      detail: 'Quantitative precision with real-time leading indicators rather than lagging annual retrospectives.',
    },
    {
      id: 'enduring',
      icon: InfinityIcon,
      title: 'Enduring',
      description: 'Built for today. Designed for tomorrow.',
      detail: 'Institutional memory and decision logs that learn from historic organizational patterns over years.',
    },
  ];

  return (
    <section id="advantage" className="py-20 bg-[#F8F7F4] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-stone-500 uppercase font-mono block mb-2">
            THE AVICHAS ADVANTAGE
          </span>
          <h2 className="text-xl sm:text-2xl text-stone-900 font-semibold tracking-tight">
            More than metrics. A foundation for clarity, alignment and results.
          </h2>
        </div>

        {/* 5-Column Feature Row with hairline dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/90 -mx-4 sm:mx-0">
          {advantages.map((item) => {
            const Icon = item.icon;
            const isHovered = activeItem === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className="group px-6 py-6 sm:py-2 flex flex-col items-start transition-all duration-200 hover:bg-stone-50/80 rounded-lg sm:rounded-none cursor-pointer"
              >
                {/* Icon */}
                <div className="w-10 h-10 mb-6 flex items-center justify-center text-stone-800 group-hover:text-[#C9975B] transition-colors duration-200">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-stone-950 mb-2 tracking-tight group-hover:text-stone-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Interactive subtle expansion detail */}
                <div
                  className={`overflow-hidden transition-all duration-300 text-[11px] text-stone-500 mt-3 pt-2 border-t border-stone-200/60 leading-normal ${
                    isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
