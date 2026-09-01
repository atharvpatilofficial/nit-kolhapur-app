import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2
} from 'lucide-react';
import { NitLogo } from './NitLogo';
import { motion } from 'motion/react';

interface QuickEnquiryModalProps {
  initialDepartment?: string;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  initialDepartment,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    branch: initialDepartment || 'Artificial Intelligence & Machine Learning',
    level: 'Diploma / B.Tech',
    percentage: '',
    city: 'Kolhapur'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <NitLogo size={46} showGlow />
            <div>
              <h2 className="text-base font-bold text-blue-950">Admissions 2026–27 Fast Enquiry</h2>
              <p className="text-xs text-slate-500 font-medium">Spot Booking &amp; Fee Concession Assistance</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-950">Enquiry Received!</h3>
              <p className="text-xs text-slate-600">
                Thank you, <strong>{formData.name}</strong>. Our senior admission counselor will call you at <strong>{formData.mobile}</strong> within 15 minutes.
              </p>
              <div className="p-3 bg-white rounded-lg text-xs text-blue-950 border border-slate-200 font-mono shadow-2xs font-bold">
                Booking Token: ₹10,400/- Only
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs text-slate-700">
              <div>
                <label className="font-semibold block mb-1 text-slate-800">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suraj Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1 text-slate-800">Mobile / WhatsApp No *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-1 text-slate-800">Qualifying Score %</label>
                  <input
                    type="text"
                    placeholder="e.g. 78%"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1 text-slate-800">Desired Specialization</label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900"
                >
                  <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence &amp; Machine Learning (AIML)</option>
                  <option value="Computer Science & Engineering">Computer Science &amp; Engineering (CSE)</option>
                  <option value="Automobile Engineering">Automobile Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering &amp; Mechatronics</option>
                </select>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-slate-600 font-medium">Spot Booking Fast-Track:</span>
                <span className="text-blue-950 font-bold bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300">₹10,400/- (0% Interest EMI)</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-extrabold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-xs border border-yellow-500 transition flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Enquiry (Get Instant Callback)
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-600 shrink-0">
          Direct Admissions Hotline: <a href="tel:8799926060" className="text-blue-900 font-bold hover:underline">8799926060</a>
        </div>
      </motion.div>
    </div>
  );
};

