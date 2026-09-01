import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MessageCircle,
  FileText,
  Sparkles,
  ArrowUp,
  GraduationCap
} from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { PlacementsSection } from './components/PlacementsSection';
import { CampusSection } from './components/CampusSection';
import { InnovationSection } from './components/InnovationSection';
import { FacultySection } from './components/FacultySection';
import { GallerySection } from './components/GallerySection';
import { DisclosureSection } from './components/DisclosureSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { DepartmentDetailModal } from './components/DepartmentDetailModal';
import { StudentMisModal } from './components/StudentMisModal';
import { ProspectusModal } from './components/ProspectusModal';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { VideoTourModal } from './components/VideoTourModal';

import { Department } from './types/college';
import { COLLEGE_INFO } from './data/collegeData';

export default function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isMisOpen, setIsMisOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isVideoTourOpen, setIsVideoTourOpen] = useState(false);
  const [enquiryDept, setEnquiryDept] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiryWithDept = (deptName?: string) => {
    setEnquiryDept(deptName);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-300 selection:text-slate-950">
      {/* Sticky Header with Notice Marquee */}
      <Header
        onOpenMis={() => setIsMisOpen(true)}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiryWithDept()}
      />

      {/* Main Content Sections with Framer Motion scroll animations */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiryWithDept()}
          onOpenProspectus={() => setIsProspectusOpen(true)}
          onOpenVideoTour={() => setIsVideoTourOpen(true)}
        />

        {/* 2. Institutional Heritage, Shahu Maharaj Vision & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <AboutSection />
        </motion.div>

        {/* 3. Academic Programs & Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <ProgramsSection
            onSelectDepartment={(dept) => setSelectedDepartment(dept)}
            onOpenEnquiry={(deptName) => handleOpenEnquiryWithDept(deptName)}
          />
        </motion.div>

        {/* 4. Admissions 2026-27, Fee Calculator & Spot Booking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <AdmissionsSection
            onOpenEnquiry={() => handleOpenEnquiryWithDept()}
            onOpenProspectus={() => setIsProspectusOpen(true)}
          />
        </motion.div>

        {/* 5. Placements, Recruiters & Alumni Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <PlacementsSection />
        </motion.div>

        {/* 6. 20+ Acre Campus, Library, 5-Route Bus Network & Hostels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <CampusSection />
        </motion.div>

        {/* 7. Center of Excellence in AI, IIC & Student Innovations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <InnovationSection />
        </motion.div>

        {/* 8. Faculty Directory, Research & Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <FacultySection />
        </motion.div>

        {/* 9. Media Gallery & Academic Toppers Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <GallerySection />
        </motion.div>

        {/* 10. Mandatory Disclosures & Statutory Committees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <DisclosureSection />
        </motion.div>

        {/* 11. Contact Directory, Administrative Desks & Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={() => handleOpenEnquiryWithDept()}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenMis={() => setIsMisOpen(true)}
      />

      {/* Floating Quick Action Widget (Sticky bottom right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-white text-slate-700 hover:text-blue-900 border border-slate-200 shadow-xl transition hover:scale-105 cursor-pointer hover:bg-slate-50"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2 bg-white/95 p-1.5 rounded-full border border-slate-200 shadow-2xl backdrop-blur">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COLLEGE_INFO.admissionHotlines[0]}`}
            className="p-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-yellow-300 transition hover:scale-105 shadow-md"
            title="Call Admissions Hotline"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/918799926060?text=Hello%20NIT%20Kolhapur%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%202026-27%20admissions."
            target="_blank"
            rel="noreferrer noopener"
            className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition hover:scale-105 shadow-md"
            title="WhatsApp Admission Counselor"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Quick Spot Booking CTA */}
          <button
            onClick={() => handleOpenEnquiryWithDept()}
            className="px-3.5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer border border-yellow-500/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-950" />
            <span className="hidden sm:inline">Spot Seat</span> ₹10,400
          </button>
        </div>
      </div>

      {/* Interactive Modals */}
      <AnimatePresence>
        {selectedDepartment && (
          <DepartmentDetailModal
            department={selectedDepartment}
            onClose={() => setSelectedDepartment(null)}
            onOpenEnquiry={(deptName) => handleOpenEnquiryWithDept(deptName)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMisOpen && <StudentMisModal onClose={() => setIsMisOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isProspectusOpen && (
          <ProspectusModal
            onClose={() => setIsProspectusOpen(false)}
            onOpenEnquiry={() => {
              setIsProspectusOpen(false);
              handleOpenEnquiryWithDept();
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEnquiryOpen && (
          <QuickEnquiryModal
            initialDepartment={enquiryDept}
            onClose={() => {
              setIsEnquiryOpen(false);
              setEnquiryDept(undefined);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVideoTourOpen && (
          <VideoTourModal
            onClose={() => setIsVideoTourOpen(false)}
            onOpenEnquiry={() => {
              setIsVideoTourOpen(false);
              handleOpenEnquiryWithDept();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
