import React, { useState, useEffect } from 'react';
import { AvichasLogo } from './AvichasLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#advantage' },
    { label: 'Products', href: '#products' },
    { label: 'How It Works', href: '#overview' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#trust' },
    { label: 'About', href: '#assessment' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(href.replace('#', ''));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1220]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a
          href="#hero"
          onClick={() => handleLinkClick('#hero')}
          className="flex items-center gap-3 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9975B] rounded-md"
        >
          <AvichasLogo size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-normal tracking-wide text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="relative text-slate-300 hover:text-white transition-colors duration-150 py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#C9975B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wide text-slate-950 bg-white hover:bg-slate-100 shadow-[0_2px_12px_rgba(255,255,255,0.18)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Talk to Avichas</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-slate-800" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-[#C9975B]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0B1220]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-base text-slate-200 hover:text-[#C9975B] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Talk to Avichas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
