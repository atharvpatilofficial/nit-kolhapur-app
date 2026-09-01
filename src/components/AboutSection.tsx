import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  History,
  Target,
  Compass,
  Award,
  Users,
  Building2,
  CheckCircle2,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO, SISTER_INSTITUTIONS } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'legacy' | 'vision' | 'leadership' | 'ecosystem' | 'accreditation'>('legacy');

  return (
    <section id="about" className="py-16 bg-slate-50/70 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with MotionHeading */}
        <MotionHeading
          badge="Centenary Heritage (1918 – Present)"
          badgeIcon={<History className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="About New Institute of Technology, Kolhapur"
          subtitle="Rooted in the egalitarian vision of Rajarshi Chhatrapati Shahu Maharaj, NIT Kolhapur stands as a beacon of high-quality technical education, research, and societal upliftment."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'legacy', label: 'History & Shahu Maharaj Legacy', icon: History },
            { id: 'vision', label: 'Vision & 4 Missions', icon: Target },
            { id: 'leadership', label: 'Creative Leadership', icon: Users },
            { id: 'ecosystem', label: 'Educational Ecosystem (8+ Sister Institutes)', icon: Building2 },
            { id: 'accreditation', label: 'Accreditations & Awards', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition cursor-pointer relative ${
                  isActive
                    ? 'bg-blue-900 text-white font-bold shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-900 border border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content Panels with AnimatePresence */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            {/* Tab 1: History & Legacy */}
            {activeTab === 'legacy' && (
              <motion.div
                key="legacy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block bg-yellow-100 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300">
                    Parent Trust: {COLLEGE_INFO.parentTrust} (Estd. 1918)
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                    Founded with the Blessing of Rajarshi Chhatrapati Shahu Maharaj
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In 1918, the noble visionary and social reformer <strong className="text-slate-900">Rajarshi Chhatrapati Shahu Maharaj</strong> inspired the foundation of Shri Prince Shivaji Maratha Boarding House in memory of Prince Shivaji. Its primary objective was to open doors of high quality academic, technical, and residential education to the underprivileged, rural masses, and backward communities.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Over a century later, the trust has grown into an educational powerhouse. In 1983, <strong className="text-slate-900">New Institute of Technology (NIT / NPK)</strong> was established to provide state-of-the-art engineering and polytechnic education, fostering self-reliance, patriotism, scientific temper, and industrial leadership.
                  </p>

                  {/* Core Values & Emblem Box */}
                  <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <NitLogo size={60} showGlow animate />
                      <div>
                        <div className="text-xs text-blue-900 font-bold uppercase tracking-wider">Official Institutional Motto</div>
                        <div className="text-base sm:text-lg font-bold text-blue-950">{COLLEGE_INFO.mottoMarathi}</div>
                        <div className="text-xs text-slate-600 italic">&ldquo;{COLLEGE_INFO.mottoEnglish}&rdquo;</div>
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-600 shrink-0 hidden sm:block border-l border-blue-200 pl-4">
                      <div className="font-bold text-blue-950">New Institute of Technology</div>
                      <div>DTE Code: <strong className="text-slate-900">{COLLEGE_INFO.codes.dte}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">Key Trust Objectives</h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Spread academic and technical education from primary to collegiate research levels.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Provide free / concessional education, lodging, and boarding for economically weaker students.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Promote science, technology, cooperatives, agro-industries, and social equality.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Eradicate untouchability and caste barriers through inclusive technical empowerment.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-yellow-50/80 border border-yellow-300 text-xs text-yellow-950 shadow-xs">
                    <div className="font-bold text-blue-950 mb-1">State Government Recognition</div>
                    Awarded the prestigious <strong>Ideal Educational Institution Award</strong> by the Government of Maharashtra.
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Vision & 4 Missions */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Vision Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-blue-200 shadow-sm text-center max-w-4xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    Institutional Vision
                  </div>
                  <blockquote className="text-lg md:text-2xl font-bold text-blue-950 leading-relaxed">
                    &ldquo;Excel the institute as a center of academic excellence to fulfil the global industrial and societal needs.&rdquo;
                  </blockquote>
                </div>

                {/* 4 Missions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <AnimatedCard delay={0.05} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-yellow-400 shadow-xs transition">
                    <div className="w-9 h-9 rounded-lg bg-yellow-100 text-yellow-900 font-extrabold flex items-center justify-center mb-3">
                      M1
                    </div>
                    <h4 className="text-sm font-bold text-blue-950 mb-1.5">Value-Added Quality Education</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Provide value-added quality technical education and excellent academic training grounded in practical industry exposure.
                    </p>
                  </AnimatedCard>

                  <AnimatedCard delay={0.1} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-yellow-400 shadow-xs transition">
                    <div className="w-9 h-9 rounded-lg bg-yellow-100 text-yellow-900 font-extrabold flex items-center justify-center mb-3">
                      M2
                    </div>
                    <h4 className="text-sm font-bold text-blue-950 mb-1.5">Career &amp; Entrepreneurship</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Prepare students for Employment, Industry, Entrepreneurship, and Higher Education through systematic teaching and learning.
                    </p>
                  </AnimatedCard>

                  <AnimatedCard delay={0.15} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-yellow-400 shadow-xs transition">
                    <div className="w-9 h-9 rounded-lg bg-yellow-100 text-yellow-900 font-extrabold flex items-center justify-center mb-3">
                      M3
                    </div>
                    <h4 className="text-sm font-bold text-blue-950 mb-1.5">Innovative Pedagogy</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Use innovative pedagogy, technology-enhanced learning, interdisciplinary approaches, fieldwork, and project-based learning.
                    </p>
                  </AnimatedCard>

                  <AnimatedCard delay={0.2} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-yellow-400 shadow-xs transition">
                    <div className="w-9 h-9 rounded-lg bg-yellow-100 text-yellow-900 font-extrabold flex items-center justify-center mb-3">
                      M4
                    </div>
                    <h4 className="text-sm font-bold text-blue-950 mb-1.5">Responsible Citizenship</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Develop students into technocrats, professionals, and responsible citizens through continuous institutional improvement.
                    </p>
                  </AnimatedCard>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Leadership */}
            {activeTab === 'leadership' && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                <AnimatedCard delay={0.05} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-800 to-blue-950 p-0.5 shrink-0">
                      <div className="w-full h-full bg-blue-900 rounded-[10px] flex items-center justify-center font-extrabold text-yellow-300 text-xl">
                        KGP
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950">{COLLEGE_INFO.leadership.chairman}</h4>
                      <p className="text-xs text-blue-800 font-semibold">Chairman, Shri Prince Shivaji Maratha Boarding House</p>
                      <p className="text-xs text-slate-500">Shivaji Peth, Kolhapur</p>
                    </div>
                  </div>
                  <blockquote className="text-xs text-slate-700 italic border-l-2 border-yellow-400 pl-3 leading-relaxed">
                    &ldquo;Carrying forward the historic vision of Chhatrapati Shahu Maharaj, our trust is dedicated to nurturing technical talent from all strata of society with modern infrastructure, generous scholarships, and humane values.&rdquo;
                  </blockquote>
                </AnimatedCard>

                <AnimatedCard delay={0.1} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-800 to-blue-950 p-0.5 shrink-0">
                      <div className="w-full h-full bg-blue-900 rounded-[10px] flex items-center justify-center font-extrabold text-yellow-300 text-xl">
                        SND
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950">{COLLEGE_INFO.leadership.director}</h4>
                      <p className="text-xs text-blue-800 font-semibold">Principal &amp; Director, New Institute of Technology</p>
                      <p className="text-xs text-slate-500">Ph.D, M.E., 25+ Years Experience</p>
                    </div>
                  </div>
                  <blockquote className="text-xs text-slate-700 italic border-l-2 border-yellow-400 pl-3 leading-relaxed">
                    &ldquo;At NIT, education is an experiential journey. With NBA accreditation, modern AI labs, cutting-edge automotive workshops, and 100% placement support, we transform learners into industry-ready leaders.&rdquo;
                  </blockquote>
                </AnimatedCard>
              </motion.div>
            )}

            {/* Tab 4: Educational Ecosystem */}
            {activeTab === 'ecosystem' && (
              <motion.div
                key="ecosystem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <p className="text-xs text-slate-600 text-center max-w-2xl mx-auto">
                  NIT is backed by the comprehensive educational ecosystem of Shri Prince Shivaji Maratha Boarding House (SPSMBH), spanning primary schools to advanced research colleges:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {SISTER_INSTITUTIONS.map((inst, i) => (
                    <AnimatedCard key={i} delay={i * 0.04} className="p-4 rounded-xl bg-white border border-slate-200 hover:border-yellow-400 shadow-xs transition">
                      <div className="flex items-center justify-between text-[11px] text-blue-900 font-bold mb-1">
                        <span>Estd. {inst.established}</span>
                        <GraduationCap className="w-3.5 h-3.5 text-yellow-600" />
                      </div>
                      <h4 className="text-sm font-bold text-blue-950">{inst.name}</h4>
                      <p className="text-xs text-slate-700 mt-1 font-medium">{inst.courses}</p>
                      <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">{inst.highlights}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 5: Accreditations & Awards */}
            {activeTab === 'accreditation' && (
              <motion.div
                key="accreditation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <AnimatedCard delay={0.05} className="p-5 rounded-2xl bg-white border border-yellow-300 shadow-xs space-y-2">
                  <div className="p-2.5 bg-yellow-100 text-yellow-900 rounded-lg w-fit">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">NBA Accredited Programmes</h4>
                  <p className="text-xs text-slate-600">
                    Only polytechnic/institute in Kolhapur city accredited by the National Board of Accreditation (NBA), validating our Outcome-Based Education (OBE) curriculum.
                  </p>
                </AnimatedCard>

                <AnimatedCard delay={0.1} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg w-fit">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">ISTE Delhi Best Polytechnic Award</h4>
                  <p className="text-xs text-slate-600">
                    National recognition from the Indian Society for Technical Education (ISTE) for institutional performance and student project excellence.
                  </p>
                </AnimatedCard>

                <AnimatedCard delay={0.15} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-lg w-fit">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">MSBTE Academic Excellence</h4>
                  <p className="text-xs text-slate-600">
                    Consistently recognized by Maharashtra State Board of Technical Education with top grading and high student pass percentages in merit lists.
                  </p>
                </AnimatedCard>

                <AnimatedCard delay={0.2} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="p-2.5 bg-purple-50 text-purple-700 rounded-lg w-fit">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">ISRO Associated Young Scientist Award</h4>
                  <p className="text-xs text-slate-600">
                    NIT faculty and student research teams conferred with the prestigious Young Scientist award associated with Indian Space Research Organisation initiatives.
                  </p>
                </AnimatedCard>

                <AnimatedCard delay={0.25} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="p-2.5 bg-rose-50 text-rose-700 rounded-lg w-fit">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">MHRD Approved Innovation Council (IIC)</h4>
                  <p className="text-xs text-slate-600">
                    Ministry of Education certified Institution Innovation Council promoting student startups, hackathons, and intellectual property filings.
                  </p>
                </AnimatedCard>

                <AnimatedCard delay={0.3} className="p-5 rounded-2xl bg-white border border-yellow-300 shadow-xs space-y-2">
                  <div className="p-2.5 bg-yellow-100 text-yellow-900 rounded-lg w-fit">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-950">Center of Excellence for Artificial Intelligence</h4>
                  <p className="text-xs text-slate-600">
                    Advanced dedicated laboratory with GPU workstations, edge computing kits, and MCED-approved smart-skill professional certifications.
                  </p>
                </AnimatedCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

