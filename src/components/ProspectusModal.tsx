import React, { useState } from 'react';
import {
  X,
  Download,
  CheckCircle2
} from 'lucide-react';
import { NitLogo } from './NitLogo';
import { motion } from 'motion/react';

interface ProspectusModalProps {
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ onClose, onOpenEnquiry }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Top Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <NitLogo size={46} showGlow />
            <div>
              <h2 className="text-lg font-bold text-blue-950">Official Information Brochure 2026–27</h2>
              <p className="text-xs text-slate-500 font-medium">New Institute of Technology (NIT), Kolhapur</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-700 text-xs leading-relaxed bg-white">
          {downloaded && (
            <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>NIT_Kolhapur_Official_Brochure_2026-27.pdf downloaded successfully.</span>
            </div>
          )}

          {/* Brochure Visual Summary Box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-3">
              <div className="flex items-center gap-3">
                <NitLogo size={36} />
                <div>
                  <div className="text-xs font-bold text-blue-950">Admissions &amp; Academic Prospectus</div>
                  <div className="text-[11px] text-yellow-800 font-bold">DTE Code: 6402 • MSBTE Code: 0047 • DBATU: EN6402</div>
                </div>
              </div>
              <span className="text-[11px] bg-white text-slate-700 px-2.5 py-1 rounded font-mono border border-slate-200 shrink-0 shadow-2xs font-semibold">
                Ver 2026.1
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">Brochure Contents Summary:</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                  <span>SPSMBH Trust History (Estd. 1918 by Chhatrapati Shahu Maharaj)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                  <span>Branch Curricula &amp; Laboratory Specifications (AIML, CSE, Auto, Civil, Mech, Elect)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                  <span>MahaDBT Govt Scholarship Eligibility &amp; FRA Fee Chart</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                  <span>5-Route Dedicated College Bus Fleet Map &amp; Hostel Facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                  <span>Corporate Placement Track Record &amp; Alumni Network</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 shadow-2xs">
            <div className="text-xs font-bold text-blue-950">Need a printed hardcopy brochure by post?</div>
            <p className="text-slate-600 text-[11px]">
              Call our admission desk at <strong className="text-blue-900 font-bold">8799926060 / (0231) 2623824</strong> or schedule an in-person campus counseling visit.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-blue-950 hover:bg-slate-100 cursor-pointer shadow-2xs"
            >
              Online Enquiry
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 flex items-center gap-1.5 shadow-xs border border-yellow-500 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download Prospectus PDF
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

