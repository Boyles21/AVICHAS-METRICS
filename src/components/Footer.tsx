import React from 'react';
import { AvichasLogo } from './AvichasLogo';

interface FooterProps {
  onOpenContact: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'security') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenLegal }) => {
  const footerNav = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#advantage' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#trust' },
    { label: 'About', href: '#assessment' },
    { label: 'Contact', action: onOpenContact },
  ];

  return (
    <footer className="bg-[#060B14] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Logo, Nav Links, Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-12 border-b border-white/10 gap-8">
          {/* Brand Wordmark & Emblem */}
          <a href="#hero" className="flex items-center gap-3">
            <AvichasLogo size="md" />
          </a>

          {/* Centered Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-normal text-slate-300">
            {footerNav.map((item) =>
              item.action ? (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs font-bold"
              aria-label="Avichas on LinkedIn"
            >
              in
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs font-semibold"
              aria-label="Avichas on X"
            >
              ✕
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs"
              aria-label="Avichas on YouTube"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright and Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-[11px] text-slate-400">
          <p>© 2026 Avichas Metrics. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('security')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
