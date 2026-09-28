import React from 'react';
import { Layers, Target, GitBranch, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

export interface ProductItem {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
  features: string[];
  metricsTarget: string;
}

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAllProducts: () => void;
}

export const productsData: ProductItem[] = [
  {
    id: 'foundation',
    icon: Layers,
    title: 'Avichas Foundation',
    tagline: 'Build the foundation.',
    description:
      'Establish your measurement and execution foundation with clear KPIs, trusted data and actionable insights.',
    badge: 'Core Infrastructure',
    features: [
      'Universal KPI Catalog with semantic definitions',
      'Automated data connectors (ERP, CRM, HRIS, Data Lakes)',
      'Data provenance auditing & telemetry validation',
      'Baseline metric health scoring',
    ],
    metricsTarget: '100% data lineage confidence across all tracked KPIs',
  },
  {
    id: 'intelligence',
    icon: Target,
    title: 'Avichas Intelligence',
    tagline: 'Understand the organization.',
    description:
      'Transform your data into continuous intelligence with real-time dashboards, alerts and trend analysis.',
    badge: 'Continuous Analytics',
    features: [
      'Multi-tier executive & departmental operational dashboards',
      'Anomaly detection and early warning risk indicators',
      'Cross-silo performance correlation modeling',
      'Predictive forecast trend lines with scenario testing',
    ],
    metricsTarget: '3.4x faster identification of execution bottlenecks',
  },
  {
    id: 'execution',
    icon: GitBranch,
    title: 'Avichas Execution',
    tagline: 'Turn strategy into action.',
    description:
      'Track initiatives, owners, milestones and dependencies. Keep execution aligned with intent.',
    badge: 'Operational Alignment',
    features: [
      'Objective & Key Result (OKR) cascading tree',
      'Cross-functional dependency and blocker mapping',
      'Automated milestone status synchronization',
      'Resource capacity vs commitment heatmaps',
    ],
    metricsTarget: '88% higher milestone delivery on scheduled time',
  },
  {
    id: 'institutional',
    icon: InfinityIcon,
    title: 'Avichas Institutional Intelligence',
    tagline: 'Build lasting advantage.',
    description:
      'Combine all capabilities with institutional memory to learn, adapt and grow over time.',
    badge: 'Cognitive Engine',
    features: [
      'Decision logging and historic outcome retrospectives',
      'Organizational memory search and knowledge graphs',
      'Machine-assisted post-mortem recommendations',
      'Long-term operational resilience benchmarking',
    ],
    metricsTarget: 'Overcome organizational amnesia across executive transitions',
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onViewAllProducts,
}) => {
  return (
    <section id="products" className="py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-stone-500 uppercase font-mono block mb-2">
              OUR PRODUCTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] text-stone-950 font-bold tracking-tight max-w-2xl text-balance">
              Powerful solutions for every stage of your organization&apos;s journey.
            </h2>
          </div>

          <button
            onClick={onViewAllProducts}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-800 hover:text-[#9B6C34] transition-colors whitespace-nowrap cursor-pointer self-start sm:self-auto"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between p-7 bg-white rounded-xl border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] hover:border-stone-300 transition-all duration-200 relative overflow-hidden"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 mb-6 rounded-lg bg-stone-50 border border-stone-200/60 flex items-center justify-center text-stone-900 group-hover:bg-[#C9975B]/10 group-hover:border-[#C9975B]/40 group-hover:text-[#9B6C34] transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-stone-950 mb-1 tracking-tight">
                    {product.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-medium text-stone-500 mb-4">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-6 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-stone-100 mt-auto">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 group-hover:text-[#9B6C34] transition-colors cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
