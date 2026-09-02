import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Navigation
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

  const googleMapsUrl = 'https://www.google.com/maps/place/New+Institute+of+Technology+(NIT)+Kolhapur/@16.6936499,74.2896144,17z';

  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with MotionHeading */}
        <MotionHeading
          badge="Connect with NIT Kolhapur"
          badgeIcon={<MapPin className="w-3.5 h-3.5 text-yellow-700 dark:text-yellow-400" />}
          badgeColor="yellow"
          title="Administrative Directory, Helpdesk & Campus Location"
          subtitle="Direct communication channels for Admissions, Examinations, Scholarships, Fee Payments, and Campus Tours."
        />

        {/* 3 Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatedCard delay={0.05} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-300 rounded-xl w-fit border border-yellow-300 dark:border-yellow-700">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950 dark:text-white">Campus Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>New Institute of Technology (NIT)</strong><br />
              Shantinagar, Mudshingi,<br />
              Kolhapur, Maharashtra – 416005, India
            </p>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Landmark: Near Shantinagar / Mudshingi
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-300 rounded-xl w-fit border border-yellow-300 dark:border-yellow-700">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950 dark:text-white">Telephones &amp; Toll-Free</h3>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <p>Toll-Free: <a href="tel:18008906290" className="text-blue-900 dark:text-yellow-400 font-bold hover:underline">{COLLEGE_INFO.tollFree}</a></p>
              <p>Office EPABX: <a href="tel:02312623824" className="text-slate-800 dark:text-slate-200 hover:underline">{COLLEGE_INFO.phone}</a></p>
              <p>Admission Desk: <a href="tel:8799926060" className="text-blue-900 dark:text-yellow-400 font-bold hover:underline">8799926060 / 69 / 70</a></p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-300 rounded-xl w-fit border border-yellow-300 dark:border-yellow-700">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-blue-950 dark:text-white">Office &amp; Library Timings</h3>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <p>Administrative Office: <strong>09:30 AM – 05:30 PM</strong></p>
              <p>Central Reading Room: <strong>08:00 AM – 08:00 PM</strong></p>
              <p>Open Monday through Saturday (Except Govt Holidays)</p>
            </div>
          </AnimatedCard>
        </div>

        {/* Administrative Directory Grid */}
        <AnimatedCard delay={0.1} className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-4">
            <div className="flex items-center gap-3">
              <NitLogo size={42} showGlow />
              <div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-white flex items-center gap-2">
                  Administrative Officers &amp; Functional Desks
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Direct contacts for fee receipts, scholarship paperwork, store requisitions, and certificates</p>
              </div>
            </div>
            <span className="text-xs text-blue-950 dark:text-yellow-400 font-mono bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 font-semibold shadow-2xs">
              Office DTE Code: {COLLEGE_INFO.codes.dte}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADMINISTRATIVE_CONTACTS.map((admin, i) => (
              <AnimatedCard key={i} delay={i * 0.04} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-2xs">
                <div>
                  <div className="text-[10px] text-yellow-800 dark:text-yellow-400 font-bold uppercase">{admin.role}</div>
                  <div className="text-xs font-bold text-blue-950 dark:text-white mt-0.5">{admin.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{admin.phone}</div>
                </div>
                <a
                  href={`tel:${admin.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-300 hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-blue-950 transition shrink-0 ml-2 border border-yellow-300 dark:border-yellow-700 shadow-2xs"
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
          <AnimatedCard delay={0.1} className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-blue-950 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              Schedule a Campus Tour or Leave a Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Parents and students are welcome to visit our laboratories, workshops, library, and campus in Mudshingi with prior intimation.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-300">Visit Request Received!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Our campus reception team will confirm your appointment via phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-blue-900 dark:text-yellow-400 underline font-semibold cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-900 dark:focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-900 dark:focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Purpose of Visit / Inquiry</label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-900 dark:focus:border-yellow-400"
                  >
                    <option value="Admission & Campus Tour">Admission Counseling &amp; Campus Tour</option>
                    <option value="Hostel & Bus Route Inquiry">Hostel &amp; Bus Route Inquiry</option>
                    <option value="Corporate Placement & Industry Visit">Corporate Placement &amp; Industry Visit</option>
                    <option value="Alumni Verification & Transcripts">Alumni Verification &amp; Transcripts</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Specific Questions / Preferred Date</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you would like to see on campus..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-900 dark:focus:border-yellow-400"
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
          <AnimatedCard delay={0.15} className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/80 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Shantinagar, Mudshingi Campus Location
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Shantinagar, Mudshingi, Kolhapur, Maharashtra 416005
                </p>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-900 dark:bg-yellow-400 text-white dark:text-blue-950 hover:bg-blue-800 dark:hover:bg-yellow-300 transition shadow-2xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* Embedded Google Map / Location Preview */}
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 aspect-16/9 relative shadow-2xs">
              <iframe
                title="New Institute of Technology (NIT) Kolhapur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.664782672822!2d74.28961444232787!3d16.693649900000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101e81798e7cd%3A0xdfc39ad6614e82e6!2sNew%20Institute%20of%20Technology%20(NIT)%20Kolhapur!5e0!3m2!1sen!2sin!4v1788343918884!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Transit distances from Mudshingi */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 dark:text-slate-300 pt-2">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                <div className="font-semibold text-blue-950 dark:text-white">Central Bus Stand (CBS)</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">7.5 km (15 mins via Kolhapur Rd)</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                <div className="font-semibold text-blue-950 dark:text-white">Chh. Shahu Maharaj Railway Station</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">8.0 km (Direct bus &amp; auto)</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                <div className="font-semibold text-blue-950 dark:text-white">Kolhapur Airport (Ujalaiwadi)</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">6.0 km (Direct highway link)</div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
