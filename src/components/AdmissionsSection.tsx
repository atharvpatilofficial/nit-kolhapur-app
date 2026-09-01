import React, { useState } from 'react';
import {
  Sparkles,
  Calculator,
  Phone,
  CheckCircle2,
  Send,
  Users
} from 'lucide-react';
import { COLLEGE_INFO, ADMISSION_CONTACTS } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { MotionHeading, AnimatedCard } from './MotionEffects';

interface AdmissionsSectionProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onOpenEnquiry,
  onOpenProspectus
}) => {
  // Calculator state
  const [courseType, setCourseType] = useState<'btech' | 'diploma'>('diploma');
  const [entryYear, setEntryYear] = useState<'first' | 'directSecond'>('first');
  const [category, setCategory] = useState<'OPEN' | 'OBC_EBC' | 'SC_ST' | 'NT_VJ_SBC' | 'TFWS'>('OPEN');

  // Interactive Enquiry Form state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    branch: 'AIML',
    level: 'Diploma (Post 10th)',
    percentage: '',
    category: 'OPEN',
    city: 'Kolhapur'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fee calculation logic
  const calculateFees = () => {
    let baseTuition = courseType === 'btech' ? 68000 : 42000;
    let devFee = courseType === 'btech' ? 7000 : 4500;
    let concession = 0;

    if (category === 'OBC_EBC') {
      concession = baseTuition * 0.5; // 50% waiver
    } else if (category === 'SC_ST' || category === 'NT_VJ_SBC' || category === 'TFWS') {
      concession = baseTuition; // 100% tuition waiver
    }

    const netFee = baseTuition + devFee - concession;
    const monthlyEmi = Math.round(netFee / 10);

    return {
      baseTuition,
      devFee,
      concession,
      netFee,
      monthlyEmi
    };
  };

  const fees = calculateFees();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) return;
    setFormSubmitted(true);
  };

  return (
    <section id="admissions" className="py-16 bg-slate-50/60 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with MotionHeading */}
        <MotionHeading
          badge="Centralized Admission Process (CAP) & Institute Level"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Admissions 2026–27 | B.Tech & Polytechnic Diploma"
          subtitle="Transparent admission process, complete MahaDBT scholarship support, zero-interest installment facilities, and dedicated counseling desks."
        />

        {/* Spot Admission Special Banner */}
        <AnimatedCard delay={0.05} className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-slate-950 shadow-md border border-yellow-500 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <NitLogo size={68} className="shrink-0 drop-shadow-sm" />
            <div className="space-y-1.5">
              <div className="inline-block bg-blue-950 text-yellow-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                Spot Admission Fast-Track Booking
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-blue-950">
                Book Your 2026–27 Seat on Spot in ₹10,400/- Only
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-800 max-w-2xl">
                Lock in your desired engineering specialization today. Balance fees can be conveniently scheduled via In-College Finance or GrayQuest Zero Cost 10-Month EMIs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COLLEGE_INFO.admissionHotlines[0]}`}
              className="px-5 py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-2 shadow-sm transition border border-blue-900"
            >
              <Phone className="w-4 h-4 text-yellow-300" />
              Call Hotline: {COLLEGE_INFO.admissionHotlines[0]}
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-blue-950 text-xs font-extrabold flex items-center gap-2 shadow-sm transition cursor-pointer border border-slate-200"
            >
              <Sparkles className="w-4 h-4 text-yellow-600" />
              Book Online Spot Seat
            </button>
          </div>
        </AnimatedCard>

        {/* Two-Column Interactive Hub: Calculator + Fast Enquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Interactive Fee & Scholarship Calculator (7 cols) */}
          <AnimatedCard delay={0.1} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-yellow-100 text-yellow-900 rounded-xl">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">Fee &amp; Scholarship Calculator</h3>
                  <p className="text-xs text-slate-500">Estimate Govt FRA fees &amp; MahaDBT category concessions</p>
                </div>
              </div>
              <span className="text-[11px] bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
                AY 2026–27
              </span>
            </div>

            {/* Program Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">1. Select Academic Program</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCourseType('diploma')}
                  className={`p-3 rounded-xl text-xs font-bold border text-left transition cursor-pointer ${
                    courseType === 'diploma'
                      ? 'bg-blue-900 border-blue-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-950'
                  }`}
                >
                  <div>Polytechnic Diploma (3 Yrs)</div>
                  <div className={`text-[10px] font-normal mt-0.5 ${courseType === 'diploma' ? 'text-blue-200' : 'text-slate-500'}`}>MSBTE Code: 0047</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCourseType('btech')}
                  className={`p-3 rounded-xl text-xs font-bold border text-left transition cursor-pointer ${
                    courseType === 'btech'
                      ? 'bg-blue-900 border-blue-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-950'
                  }`}
                >
                  <div>B.Tech Degree (4 Yrs)</div>
                  <div className={`text-[10px] font-normal mt-0.5 ${courseType === 'btech' ? 'text-blue-200' : 'text-slate-500'}`}>DBATU Code: EN6402</div>
                </button>
              </div>
            </div>

            {/* Entry Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">2. Entry Point</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setEntryYear('first')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                    entryYear === 'first'
                      ? 'bg-blue-900 text-white font-bold border-blue-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-950'
                  }`}
                >
                  First Year Entry (10th / 12th PCM)
                </button>
                <button
                  type="button"
                  onClick={() => setEntryYear('directSecond')}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                    entryYear === 'directSecond'
                      ? 'bg-blue-900 text-white font-bold border-blue-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-950'
                  }`}
                >
                  Direct 2nd Year Lateral Entry (DSE)
                </button>
              </div>
            </div>

            {/* Social / Caste Category */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">3. Social Category / Reservation Scheme</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'OPEN', label: 'OPEN / General', sub: 'Standard Fee' },
                  { id: 'OBC_EBC', label: 'OBC / EBC / EWS', sub: '50% Tuition Waiver' },
                  { id: 'SC_ST', label: 'SC / ST', sub: '100% Tuition Waiver' },
                  { id: 'NT_VJ_SBC', label: 'VJ / NT / SBC', sub: '100% Tuition Waiver' },
                  { id: 'TFWS', label: 'TFWS Scheme', sub: 'Merit Tuition Free' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id as any)}
                    className={`p-2.5 rounded-xl text-left text-xs border transition cursor-pointer ${
                      category === cat.id
                        ? 'bg-yellow-50 border-yellow-400 text-yellow-950 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-950'
                    }`}
                  >
                    <div className="font-semibold">{cat.label}</div>
                    <div className="text-[10px] text-slate-500">{cat.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Fee Breakdown Card */}
            <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-3">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                Estimated Fee Breakdown (Annual)
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Govt. Approved Tuition Fee:</span>
                  <span>₹{fees.baseTuition.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Development Fee:</span>
                  <span>₹{fees.devFee.toLocaleString('en-IN')}</span>
                </div>
                {fees.concession > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>MahaDBT Govt Scholarship Waiver:</span>
                    <span>- ₹{fees.concession.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-blue-200 flex justify-between text-sm font-extrabold text-blue-950">
                  <span>Effective Annual Student Fee:</span>
                  <span className="text-blue-900 text-base">₹{fees.netFee.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Installment / EMI Callout */}
              <div className="p-3 rounded-lg bg-white border border-blue-200 flex items-center justify-between text-xs shadow-xs">
                <div>
                  <div className="text-slate-500 text-[11px]">GrayQuest 0% Interest EMI Option:</div>
                  <div className="font-bold text-emerald-700">₹{fees.monthlyEmi.toLocaleString('en-IN')} / month (10 EMIs)</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 text-[11px]">Spot Booking Token:</div>
                  <div className="font-extrabold text-blue-950">₹10,400/-</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic">
              * Note: Fee estimates are subject to Fee Regulating Authority (FRA) Maharashtra notifications for 2026–27. EBC/OBC/SC/ST benefits are processed through the MahaDBT government portal with full college guidance.
            </div>
          </AnimatedCard>

          {/* Right Column: Online Admission Fast Enquiry (5 cols) */}
          <AnimatedCard delay={0.15} className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <NitLogo size={42} showGlow />
                <div>
                  <h3 className="text-lg font-bold text-blue-950">Direct Admission Desk</h3>
                  <p className="text-xs text-slate-500">Receive counseling call &amp; official brochure</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-100 text-yellow-900 border border-yellow-300 font-bold">
                AY 2026-27
              </span>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">Enquiry Registered Successfully!</h4>
                <p className="text-xs text-slate-700">
                  Thank you, <strong>{formData.name}</strong>. Our senior admission counselor will contact you at <strong>{formData.mobile}</strong> shortly with seat availability and spot confirmation details.
                </p>
                <div className="p-3 bg-white rounded-lg text-xs text-blue-950 border border-emerald-200 font-medium">
                  Application Ref: <strong>NIT-2026-ENQ-{Math.floor(1000 + Math.random() * 9000)}</strong>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-slate-600 hover:text-blue-900 underline cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Ananda Patil"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      WhatsApp / Mobile No *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Preferred Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-800"
                    >
                      <option value="AIML">Artificial Intelligence &amp; ML</option>
                      <option value="CSE">Computer Science &amp; Engineering</option>
                      <option value="Automobile">Automobile Engineering</option>
                      <option value="Civil">Civil Engineering</option>
                      <option value="Electrical">Electrical / Power Engineering</option>
                      <option value="Mechanical">Mechanical &amp; Mechatronics</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Target Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-800"
                    >
                      <option value="Diploma 1st Yr">Diploma 1st Year (Post 10th)</option>
                      <option value="Diploma Direct 2nd Yr">Diploma Direct 2nd Year (Post 12th/ITI)</option>
                      <option value="B.Tech 1st Yr">B.Tech 1st Year (Post 12th PCM)</option>
                      <option value="B.Tech Direct 2nd Yr">B.Tech Direct 2nd Year (Post Diploma)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      10th / 12th / Diploma %
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 78.40%"
                      value={formData.percentage}
                      onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      City / Village
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kolhapur, Ichalkaranji"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-extrabold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-xs border border-yellow-500 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Admission Enquiry (Fast Response)
                </button>
              </form>
            )}
          </AnimatedCard>
        </div>

        {/* Branch Admission Incharge & Counselor Directory */}
        <AnimatedCard delay={0.2} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-900" />
                Branch-Wise Admission Incharges &amp; Counselors
              </h3>
              <p className="text-xs text-slate-500">Feel free to call or WhatsApp our official branch coordinators for counseling</p>
            </div>
            <div className="text-xs text-blue-900 font-bold">
              Toll-Free Support: {COLLEGE_INFO.tollFree}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ADMISSION_CONTACTS.map((contact, i) => (
              <AnimatedCard key={i} delay={i * 0.03} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-blue-900 font-bold">{contact.role}</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{contact.name}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{contact.phone}</div>
                </div>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2 rounded-lg bg-yellow-100 text-yellow-900 hover:bg-yellow-300 transition shrink-0 ml-2 border border-yellow-300"
                  title="Call Counselor"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

