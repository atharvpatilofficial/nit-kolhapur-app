import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Heart
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { NitLogo } from './NitLogo';

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenProspectus: () => void;
  onOpenMis: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEnquiry,
  onOpenProspectus,
  onOpenMis
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs">
      {/* Top CTA Bar in Vibrant Yellow */}
      <div className="bg-yellow-400 text-blue-950 py-8 px-4 border-b border-yellow-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs font-black uppercase tracking-wider bg-blue-950 text-yellow-300 px-3 py-1 rounded-full inline-block mb-2 shadow-xs">
              Admissions AY 2026–27 Open
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Begin Your Engineering Journey at NIT Kolhapur
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-blue-900 mt-1 max-w-2xl">
              Govt-approved engineering degrees and polytechnic diplomas in AI/ML, Computer, Automobile, Civil, Electrical, and Mechanical.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenProspectus}
              className="px-5 py-3 rounded-xl bg-blue-950 text-white hover:bg-blue-900 font-extrabold shadow-sm transition cursor-pointer"
            >
              Download Brochure
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-3 rounded-xl bg-white text-blue-950 hover:bg-slate-100 font-extrabold shadow-sm border border-slate-200 transition cursor-pointer"
            >
              Apply / Spot Booking
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Trust (2 cols wide) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <NitLogo size={46} showGlow />
            <div>
              <div className="font-extrabold text-sm text-blue-950 tracking-tight">
                New Institute of Technology
              </div>
              <div className="text-[10px] text-yellow-700 font-bold">
                Shantinagar, Mudshingi, Kolhapur • Estd. 1983
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Run by <strong className="text-slate-800">Shri Prince Shivaji Maratha Boarding House (Estd. 1918)</strong>, founded under the patronage of Rajarshi Chhatrapati Shahu Maharaj. Delivering quality, affordable engineering education to all strata of society for over four decades.
          </p>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1 text-[11px] text-slate-700">
            <div className="font-bold text-blue-950">Statutory Approval Codes:</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-yellow-800 font-bold font-mono">
              <span>DTE: 6402</span>
              <span>MSBTE: 0047</span>
              <span>DBATU: EN6402</span>
              <span>AICTE Approved</span>
            </div>
          </div>
        </div>

        {/* Col 2: Academic Programs */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">Engineering Programs</h4>
          <ul className="space-y-2">
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">B.Tech in Artificial Intelligence &amp; ML</a>
            </li>
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">B.Tech in Computer Science &amp; Engg</a>
            </li>
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">Diploma in Automobile Engineering</a>
            </li>
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">Diploma in Civil Engineering</a>
            </li>
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">Diploma in Electrical Engineering</a>
            </li>
            <li>
              <a href="#programs" className="hover:text-blue-900 hover:underline transition">Diploma in Mechanical &amp; Mechatronics</a>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Portals & Facilities */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">Portals &amp; Facilities</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={onOpenMis} className="hover:text-blue-900 hover:underline text-left transition cursor-pointer">
                Student &amp; Staff MIS Portal
              </button>
            </li>
            <li>
              <a href="#campus" className="hover:text-blue-900 hover:underline transition">Central Digital Library (36.9k+ Books)</a>
            </li>
            <li>
              <a href="#campus" className="hover:text-blue-900 hover:underline transition">College Bus Network (5 Routes)</a>
            </li>
            <li>
              <a href="#campus" className="hover:text-blue-900 hover:underline transition">Student Hostels (530+ Capacity)</a>
            </li>
            <li>
              <a href="#innovation" className="hover:text-blue-900 hover:underline transition">AI Center of Excellence &amp; IIC Cell</a>
            </li>
            <li>
              <a href="#placements" className="hover:text-blue-900 hover:underline transition">Training &amp; Placement Cell</a>
            </li>
          </ul>
        </div>

        {/* Col 4: Institutional Compliance & Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">Statutory &amp; Helpdesk</h4>
          <ul className="space-y-2">
            <li>
              <a href="#disclosures" className="hover:text-blue-900 hover:underline transition">Mandatory Disclosures (AICTE/DTE)</a>
            </li>
            <li>
              <a href="#disclosures" className="hover:text-blue-900 hover:underline transition">Anti-Ragging Committee (Zero Tolerance)</a>
            </li>
            <li>
              <a href="#disclosures" className="hover:text-blue-900 hover:underline transition">Internal Complaint Committee (ICC)</a>
            </li>
            <li>
              <a href="#admissions" className="hover:text-blue-900 hover:underline transition">MahaDBT Scholarship Guidance</a>
            </li>
            <li className="pt-2">
              <div className="text-blue-950 font-bold">Toll-Free Helpline:</div>
              <a href={`tel:${COLLEGE_INFO.tollFree}`} className="text-blue-900 font-bold hover:underline">
                {COLLEGE_INFO.tollFree}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sister Institutions Footnote */}
      <div className="border-t border-slate-200 bg-slate-100/80 py-6 px-4">
        <div className="max-w-7xl mx-auto space-y-2 text-[11px] text-slate-500">
          <div className="font-semibold text-slate-700">
            Shri Prince Shivaji Maratha Boarding House (SPSMBH) Educational Network:
          </div>
          <p className="leading-relaxed">
            New Institute of Technology (NIT) • New Polytechnic Kolhapur • Shri Prince Shivaji Maratha Boarding House Hostels (Shivaji Peth &amp; Chh. Rajaram Hostel) • Rajarshi Shahu Tech Center • College of Education &amp; D.Ed Institutes.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-200 py-6 px-4 bg-white text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear} New Institute of Technology (NIT), Kolhapur. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#disclosures" className="hover:text-slate-900">Privacy Policy</a>
            <span>•</span>
            <a href="#disclosures" className="hover:text-slate-900">Terms of Admission</a>
            <span>•</span>
            <a href="#disclosures" className="hover:text-slate-900">RTI Declaration</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
