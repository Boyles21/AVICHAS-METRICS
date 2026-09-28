import React from 'react';
import { X, CheckCircle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ProductItem } from './ProductsSection';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onContact: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onContact,
}) => {
  if (!product) return null;
  const Icon = product.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0C1524] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#09101C] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C9975B]/20 border border-[#C9975B]/40 flex items-center justify-center text-[#C9975B]">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-teal-400 font-mono uppercase tracking-wider block">
                {product.badge}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                {product.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold text-[#C9975B] uppercase tracking-widest font-mono">
              {product.tagline}
            </span>
            <p className="text-sm text-slate-200 leading-relaxed mt-2">
              {product.description}
            </p>
          </div>

          {/* Target Impact Banner */}
          <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-teal-300 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-mono text-teal-300 font-bold block">
                Target Benchmark Outcome
              </span>
              <p className="text-xs font-semibold text-white">
                {product.metricsTarget}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Included Enterprise Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-[#C9975B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
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
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
