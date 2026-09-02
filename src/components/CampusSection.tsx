import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  Home,
  Bus,
  Trophy,
  Laptop,
  CheckCircle2,
  Clock,
  Phone,
  Search,
  Shield,
  Sun,
  Users
} from 'lucide-react';
import { COLLEGE_INFO, BUS_ROUTES } from '../data/collegeData';
import { MotionHeading, AnimatedCard } from './MotionEffects';
import { motion, AnimatePresence } from 'motion/react';
import { NitLogo } from './NitLogo';

export const CampusSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'library' | 'hostels' | 'transport' | 'sports' | 'earnlearn'>('transport');
  const [selectedRoute, setSelectedRoute] = useState<number>(1);
  const [searchStop, setSearchStop] = useState('');

  const filteredRoutes = BUS_ROUTES.filter((r) => {
    if (!searchStop) return true;
    const query = searchStop.toLowerCase();
    return (
      r.routeName.toLowerCase().includes(query) ||
      r.stops.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <section id="campus" className="py-16 bg-slate-50/60 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <MotionHeading
          badge="20+ Acre Smart Tech Infrastructure"
          badgeIcon={<Compass className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Campus Life, Library & Living Facilities"
          subtitle="Located in Shantinagar, Mudshingi, Kolhapur—featuring world-class labs, massive central library, 530+ capacity hostels, and the district’s largest dedicated college bus fleet."
        />

        {/* Facility Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'transport', label: 'College Bus Fleet (5 Routes)', icon: Bus },
            { id: 'library', label: 'Central Digital Library (36.9k+ Books)', icon: BookOpen },
            { id: 'hostels', label: 'Student Hostels (530+ Beds)', icon: Home },
            { id: 'sports', label: 'Sports & Interzonal Championships', icon: Trophy },
            { id: 'earnlearn', label: 'Earn & Learn (Shahu Tech Center)', icon: Laptop }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-950 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-950 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-yellow-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* Tab 1: Transport Bus Network */}
          {activeTab === 'transport' && (
            <motion.div
              key="transport"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-block bg-yellow-100 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-md border border-yellow-300">
                    District&apos;s Biggest Transportation Network
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-950">
                    College Bus Fleet &amp; Scheduled Daily Routes (AY 2025–26 &amp; 2026–27)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Safe, punctual, GPS-tracked transportation serving Ichalkaranji, Kagal, Peth Vadgaon, Gargoti, and Kolhapur city.
                  </p>
                </div>

                {/* Stop Search Input */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search your village or stop..."
                    value={searchStop}
                    onChange={(e) => setSearchStop(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-800"
                  />
                </div>
              </div>

              {/* Bus Routes List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRoutes.map((route, rIdx) => (
                  <AnimatedCard
                    key={route.routeNumber}
                    delay={rIdx * 0.05}
                    className={`p-5 rounded-2xl bg-white border transition space-y-3 cursor-pointer shadow-xs ${
                      selectedRoute === route.routeNumber
                        ? 'border-blue-900 ring-2 ring-blue-900/10'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setSelectedRoute(route.routeNumber)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-yellow-400 text-slate-950 border border-yellow-500">
                        Route #{route.routeNumber}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">{route.startPoint}</span>
                    </div>

                    <h4 className="text-sm font-bold text-blue-950">{route.routeName}</h4>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                        <span>Morning: <strong>{route.morningTime}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                        <span>Return: <strong>{route.eveningTime}</strong></span>
                      </div>
                    </div>

                    {/* Route Stops Pills */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Key Stops:</div>
                      <div className="flex flex-wrap gap-1">
                        {route.stops.map((stop, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700 border border-slate-200 font-medium"
                          >
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Driver Contact */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[11px]">Bus Coordinator:</span>
                      <a
                        href={`tel:${route.driverContact.replace(/[^0-9+]/g, '')}`}
                        className="text-blue-900 hover:underline font-bold flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-yellow-600" />
                        {route.driverContact}
                      </a>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 2: Central Library */}
          {activeTab === 'library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block bg-yellow-100 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-md border border-yellow-300">
                  NIT Central Library &amp; Information Center
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  Comprehensive Knowledge Hub with 36,930+ Volumes &amp; Digital OPAC
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Spanning an expansive <strong>405 sq. meters</strong> built-up area with an air-conditioned <strong>150+ seat reading hall</strong>, our Central Library caters to all B.Tech and Diploma disciplines. Integrated with cloud-based <strong>IMS</strong>, <strong>DELNET</strong>, and the <strong>National Digital Library of India (NDLI)</strong>.
                </p>

                {/* Library Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { val: '36,930', label: 'Total Volumes' },
                    { val: '5,338+', label: 'Reference Books' },
                    { val: '128', label: 'National/Intl Journals' },
                    { val: '6,308', label: 'Book Bank Facility' },
                    { val: '150+', label: 'Reading Hall Seats' },
                    { val: '380+', label: 'Student Project Theses' }
                  ].map((m, i) => (
                    <AnimatedCard key={i} delay={i * 0.05} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <div className="text-xl font-black text-blue-950">{m.val}</div>
                      <div className="text-[11px] text-slate-500">{m.label}</div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <AnimatedCard delay={0.15} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                    Digital Systems &amp; E-Resources
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>DELNET Inter-Library Loan &amp; Document Delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>OPAC (Online Public Access Catalog) Search Terminals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>NPTEL &amp; SWAYAM High-Speed Multimedia Nodes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>National Digital Library of India (NDLI) Club Access</span>
                    </li>
                  </ul>
                </AnimatedCard>

                {/* Library Staff */}
                <AnimatedCard delay={0.2} className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1 shadow-xs">
                  <div className="text-blue-950 font-bold">Library Administration:</div>
                  <p>• <strong>Shri Anant R. Girigosavi</strong> — Librarian &amp; Member Secretary</p>
                  <p>• <strong>Shri Abhishek B. Patil</strong> — Deputy Librarian</p>
                </AnimatedCard>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Hostels */}
          {activeTab === 'hostels' && (
            <motion.div
              key="hostels"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Boys Hostel Card */}
                <AnimatedCard delay={0.05} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl">
                      <Home className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                      250+ Boys Capacity
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">Boys’ Residential Hostels</h3>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">1. Shivaji Peth Boys&apos; Hostel</div>
                      <div className="text-slate-500 mt-0.5">Capacity: 100 Boys • Attached to Main Campus</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">2. Chh. Rajaram Boys&apos; Hostel</div>
                      <div className="text-slate-500 mt-0.5">Capacity: 150 Boys • 51 Thana, Mangalwar Peth</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-yellow-600 shrink-0" />
                      <span>Eco-friendly Solar Hot Water &amp; RO Purified Drinking Water</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>24x7 Resident Rector &amp; Dedicated Campus Security</span>
                    </li>
                  </ul>
                </AnimatedCard>

                {/* Girls Hostel Card */}
                <AnimatedCard delay={0.1} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl">
                      <Home className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold bg-blue-50 text-blue-900 px-3 py-1 rounded-full border border-blue-200">
                      280+ Girls Capacity
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">Ladies&apos; Independent Hostels</h3>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                    <div className="font-bold text-slate-900">Three Independent Women&apos;s Wings</div>
                    <div className="text-slate-500 mt-0.5">
                      Safe, gated residential premises with biometric turnstiles, CCTV, reading room, and medical support.
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>High Security Protocol, Night Study Lounges &amp; Lady Rectors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-900 shrink-0" />
                      <span>Nutritious Hygienic Mess serving wholesome Maharashtrian meals</span>
                    </li>
                  </ul>
                </AnimatedCard>
              </div>

              {/* Freeship Alert */}
              <AnimatedCard delay={0.15} className="p-4 rounded-xl bg-yellow-50 border border-yellow-300 flex items-center justify-between gap-4 text-xs text-slate-800 shadow-xs">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-800 shrink-0" />
                  <span>
                    <strong>20–25 Annual Freeships:</strong> Concessional lodging &amp; boarding awarded to meritorious students from economically weaker and rural backgrounds by the SPSMBH trust.
                  </span>
                </div>
              </AnimatedCard>
            </motion.div>
          )}

          {/* Tab 4: Sports & Championships */}
          {activeTab === 'sports' && (
            <motion.div
              key="sports"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-block bg-yellow-100 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300">
                  10-Year Unbroken Reign
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                  MSBTE Interzonal Sports General Champions
                </h3>
                <p className="text-xs text-slate-600">
                  NIT students excel on the field as fiercely as in the laboratory. Our sprawling playground and gymnasium support diverse sports.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { title: 'Cricket Ground', desc: 'Tournament Turf Pitch' },
                  { title: 'Volleyball & Kho-Kho', desc: 'Floodlit Outdoor Courts' },
                  { title: 'Modern Gymnasium', desc: 'Strength & Fitness Equipment' },
                  { title: 'Indoor Sports Hall', desc: 'Table Tennis, Chess, Carrom' }
                ].map((s, i) => (
                  <AnimatedCard key={i} delay={i * 0.05} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-lg font-bold text-blue-950">{s.title}</div>
                    <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                  </AnimatedCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 5: Earn & Learn Scheme */}
          {activeTab === 'earnlearn' && (
            <motion.div
              key="earnlearn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                  Self-Reliance Initiative • Rajarshi Shahu Tech Center
                </div>
                <NitLogo size={42} showGlow />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-950">
                Earn &amp; Learn Scheme via Rajarshi Shahu Tech Center
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                Upholding Rajarshi Shahu Maharaj’s vision of self-respect and self-reliance, the <strong>Rajarshi Shahu Tech Center</strong> enables deserving engineering students to work on institutional software, CAD designs, workshop machining, and library automation—earning stipends while continuing their full-time studies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { title: '1. Technical Stipend', desc: 'Monthly financial assistance credited directly against semester tuition and boarding fees.' },
                  { title: '2. Practical Exposure', desc: 'Hands-on exposure maintaining institutional network hardware, web portals, and workshop tools.' },
                  { title: '3. Priority Mentorship', desc: 'Personal academic and career guidance from senior professors throughout their program.' }
                ].map((item, i) => (
                  <AnimatedCard key={i} delay={i * 0.05} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <div className="font-bold text-blue-950 mb-1">{item.title}</div>
                    {item.desc}
                  </AnimatedCard>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

