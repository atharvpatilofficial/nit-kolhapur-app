import React from 'react';
import {
  Briefcase,
  Building,
  Users,
  Quote,
  Phone,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO, RECRUITERS, PLACEMENT_COORDINATORS, ALUMNI_TESTIMONIALS } from '../data/collegeData';
import { MotionHeading, AnimatedCard } from './MotionEffects';
import { AnimatedCounter } from './AnimatedCounter';
import { NitLogo } from './NitLogo';

export const PlacementsSection: React.FC = () => {
  return (
    <section id="placements" className="py-16 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with MotionHeading */}
        <MotionHeading
          badge="Training & Placement Cell"
          badgeIcon={<Briefcase className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Industry Partnerships & Career Outcomes"
          subtitle="Connecting aspiring technocrats to blue-chip multinational corporations, core manufacturing titans, and esteemed public sector departments."
        />

        {/* 4 Outcome Metrics with AnimatedCounter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <AnimatedCard delay={0.05} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-blue-300 transition shadow-xs">
            <div className="text-3xl lg:text-4xl font-black text-blue-950">
              <AnimatedCounter value="4,500+" />
            </div>
            <div className="text-xs font-bold text-slate-900">Alumni in Global MNCs</div>
            <div className="text-[11px] text-slate-500">Across India, US, Europe &amp; Gulf</div>
          </AnimatedCard>

          <AnimatedCard delay={0.1} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-blue-300 transition shadow-xs">
            <div className="text-3xl lg:text-4xl font-black text-blue-950">
              <AnimatedCounter value="1,200+" />
            </div>
            <div className="text-xs font-bold text-slate-900">Govt. &amp; Public Sector</div>
            <div className="text-[11px] text-slate-500">PWD, WRD, MSEDCL, Railways</div>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-blue-300 transition shadow-xs">
            <div className="text-3xl lg:text-4xl font-black text-blue-950">
              <AnimatedCounter value="125+" />
            </div>
            <div className="text-xs font-bold text-slate-900">Motor Vehicle RTO Officers</div>
            <div className="text-[11px] text-slate-500">MPSC Gazetted Officers</div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-blue-300 transition shadow-xs">
            <div className="text-3xl lg:text-4xl font-black text-blue-950">
              <AnimatedCounter value="100%" />
            </div>
            <div className="text-xs font-bold text-slate-900">Internship &amp; Project Assistance</div>
            <div className="text-[11px] text-slate-500">For Every Pass-Out Batch</div>
          </AnimatedCard>
        </div>

        {/* Top Recruiters Grid */}
        <AnimatedCard delay={0.1} className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-900" />
                Key Recruiters &amp; Corporate Partners
              </h3>
              <p className="text-xs text-slate-500">Regular campus interview drives, industrial internships, and MOU collaborations</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-900 font-bold px-3 py-1 rounded-md border border-yellow-300">
              50+ Annual Campus Hiring Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {RECRUITERS.map((recruiter, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.02}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-yellow-400 flex items-center gap-3 transition group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-extrabold text-[11px] text-blue-900 group-hover:bg-yellow-400 group-hover:text-slate-950 transition shrink-0 shadow-xs">
                  {recruiter.logoPlaceholder.slice(0, 4)}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-900 transition">
                    {recruiter.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">{recruiter.category}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCard>

        {/* Alumni Leadership Spotlight */}
        <div className="mb-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-950 flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-900" />
              Alumni in Leadership Roles
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              NIT graduates heading industrial enterprises, multinational tech divisions, and government administrative departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALUMNI_TESTIMONIALS.map((alumni, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.08}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border border-yellow-400 shrink-0 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-blue-950">{alumni.name}</h4>
                      <p className="text-xs text-blue-900 font-semibold">{alumni.designation}</p>
                      <p className="text-[11px] text-slate-500">{alumni.company}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 shrink-0" />
                </div>

                <p className="text-xs text-slate-700 italic leading-relaxed">
                  &ldquo;{alumni.quote}&rdquo;
                </p>

                <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-100 flex justify-between">
                  <span>Branch: {alumni.department}</span>
                  <span className="text-blue-900 font-bold">{alumni.batch}</span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Placement Coordinators Directory */}
        <AnimatedCard delay={0.1} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <NitLogo size={42} showGlow />
              <div>
                <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                  Training &amp; Placement Cell (T&amp;P)
                </h3>
                <p className="text-xs text-slate-500">Official coordination desk for corporate on-campus recruiters and student internships</p>
              </div>
            </div>
            <div className="text-xs text-slate-600 sm:text-right">
              <div>Cell Email: <span className="text-blue-950 font-bold">{COLLEGE_INFO.admissionEmail}</span></div>
              <div className="text-[11px] text-slate-500">DTE Institutional Code: 6402</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PLACEMENT_COORDINATORS.map((coord, i) => (
              <AnimatedCard key={i} delay={i * 0.04} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-blue-900 font-bold">{coord.department}</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{coord.name}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">{coord.phone}</div>
                </div>
                <a
                  href={`tel:${coord.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2 rounded-lg bg-yellow-100 text-yellow-900 hover:bg-yellow-300 transition shrink-0 ml-2 border border-yellow-300"
                  title="Call Coordinator"
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

