import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Cpu,
  FileCheck2,
  FileBadge,
  CheckCircle,
} from 'lucide-react';
import { AvichasLogo } from './AvichasLogo';

export const BuiltOnTrustSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: 'Enterprise-grade security',
      detail:
        'SOC 2 Type II certified, ISO 27001 compliant with AES-256 at rest and TLS 1.3 in transit.',
    },
    {
      icon: Lock,
      title: 'Data isolation & privacy',
      detail:
        'Single-tenant data boundaries, zero third-party training, and customer-managed encryption keys (CMEK).',
    },
    {
      icon: Cpu,
      title: 'AI governance & monitoring',
      detail:
        'Deterministic guardrails, model provenance, and transparent explainability scorecards for all AI outputs.',
    },
    {
      icon: FileCheck2,
      title: 'Full audit trail',
      detail:
        'Tamper-evident cryptographic logs recording every metric mutation, access attempt, and executive sign-off.',
    },
    {
      icon: FileBadge,
      title: 'Compliance ready',
      detail:
        'Pre-configured governance mappings for HIPAA, GDPR, CCPA, and FedRAMP high-impact baselines.',
    },
  ];

  return (
    <section id="trust" className="py-24 bg-[#F8F7F4] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: HQ Architecture Photo with illuminated Avichas emblem */}
          <div className="lg:col-span-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-300/80 bg-stone-900 group">
              <img
                src="/images/corporate_hq_architecture.jpg"
                alt="Avichas enterprise headquarters architecture representing organizational resilience and trust"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />

              {/* Glowing Avichas Logo placed on the building facade like in the screenshot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-3 rounded-xl bg-black/40 backdrop-blur-md border border-[#C9975B]/40 shadow-[0_0_30px_rgba(201,151,91,0.5)]">
                <AvichasLogo iconOnly size="lg" />
              </div>
            </div>
          </div>

          {/* Center Column: Text & Value Proposition */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-stone-500 uppercase font-mono mb-3">
              BUILT ON TRUST
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 mb-4 text-balance">
              Security, privacy and governance at every layer.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              Your data is your advantage. We use industry-leading security,
              transparent governance and ethical AI practices to ensure your
              information is always protected.
            </p>
          </div>

          {/* Right Column: Trust Checklist Features */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {trustFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = selectedFeature === idx;
              return (
                <div
                  key={feat.title}
                  onClick={() => setSelectedFeature(isSelected ? null : idx)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C9975B]/60 shadow-md'
                      : 'bg-white/80 hover:bg-white border-stone-200/90 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-stone-900 tracking-tight flex-1">
                      {feat.title}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9975B] shrink-0" />
                  </div>
                  {isSelected && (
                    <p className="mt-2.5 pt-2 border-t border-stone-100 text-[11px] text-stone-600 leading-relaxed animate-in fade-in duration-200">
                      {feat.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
