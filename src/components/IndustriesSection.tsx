import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  stats: { label: string; value: string }[];
  clientsServed: string;
}

interface IndustriesSectionProps {
  onSelectIndustry: (industry: IndustryItem) => void;
  onExploreIndustries: () => void;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    subtitle: 'Higher trust. Better decisions.',
    image: '/images/industry_financial_skyline.jpg',
    description:
      'Empowering banks, asset managers, and fintech leaders to unify risk exposure, capital allocation, and regulatory compliance into real-time executive execution.',
    stats: [
      { label: 'Risk Mitigation Velocity', value: '+42%' },
      { label: 'Audit Prep Reduction', value: '65%' },
    ],
    clientsServed: 'Tier-1 Global Banks & Asset Management Firms',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Better care. Greater efficiency.',
    image: '/images/industry_healthcare_team.jpg',
    description:
      'Bridging clinical outcomes with hospital operational capacity, staffing forecasts, and compliance across multi-facility health systems.',
    stats: [
      { label: 'Resource Utilization', value: '+28%' },
      { label: 'Care Protocol Adherence', value: '99.4%' },
    ],
    clientsServed: 'Integrated Delivery Networks & Academic Medical Centers',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Smarter operations. Stronger output.',
    image: '/images/industry_manufacturing_floor.jpg',
    description:
      'Synchronizing global supply chain tiers, factory floor IoT metrics, and continuous throughput goals with strategic EBITDA targets.',
    stats: [
      { label: 'Line Stoppage Downtime', value: '-34%' },
      { label: 'OEE Uplift', value: '+19%' },
    ],
    clientsServed: 'Global OEMs, Aerospace, and High-Precision Fabricators',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    subtitle: 'Better insights. Greater impact.',
    image: '/images/industry_professional_services.jpg',
    description:
      'Providing consulting, legal, and engineering practices with live partner billability, client delivery health, and intellectual capital alignment.',
    stats: [
      { label: 'Realization Rate', value: '+14%' },
      { label: 'Engagement Margin', value: '+22%' },
    ],
    clientsServed: 'Global Strategy Consultancies & Specialized Practices',
  },
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
  onExploreIndustries,
}) => {
  return (
    <section id="industries" className="py-24 bg-[#08101E] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header Block: Left title + CTA Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-teal-400 uppercase font-mono block mb-3">
              INDUSTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white mb-4 text-balance">
              Built for complex organizations across industries.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              From financial services to healthcare, manufacturing to education
              — Avichas helps organizations turn ambition into measurable
              results.
            </p>
          </div>

          <button
            onClick={onExploreIndustries}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold tracking-wide text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 cursor-pointer whitespace-nowrap self-start lg:self-auto"
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industriesData.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectIndustry(item)}
              className="group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-[#0D1829] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    const fallbacks: Record<string, string> = {
                      'financial-services': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
                      'healthcare': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
                      'manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
                      'professional-services': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
                    };
                    target.src = fallbacks[item.id] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1829] via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Caption */}
              <div className="p-4 pt-3 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white transition-colors">
                  <span>View impact profile</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
