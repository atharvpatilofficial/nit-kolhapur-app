import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Menu,
  X,
  FileText,
  ChevronRight,
  Sparkles,
  Bell
} from 'lucide-react';
import { COLLEGE_INFO, NOTICES } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenEnquiry: () => void;
  onOpenMis: () => void;
  onOpenProspectus: () => void;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEnquiry,
  onOpenMis,
  onOpenProspectus,
  activeSection = 'hero',
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About & Legacy' },
    { id: 'programs', label: 'Programs' },
    { id: 'admissions', label: 'Admissions 2026–27', highlight: true },
    { id: 'placements', label: 'Placements' },
    { id: 'campus', label: 'Campus & Hostels' },
    { id: 'innovation', label: 'Innovation (AI/IIC)' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'disclosures', label: 'Mandatory Disclosure' },
    { id: 'contact', label: 'Contact & Directory' },
  ];

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Top Institutional Notification & Regulatory Strip in Deep Blue with Yellow Accents */}
      <div className="bg-[#1E3A8A] dark:bg-[#0f1738] text-white px-4 py-1.5 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-yellow-400 text-blue-950 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-blue-950 animate-pulse" />
              Admissions 2026–27
            </span>
            <span className="text-blue-100 font-medium hidden sm:inline">
              Book Spot Admission in <strong className="text-yellow-300">₹10,400/- Only</strong> • Toll-Free:{' '}
              <a href="tel:18008906290" className="underline hover:text-yellow-300 transition font-bold">
                {COLLEGE_INFO.tollFree}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-blue-100 flex-wrap font-medium">
            <span className="bg-blue-950/60 px-2 py-0.5 rounded border border-blue-700/50">
              DTE: <strong className="text-yellow-300">{COLLEGE_INFO.codes.dte}</strong>
            </span>
            <span className="bg-blue-950/60 px-2 py-0.5 rounded border border-blue-700/50">
              DBATU: <strong className="text-yellow-300">{COLLEGE_INFO.codes.dbatu}</strong>
            </span>
            <span className="bg-blue-950/60 px-2 py-0.5 rounded border border-blue-700/50">
              MSBTE: <strong className="text-yellow-300">{COLLEGE_INFO.codes.msbte}</strong>
            </span>
            <span className="hidden md:inline bg-yellow-400 text-blue-950 font-bold px-2 py-0.5 rounded">
              NBA Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Main Branding Header Bar */}
      <div className="bg-white dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* Official NIT Gear Emblem */}
            <NitLogo size={54} showGlow animate className="drop-shadow-sm" />

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold text-blue-900 dark:text-blue-400 uppercase tracking-wider">
                  {COLLEGE_INFO.parentTrust} (Estd. 1918)
                </span>
                <span className="text-[10px] bg-yellow-100 dark:bg-yellow-950/60 text-yellow-900 dark:text-yellow-300 font-semibold px-1.5 py-0.2 rounded border border-yellow-300 dark:border-yellow-700/50">
                  {COLLEGE_INFO.mottoMarathi}
                </span>
              </div>
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-blue-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-yellow-400 transition">
                New Institute of Technology, Kolhapur
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 hidden sm:block">
                Approved by AICTE, DTE Maharashtra | Affiliated to DBATU (B.Tech) &amp; MSBTE (Diploma)
              </p>
            </div>
          </div>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle variant="compact" />

            <button
              onClick={onOpenProspectus}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-800 dark:text-yellow-400" />
              Prospectus 2026–27
            </button>

            <button
              onClick={onOpenMis}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-700 flex items-center gap-1.5 transition cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300" />
              Student MIS
            </button>

            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-blue-950 shadow-md shadow-yellow-500/20 border border-yellow-500/40 flex items-center gap-1.5 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-950" />
              Admission Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle variant="compact" />
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 text-xs font-bold bg-yellow-400 text-blue-950 rounded-lg cursor-pointer shadow-sm"
            >
              Enquiry
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="hidden lg:block bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1 py-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  link.highlight
                    ? 'text-blue-950 font-bold bg-yellow-300 hover:bg-yellow-400 border border-yellow-400 shadow-sm'
                    : activeSection === link.id
                    ? 'bg-blue-900 dark:bg-blue-700 text-white font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-900 dark:hover:text-yellow-400 hover:bg-slate-200/70 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hotlines */}
          <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1 text-blue-900 dark:text-yellow-400 font-bold">
              <Phone className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
              Admission Helpline: {COLLEGE_INFO.admissionHotlines[0]}
            </span>
          </div>
        </div>
      </nav>

      {/* Live Notice Marquee Bar */}
      <div className="bg-amber-50/80 dark:bg-slate-800/90 border-b border-amber-200/80 dark:border-slate-700 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="flex items-center gap-1 bg-yellow-400 text-blue-950 px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
            <Bell className="w-3 h-3 text-blue-950 animate-bounce" />
            Announcement
          </span>
          <div className="overflow-hidden whitespace-nowrap text-slate-800 dark:text-slate-200 relative w-full flex">
            <div className="animate-marquee hover:pause flex items-center shrink-0">
              {[...NOTICES, ...NOTICES].map((n, idx) => (
                <span key={`${n.id}-${idx}`} className="mx-6 inline-flex items-center gap-2">
                  <span className="text-blue-900 dark:text-yellow-400 font-bold">[{n.category}]</span>
                  <button
                    onClick={() => {
                      if (n.category === 'Admissions') {
                        onOpenEnquiry();
                      } else {
                        scrollToSection('admissions');
                      }
                    }}
                    className="hover:text-blue-700 dark:hover:text-yellow-300 hover:underline cursor-pointer font-medium text-left"
                  >
                    {n.title}
                  </button>
                  {n.isNew && (
                    <span className="bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                onOpenProspectus();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-center flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-800 dark:text-yellow-400" />
              Prospectus
            </button>
            <button
              onClick={() => {
                onOpenMis();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-300 text-center flex items-center justify-center gap-1.5 border border-blue-200 dark:border-blue-800 cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-blue-800 dark:text-blue-300" />
              Student MIS
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition cursor-pointer ${
                  link.highlight
                    ? 'bg-yellow-300 text-blue-950 font-bold border border-yellow-400'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-800 dark:text-yellow-400" />
              Direct Admission Desk: <strong className="text-slate-900 dark:text-white">{COLLEGE_INFO.admissionHotlines[0]}</strong>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-800 dark:text-yellow-400" />
              {COLLEGE_INFO.email}
            </p>
            <p className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-800 dark:text-yellow-400" />
              {COLLEGE_INFO.address}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
