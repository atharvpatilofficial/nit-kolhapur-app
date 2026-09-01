import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Download,
  CheckCircle2
} from 'lucide-react';
import { MANDATORY_DOCS, COLLEGE_INFO } from '../data/collegeData';
import { NitLogo } from './NitLogo';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const DisclosureSection: React.FC = () => {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const handleSimulateDownload = (title: string) => {
    setDownloadedDoc(title);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 4000);
  };

  return (
    <section id="disclosures" className="py-16 bg-slate-50/60 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <MotionHeading
          badge="Institutional Transparency & Compliance"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Mandatory Disclosures & Statutory Approvals"
          subtitle="Official regulatory affiliations under AICTE, DTE Maharashtra (Code: 6402), DBATU (EN6402), MSBTE (0047), and National Board of Accreditation (NBA)."
        />

        {/* Download notification feedback */}
        {downloadedDoc && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center justify-between shadow-xs animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Official Document <strong>&ldquo;{downloadedDoc}&rdquo;</strong> downloaded successfully.</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-mono font-semibold">PDF • Verified Digital Stamp</span>
          </div>
        )}

        {/* Mandatory Docs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MANDATORY_DOCS.map((doc, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.04}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900/30 flex flex-col justify-between transition space-y-4 shadow-xs hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-900 border border-yellow-300">
                    {doc.category}
                  </span>
                  <FileText className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-sm font-bold text-blue-950 leading-snug">{doc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 font-semibold">{doc.docCode}</span>
                <button
                  onClick={() => handleSimulateDownload(doc.title)}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-yellow-400 hover:text-slate-950 text-slate-700 text-xs font-semibold flex items-center gap-1 transition cursor-pointer border border-slate-200"
                  title="Download Document"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Statutory Committees & Anti-Ragging Cell */}
        <AnimatedCard delay={0.2} className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <NitLogo size={44} showGlow />
              <div>
                <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                  Statutory Compliance, Committees &amp; Anti-Ragging Helpline
                </h3>
                <p className="text-xs text-slate-500">Zero tolerance policy on campus. Active Internal Complaints Committee (ICC) &amp; Equal Opportunity Cell.</p>
              </div>
            </div>
            <div className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shrink-0">
              Zero Tolerance Campus
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-blue-950">Anti-Ragging Committee Head</div>
              <div className="text-blue-900 font-semibold">{COLLEGE_INFO.leadership.director}</div>
              <div className="text-slate-500">Mobile: +91 9767199299</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-blue-950">Women&apos;s Internal Complaint Committee (ICC)</div>
              <div className="text-blue-900 font-semibold">Dr. Asmita A. Desai (Presiding Officer)</div>
              <div className="text-slate-500">Direct Helpline: +91 9890123456</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-blue-950">Right to Information (RTI) Officer</div>
              <div className="text-blue-900 font-semibold">Shri Patil N. B. (Registrar)</div>
              <div className="text-slate-500">Office: (0231) 2623824</div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

