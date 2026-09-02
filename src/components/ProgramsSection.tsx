import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Cpu,
  Car,
  Building,
  Zap,
  Cog,
  Layers,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  FileDown,
  Sparkles
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { Department } from '../types/college';
import { MotionHeading, AnimatedCard } from './MotionEffects';
import { NitLogo } from './NitLogo';

interface ProgramsSectionProps {
  onSelectDepartment: (dept: Department) => void;
  onOpenEnquiry?: (deptName?: string) => void;
  onOpenProspectus?: () => void;
  onOpenEnquiryWithDept?: (deptName?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectDepartment,
  onOpenEnquiry,
  onOpenProspectus,
  onOpenEnquiryWithDept
}) => {
  const handleEnquiry = (deptName?: string) => {
    if (onOpenEnquiryWithDept) {
      onOpenEnquiryWithDept(deptName);
    } else if (onOpenEnquiry) {
      onOpenEnquiry(deptName);
    }
  };
  const [filter, setFilter] = useState<'ALL' | 'BTECH' | 'DIPLOMA'>('ALL');

  const filteredDepts = DEPARTMENTS.filter((d) => {
    if (filter === 'ALL') return true;
    if (filter === 'BTECH') return d.level.includes('B.Tech');
    if (filter === 'DIPLOMA') return d.level.includes('Diploma');
    return true;
  });

  const getBranchIcon = (id: string) => {
    switch (id) {
      case 'aiml':
        return Cpu;
      case 'computer':
        return Layers;
      case 'automobile':
        return Car;
      case 'civil':
        return Building;
      case 'electrical':
        return Zap;
      case 'mechanical':
        return Cog;
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="programs" className="py-16 bg-white text-slate-800 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with MotionHeading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <MotionHeading
            align="left"
            className="mb-0 md:mb-0"
            badge="AICTE / DTE / DBATU / MSBTE Approved"
            badgeIcon={<GraduationCap className="w-3.5 h-3.5 text-yellow-700" />}
            badgeColor="yellow"
            title="Academic Programmes & Engineering Disciplines"
            subtitle="Industry-calibrated curriculum with direct second year lateral admissions, cutting-edge laboratories, and live industrial training."
          />

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0 self-start md:self-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter('ALL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'ALL' ? 'bg-blue-900 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              All Branches ({DEPARTMENTS.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter('BTECH')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'BTECH' ? 'bg-blue-900 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              B.Tech Degree (4 Yrs)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter('DIPLOMA')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'DIPLOMA' ? 'bg-blue-900 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              Diploma (3 Yrs)
            </motion.button>
          </div>
        </div>

        {/* Programmes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDepts.map((dept, index) => {
              const Icon = getBranchIcon(dept.id);
              return (
                <AnimatedCard
                  key={dept.id}
                  delay={index * 0.05}
                  className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-300 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-yellow-100 text-blue-900 group-hover:text-yellow-900 border border-blue-100 group-hover:border-yellow-300 transition">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-yellow-100 text-yellow-900 border border-yellow-300">
                          {dept.level}
                        </span>
                        {dept.established && (
                          <span className="text-[10px] text-slate-500 mt-0.5">Estd. {dept.established}</span>
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-700 transition">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-blue-900 font-semibold mt-0.5">{dept.tagline}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {dept.overview}
                    </p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-slate-100 text-[11px] text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-blue-800" />
                        <span>
                          Intake: {dept.intake.btech ? `B.Tech: ${dept.intake.btech}` : ''}{' '}
                          {dept.intake.diploma ? `Dip: ${dept.intake.diploma}` : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-800" />
                        <span>Lateral 2nd Yr Open</span>
                      </div>
                    </div>

                    {/* Key Labs Highlights */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Key Labs &amp; Facilities:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {dept.labs.slice(0, 2).map((lab, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{lab.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* HOD Info Snippet */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] text-slate-500">Head of Department</div>
                        <div className="font-semibold text-blue-950">{dept.hod.name}</div>
                      </div>
                      <a
                        href={`tel:${dept.hod.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-[11px] text-blue-900 hover:underline font-bold"
                      >
                        {dept.hod.phone}
                      </a>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-slate-100">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectDepartment(dept)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1 transition cursor-pointer border border-slate-300"
                    >
                      <span>View Labs &amp; Faculty</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleEnquiry(dept.name)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-extrabold bg-yellow-400 hover:bg-yellow-300 text-slate-950 flex items-center justify-center gap-1 transition cursor-pointer shadow-xs border border-yellow-500"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Apply Seat</span>
                    </motion.button>
                  </div>
                </AnimatedCard>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Syllabus & Academic Calendars Ribbon */}
        <AnimatedCard delay={0.2} className="mt-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <NitLogo size={48} showGlow className="hidden sm:inline-flex" />
            <div className="space-y-1">
              <h4 className="text-base font-bold text-blue-950 flex items-center justify-center md:justify-start gap-2">
                <FileDown className="w-4 h-4 text-blue-800" />
                Syllabus &amp; MSBTE K-Scheme / DBATU Academic Calendars
              </h4>
              <p className="text-xs text-slate-600">
                Download program-wise curricula, course outcomes, MSBTE 2025–26 &amp; 2026–27 academic schedules.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenProspectus}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-blue-950 border border-slate-300 shadow-xs transition cursor-pointer"
            >
              Academic Calendar 2025–26
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenProspectus}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 border border-yellow-500 shadow-xs transition cursor-pointer"
            >
              Download Full Syllabus
            </motion.button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

