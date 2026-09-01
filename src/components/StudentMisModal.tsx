import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Search
} from 'lucide-react';
import { NitLogo } from './NitLogo';
import { motion } from 'motion/react';

interface StudentMisModalProps {
  onClose: () => void;
}

export const StudentMisModal: React.FC<StudentMisModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'library' | 'learning'>('student');
  const [prnNumber, setPrnNumber] = useState('2300470128');
  const [searched, setSearched] = useState(false);
  const [bookQuery, setBookQuery] = useState('');

  const learningPortals = [
    { name: 'SWAYAM Central', desc: 'Govt of India free online credit courses', url: 'https://swayam.gov.in' },
    { name: 'NPTEL Video Lectures', desc: 'IIT/IISc certified engineering courses', url: 'https://nptel.ac.in' },
    { name: 'Virtual Labs', desc: 'Interactive simulation lab experiments', url: 'https://www.vlab.co.in' },
    { name: 'National Digital Library (NDLI)', desc: 'Millions of academic texts and theses', url: 'https://ndl.iitkgp.ac.in' },
    { name: 'Spoken Tutorial (IIT Bombay)', desc: 'Self-paced software & programming training', url: 'https://spoken-tutorial.org' },
    { name: 'Shodh Shuddhi', desc: 'Plagiarism detection and thesis verification', url: 'https://pds.inflibnet.ac.in' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Bar */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <NitLogo size={46} showGlow />
            <div>
              <h2 className="text-lg font-bold text-blue-950">Student MIS &amp; Academic Digital Portal</h2>
              <p className="text-xs text-slate-500 font-medium">Cloud-Based Institute Management System (IMS)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200 text-xs shrink-0 flex-wrap">
          <button
            onClick={() => setActiveTab('student')}
            className={`px-3.5 py-2 rounded-lg font-semibold transition cursor-pointer ${
              activeTab === 'student' ? 'bg-blue-950 text-white font-bold shadow-xs' : 'bg-white text-slate-700 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Student Record &amp; Attendance Lookup
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`px-3.5 py-2 rounded-lg font-semibold transition cursor-pointer ${
              activeTab === 'library' ? 'bg-blue-950 text-white font-bold shadow-xs' : 'bg-white text-slate-700 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Digital Library OPAC
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3.5 py-2 rounded-lg font-semibold transition cursor-pointer ${
              activeTab === 'learning' ? 'bg-blue-950 text-white font-bold shadow-xs' : 'bg-white text-slate-700 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            SWAYAM / NPTEL / Virtual Labs
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs bg-white">
          {/* Tab 1: Student Record Simulator */}
          {activeTab === 'student' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
                <label className="font-semibold text-blue-950 block">Enter Student PRN / Roll Number:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={prnNumber}
                    onChange={(e) => setPrnNumber(e.target.value)}
                    placeholder="Enter PRN (e.g. 2300470128)"
                    className="flex-1 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900"
                  />
                  <button
                    onClick={() => setSearched(true)}
                    className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs cursor-pointer shadow-xs border border-yellow-500"
                  >
                    Lookup MIS
                  </button>
                </div>
              </div>

              {searched && (
                <div className="p-5 rounded-xl bg-slate-50 border border-yellow-400/50 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <div className="text-xs text-yellow-800 font-bold">PRN: {prnNumber}</div>
                      <div className="text-sm font-bold text-blue-950">Aditya Sanjay Patil</div>
                      <div className="text-[11px] text-slate-500 font-medium">Department: Artificial Intelligence &amp; ML (Sem IV)</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold border border-emerald-300">
                      Active Student
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-base font-extrabold text-emerald-600">89.4%</div>
                      <div className="text-[10px] text-slate-500 font-medium">Biometric Attendance</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-base font-extrabold text-blue-950">9.24</div>
                      <div className="text-[10px] text-slate-500 font-medium">Current CGPA</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-base font-extrabold text-blue-900">Cleared</div>
                      <div className="text-[10px] text-slate-500 font-medium">Term-End Exam Fees</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="text-base font-extrabold text-blue-950">3 Books</div>
                      <div className="text-[10px] text-slate-500 font-medium">Library Issued</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <button className="px-3 py-1.5 rounded bg-white text-blue-950 border border-slate-200 hover:bg-slate-100 font-medium cursor-pointer shadow-2xs">
                      Download Fee Receipt
                    </button>
                    <button className="px-3 py-1.5 rounded bg-white text-blue-950 border border-slate-200 hover:bg-slate-100 font-medium cursor-pointer shadow-2xs">
                      View Internal Assessment Marks
                    </button>
                    <button className="px-3 py-1.5 rounded bg-white text-blue-950 border border-slate-200 hover:bg-slate-100 font-medium cursor-pointer shadow-2xs">
                      Hall Ticket AY 2025–26
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Library OPAC */}
          {activeTab === 'library' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
                <label className="font-semibold text-blue-950 block">Search 36,930+ Central Library Catalog Titles:</label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={bookQuery}
                    onChange={(e) => setBookQuery(e.target.value)}
                    placeholder="Search by book title, author, or subject (e.g. Deep Learning, Thermodynamics)..."
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-600 uppercase">Available In Issue &amp; Book Bank:</div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center shadow-2xs">
                  <div>
                    <div className="font-bold text-blue-950">Pattern Recognition and Machine Learning</div>
                    <div className="text-[11px] text-slate-500">Author: Christopher M. Bishop • Acc No: 34102</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold border border-emerald-300">
                    4 Copies Available
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center shadow-2xs">
                  <div>
                    <div className="font-bold text-blue-950">Automotive Mechanics (10th Edition)</div>
                    <div className="text-[11px] text-slate-500">Author: William H. Crouse • Acc No: 18290</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold border border-emerald-300">
                    8 Copies Available
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Digital Learning Links */}
          {activeTab === 'learning' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningPortals.map((portal, i) => (
                <a
                  key={i}
                  href={portal.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-yellow-400 transition group block space-y-1 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-blue-950 group-hover:text-blue-900">
                    <span>{portal.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-yellow-600" />
                  </div>
                  <p className="text-[11px] text-slate-500">{portal.desc}</p>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center shrink-0">
          <span className="text-[11px] text-slate-500">IMS Cloud Hosted • NIT Kolhapur</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </motion.div>
    </div>
  );
};

