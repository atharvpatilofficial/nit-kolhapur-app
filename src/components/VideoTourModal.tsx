import React from 'react';
import { X } from 'lucide-react';
import { NitLogo } from './NitLogo';
import { motion } from 'motion/react';

interface VideoTourModalProps {
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ onClose, onOpenEnquiry }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <NitLogo size={44} showGlow />
            <div>
              <h2 className="text-base font-bold text-blue-950">NIT Kolhapur 20+ Acre Campus Virtual Tour</h2>
              <p className="text-xs text-slate-500 font-medium">Shantinagar, Mudshingi, Kolhapur • Estd. 1983</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Showcase */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs bg-white">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-16/9 relative group shadow-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
              title="NIT Kolhapur Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Tour Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-2xs">
              <div className="font-bold text-blue-950 text-xs">1. Academic &amp; Tech Wings</div>
              <p className="text-slate-600 text-[11px]">AI Research Labs, 500+ CAD Workstations, IoT &amp; Embedded Systems Center.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-2xs">
              <div className="font-bold text-blue-950 text-xs">2. Central Library &amp; Reading Hall</div>
              <p className="text-slate-600 text-[11px]">405 sq.m library with 36,930+ volumes, OPAC search, and 150-seat AC hall.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 shadow-2xs">
              <div className="font-bold text-blue-950 text-xs">3. Sports Complex &amp; Hostels</div>
              <p className="text-slate-600 text-[11px]">Cricket ground, multi-sports turf, 530+ bed residential hostels with solar power.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-600">Want to visit in person?</span>
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
                onOpenEnquiry();
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-xs border border-yellow-500 cursor-pointer"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

