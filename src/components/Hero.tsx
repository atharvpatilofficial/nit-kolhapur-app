import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Layers,
  GraduationCap,
  Play
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { AnimatedCounter } from './AnimatedCounter';
import { AnimatedCard } from './MotionEffects';

interface HeroProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
  onOpenVideoTour?: () => void;
  onExplorePrograms?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenProspectus,
  onOpenVideoTour,
  onExplorePrograms
}) => {
  const handleExplore = () => {
    if (onExplorePrograms) {
      onExplorePrograms();
    } else {
      const el = document.getElementById('programs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden pt-8 pb-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-40 dark:opacity-20 pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.28, 0.18]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-300/30 dark:bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Accreditation & Regulatory Accreditations Strip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6"
        >
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-yellow-300 dark:bg-yellow-400 text-blue-950 border border-yellow-400 dark:border-yellow-500 shadow-xs cursor-default"
          >
            <Award className="w-3.5 h-3.5 text-blue-950" />
            NBA Accredited Programmes
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs cursor-default"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            AICTE Approved • DTE Code: <strong className="text-slate-900 dark:text-white">{COLLEGE_INFO.codes.dte}</strong>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs cursor-default"
          >
            DBATU (B.Tech: {COLLEGE_INFO.codes.dbatu}) • MSBTE (Diploma: {COLLEGE_INFO.codes.msbte})
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs cursor-default"
          >
            ISTE Delhi Best Polytechnic Award
          </motion.span>
        </motion.div>

        {/* Central Hero Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg hover:border-yellow-400 transition group cursor-pointer inline-flex items-center gap-3">
              <NitLogo size={64} showGlow animate className="shrink-0" />
              <div className="text-left pr-2">
                <div className="text-[11px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                  Shri Prince Shivaji Maratha Boarding House
                </div>
                <div className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>{COLLEGE_INFO.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-300 font-bold border border-yellow-300 dark:border-yellow-700">
                    DTE: {COLLEGE_INFO.codes.dte}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 dark:text-white leading-tight"
          >
            Empowering Future Technocrats with{' '}
            <span className="text-blue-700 dark:text-yellow-400 underline decoration-yellow-400 dark:decoration-blue-500 decoration-wavy decoration-2">
              40+ Years of Engineering Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to <strong className="text-slate-900 dark:text-white">New Institute of Technology (NIT), Kolhapur</strong>. Offering premier
            AICTE-approved <strong className="text-slate-900 dark:text-white">B.Tech Degree</strong> &amp; <strong className="text-slate-900 dark:text-white">Polytechnic Diploma</strong>{' '}
            programs with cutting-edge AI &amp; GPU labs, live vehicle testing bays, 20+ acre campus,
            and dedicated industry recruitment in top global MNCs.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 rounded-xl text-sm font-extrabold bg-yellow-400 hover:bg-yellow-300 text-blue-950 shadow-lg shadow-yellow-500/20 border border-yellow-500/40 transition flex items-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-950 animate-spin" style={{ animationDuration: '4s' }} />
              Apply for Admissions 2026–27
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleExplore}
              className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-white shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-yellow-300" />
              Explore Academic Programs
            </motion.button>

            {onOpenVideoTour && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenVideoTour}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-blue-900 dark:text-blue-300 border border-slate-300 dark:border-slate-700 shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-blue-800 dark:text-yellow-400" />
                Virtual Tour
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenProspectus}
              className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 shadow-xs transition flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              Download Prospectus
            </motion.button>
          </motion.div>

          {/* Spot Admission Offer Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-300 dark:border-yellow-700/60 text-xs text-yellow-950 dark:text-yellow-200 shadow-xs"
          >
            <span className="bg-yellow-400 text-blue-950 font-extrabold px-2.5 py-0.5 rounded text-[11px] uppercase shadow-xs">
              Spot Admission
            </span>
            <span>
              Book Your 2026–27 Seat on Spot in <strong className="text-blue-950 dark:text-yellow-300 font-extrabold">₹10,400/- Only</strong> (In-College &amp; GrayQuest Zero Cost EMI Available)
            </span>
          </motion.div>
        </div>

        {/* Verified Outcome Stats Grid with Animated Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <AnimatedCard delay={0.1} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.yearsOfLegacy} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">Years of Legacy</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Estd. 1983 (Trust 1918)</div>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.alumniInMNCs} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">Alumni in Global MNCs</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Tata, Mercedes, Siemens</div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.rtoInspectors} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">RTO &amp; Govt Inspectors</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Automobile Nodal Center</div>
          </AnimatedCard>

          <AnimatedCard delay={0.25} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.campusAcres} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">Acre Tech Campus</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Shivaji Peth, Kolhapur</div>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.libraryVolumes} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">Library Volumes</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">DELNET, OPAC &amp; Journals</div>
          </AnimatedCard>

          <AnimatedCard delay={0.35} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-900 dark:text-yellow-400">
              <AnimatedCounter value={COLLEGE_INFO.stats.internshipRate} />
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mt-1">Industry Internships</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">For All Pass-Out Batches</div>
          </AnimatedCard>
        </div>

        {/* 3 Key Institution Pillars Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <AnimatedCard delay={0.2} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 border border-blue-100 dark:border-blue-800 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-blue-950 dark:text-white">NBA Accredited &amp; AICTE Approved</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Kolhapur city&apos;s renowned polytechnic and engineering center with NBA accreditation and MSBTE Academic Excellence.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="p-3 rounded-xl bg-yellow-50 dark:bg-yellow-950/60 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800/50 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-blue-950 dark:text-white">Center of Excellence in AI &amp; Mobility</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Hands-on AI/ML GPU workstations, MSBTE Automobile Nodal testing rigs, EV chargers, and Additive 3D manufacturing.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-yellow-400 transition">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 border border-blue-100 dark:border-blue-800 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-blue-950 dark:text-white">District&apos;s Largest Bus &amp; Hostel System</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Extensive 5-route dedicated bus network across Kolhapur district, 530+ capacity hostels with freeships for needy students.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
