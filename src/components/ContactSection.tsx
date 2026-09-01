import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO, ADMINISTRATIVE_CONTACTS } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with MotionHeading */}
        <MotionHeading
          badge="Connect with NIT Kolhapur"
          badgeIcon={<MapPin className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Administrative Directory, Helpdesk & Location"
          subtitle="Direct communication channels for Admissions, Examinations, Scholarships, Fee Payments, and Campus Tours."
        />

        {/* 3 Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatedCard delay={0.05} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl w-fit border border-yellow-300">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950">Campus Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>New Institute of Technology (NIT)</strong><br />
              1061, A Ward, Shivaji Peth,<br />
              Kolhapur – 416012, Maharashtra, India
            </p>
            <div className="text-[11px] text-slate-500 font-medium">
              Landmark: Near Shri Prince Shivaji Maratha Boarding House
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl w-fit border border-yellow-300">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950">Telephones &amp; Toll-Free</h3>
            <div className="space-y-1 text-xs text-slate-600">
              <p>Toll-Free: <a href="tel:18008906290" className="text-blue-900 font-bold hover:underline">{COLLEGE_INFO.tollFree}</a></p>
              <p>Office EPABX: <a href="tel:02312623824" className="text-slate-800 hover:underline">{COLLEGE_INFO.phone}</a></p>
              <p>Admission Desk: <a href="tel:8799926060" className="text-blue-900 font-bold hover:underline">8799926060 / 69 / 70</a></p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl w-fit border border-yellow-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950">Office &amp; Library Timings</h3>
            <div className="space-y-1 text-xs text-slate-600">
              <p>Administrative Office: <strong>09:30 AM – 05:30 PM</strong></p>
              <p>Central Reading Room: <strong>08:00 AM – 08:00 PM</strong></p>
              <p>Open Monday through Saturday (Except Govt Holidays)</p>
            </div>
          </AnimatedCard>
        </div>

        {/* Administrative Directory Grid */}
        <AnimatedCard delay={0.1} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <NitLogo size={42} showGlow />
              <div>
                <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
                  Administrative Officers &amp; Functional Desks
                </h3>
                <p className="text-xs text-slate-500">Direct contacts for fee receipts, scholarship paperwork, store requisitions, and certificates</p>
              </div>
            </div>
            <span className="text-xs text-blue-950 font-mono bg-white px-2.5 py-1 rounded border border-slate-200 font-semibold shadow-2xs">
              Office DTE Code: 6402
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADMINISTRATIVE_CONTACTS.map((admin, i) => (
              <AnimatedCard key={i} delay={i * 0.04} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                <div>
                  <div className="text-[10px] text-yellow-800 font-bold uppercase">{admin.role}</div>
                  <div className="text-xs font-bold text-blue-950 mt-0.5">{admin.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{admin.phone}</div>
                </div>
                <a
                  href={`tel:${admin.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2 rounded-lg bg-yellow-100 text-yellow-900 hover:bg-yellow-400 transition shrink-0 ml-2 border border-yellow-300 shadow-2xs"
                  title="Call Officer"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCard>

        {/* Two-Column: Campus Visit Request + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Schedule a Visit / Enquiry Form (5 cols) */}
          <AnimatedCard delay={0.1} className="lg:col-span-5 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600" />
              Schedule a Campus Tour or Leave a Message
            </h3>
            <p className="text-xs text-slate-500">
              Parents and students are welcome to visit our laboratories, workshops, library, and hostels with prior intimation.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950">Visit Request Received!</h4>
                <p className="text-xs text-slate-600">
                  Our campus reception team will confirm your appointment via phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-blue-900 underline font-semibold cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Purpose of Visit / Inquiry</label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900"
                  >
                    <option value="Admission & Campus Tour">Admission Counseling &amp; Campus Tour</option>
                    <option value="Hostel & Bus Route Inquiry">Hostel &amp; Bus Route Inquiry</option>
                    <option value="Corporate Placement & Industry Visit">Corporate Placement &amp; Industry Visit</option>
                    <option value="Alumni Verification & Transcripts">Alumni Verification &amp; Transcripts</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Specific Questions / Preferred Date</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you would like to see on campus..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-sm border border-yellow-500 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Schedule Campus Visit / Send Message
                </button>
              </form>
            )}
          </AnimatedCard>

          {/* Interactive Map & Transport Access (7 cols) */}
          <AnimatedCard delay={0.15} className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                Kolhapur City Location &amp; Transit Hub
              </h3>
              <span className="text-xs text-slate-500 font-semibold">416012, Maharashtra</span>
            </div>

            {/* Embedded Google Map / Location Preview */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-16/9 relative shadow-2xs">
              <iframe
                title="NIT Kolhapur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5794827827823!2d74.2185!3d16.6958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10014022a101b%3A0xb35a0bfeb4204f11!2sShivaji%20Peth%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-semibold text-blue-950">Central Bus Stand (CBS)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">3.5 km (10 mins via City Bus)</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-semibold text-blue-950">Chh. Shahu Maharaj Railway Station</div>
                <div className="text-[11px] text-slate-500 mt-0.5">4.0 km (Direct auto/bus)</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-semibold text-blue-950">Kolhapur Airport (Ujalaiwadi)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">11 km (Direct highway link)</div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

