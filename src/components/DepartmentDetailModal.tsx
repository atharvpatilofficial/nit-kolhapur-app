import React, { useState } from 'react';
import {
  X,
  Cpu,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Department } from '../types/college';
import { NitLogo } from './NitLogo';
import { motion } from 'motion/react';

interface DepartmentDetailModalProps {
  department: Department | null;
  onClose: () => void;
  onOpenEnquiry: (deptName: string) => void;
}

export const DepartmentDetailModal: React.FC<DepartmentDetailModalProps> = ({
  department,
  onClose,
  onOpenEnquiry
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'labs' | 'projects' | 'faculty'>('overview');

  if (!department) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Header */}
        <div className="p-5 md:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-start gap-4">
            <NitLogo size={52} showGlow className="shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-yellow-400 text-slate-950">
                  {department.level}
                </span>
                {department.established && (
                  <span className="text-xs text-slate-500 font-medium">Estd. {department.established}</span>
                )}
                <span className="text-[10px] text-yellow-900 font-bold font-mono bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300">
                  DTE Code: 6402
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-950">{department.name}</h2>
              <p className="text-xs text-yellow-700 font-bold">{department.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200 text-xs shrink-0 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & HOD' },
            { id: 'labs', label: `Labs & Equipment (${department.labs.length})` },
            { id: 'projects', label: `Student Innovations (${department.studentProjects.length})` },
            { id: 'faculty', label: `Placements & Industry` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-lg font-semibold whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-950 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs leading-relaxed bg-white">
          {/* Tab 1: Overview & HOD */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wide">Department Overview</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{department.overview}</p>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-2xs">
                  <div className="font-bold text-blue-950 uppercase text-[11px]">Vision</div>
                  <p className="text-slate-600">{department.vision}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 shadow-2xs">
                  <div className="font-bold text-blue-950 uppercase text-[11px]">Mission</div>
                  <ul className="space-y-1 text-slate-600">
                    {department.mission.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* HOD Profile Box */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4 shadow-2xs">
                <img
                  src={department.hod.photo}
                  alt={department.hod.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div className="space-y-2 flex-1">
                  <div>
                    <div className="text-[10px] text-yellow-800 font-bold uppercase">Head of Department</div>
                    <div className="text-sm font-bold text-blue-950">{department.hod.name}</div>
                    <div className="text-slate-500 text-[11px]">{department.hod.qualification} • {department.hod.designation}</div>
                  </div>
                  <blockquote className="italic text-slate-700 text-xs border-l-2 border-yellow-500 pl-2.5">
                    &ldquo;{department.hod.message}&rdquo;
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px]">
                    <a href={`tel:${department.hod.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-900 font-semibold hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3 text-yellow-600" /> {department.hod.phone}
                    </a>
                    <span className="text-slate-600 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-blue-900" /> {department.hod.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wide">Key Department Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {department.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Laboratories & Equipment */}
          {activeTab === 'labs' && (
            <div className="space-y-4">
              <p className="text-slate-600">
                Hands-on practical training in industry-grade and MSBTE/DBATU affiliated laboratories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.labs.map((lab, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                      <Cpu className="w-4 h-4 text-yellow-600" />
                      <h4>{lab.name}</h4>
                    </div>
                    <p className="text-slate-600 text-xs">{lab.description}</p>
                    <div className="space-y-1 pt-2 border-t border-slate-200">
                      <div className="text-[10px] uppercase font-bold text-slate-500">Major Equipment:</div>
                      <div className="flex flex-wrap gap-1">
                        {lab.equipment.map((eq, eIdx) => (
                          <span key={eIdx} className="px-2 py-0.5 rounded bg-white text-[10px] text-blue-950 border border-slate-200 font-medium">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Student Innovations */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <p className="text-slate-600">
                Notable state-level competition and exhibition winning projects built by our students:
              </p>
              <div className="space-y-3">
                {department.studentProjects.map((proj, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-blue-950">{proj.title}</h4>
                      {proj.award && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-900 border border-yellow-300">
                          {proj.award}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-xs">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Placements & Industry */}
          {activeTab === 'faculty' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
                <h4 className="text-sm font-bold text-blue-950">Top Corporate Recruiters for {department.name}</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {department.placements.map((company, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white text-blue-950 font-semibold border border-slate-200 text-xs">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
                <h4 className="text-sm font-bold text-blue-950">Eligibility &amp; Intake Matrix</h4>
                <p className="text-xs text-slate-700"><strong>Intake:</strong> {department.intake.btech ? `B.Tech: ${department.intake.btech} Seats` : ''} {department.intake.diploma ? `Diploma: ${department.intake.diploma} Seats` : ''}</p>
                <p className="text-xs text-slate-700"><strong>Duration:</strong> {department.duration}</p>
                <p className="text-xs text-slate-700"><strong>Requirements:</strong> {department.eligibility}</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 md:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600">
            Admissions Hotline: <strong className="text-blue-900 font-bold">8799926060</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(department.name);
              }}
              className="px-5 py-2 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 flex items-center gap-1.5 shadow-xs border border-yellow-500 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Apply for {department.shortName} Seat
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

