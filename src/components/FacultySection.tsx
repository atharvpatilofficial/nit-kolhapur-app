import React, { useState } from 'react';
import {
  Users,
  Search,
  BookOpen,
  Award,
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  FileCheck2,
  Briefcase
} from 'lucide-react';
import { FACULTY_MEMBERS, COLLEGE_INFO } from '../data/collegeData';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const FacultySection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departmentsList = [
    'ALL',
    'Computer Science & Engineering',
    'Artificial Intelligence & Machine Learning',
    'Automobile Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Mechanical Engineering'
  ];

  const filteredFaculty = FACULTY_MEMBERS.filter((faculty) => {
    const matchesDept = selectedDept === 'ALL' || faculty.department.toLowerCase().includes(selectedDept.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      faculty.designation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="faculty" className="py-16 bg-slate-50/60 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <MotionHeading
          badge="Academic Mentors & Researchers"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Distinguished Faculty & Research Directory"
          subtitle="Experienced professors, doctoral researchers, and MSBTE resource persons dedicated to Outcome-Based Education (OBE) and personal mentoring."
        />

        {/* Search & Filter Bar */}
        <AnimatedCard delay={0.05} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Department Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
            {departmentsList.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-blue-950 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-blue-950 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {dept === 'ALL' ? 'All Faculty' : dept.replace(' Engineering', '').replace('Computer Science & Engineering', 'CSE')}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
            />
          </div>
        </AnimatedCard>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty, i) => (
            <AnimatedCard
              key={faculty.id}
              delay={i * 0.04}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-900/30 p-5 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="space-y-3.5">
                {/* Faculty Photo & HOD Badge */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover rounded-xl border border-slate-200 group-hover:scale-105 transition-transform duration-500"
                  />
                  {faculty.isHod && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-yellow-400 text-slate-950 shadow-xs border border-yellow-500">
                      HOD / Academic Lead
                    </span>
                  )}
                </div>

                {/* Name & Designation */}
                <div>
                  <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-900 transition">
                    {faculty.name}
                  </h3>
                  <div className="text-xs text-yellow-700 font-bold">{faculty.designation}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{faculty.department}</div>
                </div>

                {/* Qualification & Experience */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                    <span className="font-semibold text-slate-900 truncate">{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Experience: {faculty.experience}</span>
                  </div>
                  {faculty.publications && (
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <BookOpen className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                      <span>{faculty.publications} Research Publications {faculty.patents ? `• ${faculty.patents} Patents` : ''}</span>
                    </div>
                  )}
                </div>

                {/* Specialization Tags */}
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Expertise:</div>
                  <div className="flex flex-wrap gap-1">
                    {faculty.specialization.slice(0, 3).map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700 border border-slate-200 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                {faculty.phone ? (
                  <a
                    href={`tel:${faculty.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-1 text-blue-900 hover:underline font-bold"
                  >
                    <Phone className="w-3 h-3 text-yellow-600" />
                    <span>{faculty.phone}</span>
                  </a>
                ) : (
                  <span>Verified Faculty</span>
                )}
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 border border-slate-200 font-medium">NIT Kolhapur</span>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Recruitment 2026–27 Careers Banner */}
        <AnimatedCard delay={0.2} className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-block bg-yellow-100 text-yellow-900 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-yellow-300">
              Careers &amp; Recruitment 2026–27
            </div>
            <h4 className="text-base font-bold text-blue-950">
              Faculty Recruitment &amp; Technical Staff Walk-In Interviews
            </h4>
            <p className="text-xs text-slate-500">
              Applications invited for Assistant Professors, Senior Lecturers, and Lab Assistants in AIML, CSE, Automobile, and Mechatronics.
            </p>
          </div>

          <a
            href={`mailto:${COLLEGE_INFO.email}?subject=Faculty%20Application%202026-27`}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-sm border border-yellow-500 transition shrink-0"
          >
            Apply for Faculty Position
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
};

