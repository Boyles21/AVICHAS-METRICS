import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Building2, User, Mail, Send } from 'lucide-react';
import { AvichasLogo } from './AvichasLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '500 - 2,500',
    primaryInterest: 'Avichas Foundation & Execution',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0C1524] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#09101C] border-b border-white/10">
          <div className="flex items-center gap-2">
            <AvichasLogo size="sm" textColor="text-white" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C9975B] uppercase font-mono block mb-1">
                  STRATEGIC ADVISORY BRIEFING
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Schedule an executive discovery session.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Meet with our enterprise deployment architects to evaluate your
                  current execution framework and model measurable outcomes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#C9975B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="elena@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#C9975B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Apex Global Corp"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#C9975B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      placeholder="Chief Operating Officer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#C9975B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Organization Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) =>
                        setFormData({ ...formData, teamSize: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1C2E] border border-white/15 text-white text-xs focus:outline-none focus:border-[#C9975B] transition-colors"
                    >
                      <option value="100 - 500">100 - 500 employees</option>
                      <option value="500 - 2,500">500 - 2,500 employees</option>
                      <option value="2,500 - 10,000">2,500 - 10,000 employees</option>
                      <option value="10,000+">10,000+ Global Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Primary Solution Interest
                    </label>
                    <select
                      value={formData.primaryInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, primaryInterest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1C2E] border border-white/15 text-white text-xs focus:outline-none focus:border-[#C9975B] transition-colors"
                    >
                      <option value="Avichas Foundation">Avichas Foundation</option>
                      <option value="Avichas Intelligence">Avichas Intelligence</option>
                      <option value="Avichas Execution">Avichas Execution</option>
                      <option value="Institutional Intelligence">
                        Institutional Intelligence
                      </option>
                      <option value="Enterprise Suite">
                        Full Enterprise Suite
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Strategic Objectives / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Describe your current execution roadblocks or upcoming strategic initiatives..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#C9975B] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-[#C9975B] hover:bg-[#D4A771] text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-lg active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving Executive Calendar...</span>
                    ) : (
                      <>
                        <span>Confirm Executive Consultation</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Executive Discovery Confirmed
              </h3>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed mb-6">
                Thank you, {formData.fullName}. An invitation with meeting agenda
                and private tenant access has been dispatched to{' '}
                <span className="text-teal-300 font-mono">{formData.email}</span>.
              </p>

              <div className="w-full max-w-sm p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-[#C9975B]" />
                  <span>Scheduled within 1 business day</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-[#C9975B]" />
                  <span>30-minute tailored alignment walkthrough</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Building2 className="w-4 h-4 text-[#C9975B]" />
                  <span>Customized for {formData.company || 'your enterprise'}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
