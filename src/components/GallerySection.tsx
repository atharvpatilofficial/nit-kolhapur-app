import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Image,
  Trophy,
  Eye,
  X
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/collegeData';
import { GalleryItem } from '../types/college';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Campus', 'Labs', 'Events', 'Sports', 'Industry Visits', 'Achievements'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const toppersList = [
    { name: 'Prathamesh S. Patil', branch: 'B.Tech CSE (AIML)', year: '2025–26', score: '9.62 CGPA', rank: 'Institute 1st Rank' },
    { name: 'Sanika R. Kulkarni', branch: 'B.Tech Computer Engg', year: '2025–26', score: '9.48 CGPA', rank: 'Branch Topper' },
    { name: 'Adarsh V. Deshmukh', branch: 'Diploma Automobile', year: '2025–26', score: '93.80%', rank: 'MSBTE Regional Ranker' },
    { name: 'Rutuja M. Jadhav', branch: 'Diploma AIML', year: '2025–26', score: '92.40%', rank: 'Branch Topper' },
    { name: 'Sanket B. Chavan', branch: 'Diploma Civil Engg', year: '2025–26', score: '91.60%', rank: 'Branch Topper' },
    { name: 'Omkar P. Bhosale', branch: 'Diploma Mechanical', year: '2025–26', score: '90.80%', rank: 'Branch Topper' }
  ];

  return (
    <section id="gallery" className="py-16 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with MotionHeading */}
        <MotionHeading
          badge="Campus Life & Student Achievements"
          badgeIcon={<Image className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Media Gallery & Academic Toppers Board"
          subtitle="Glimpses of academic life, state-level project exhibitions, interzonal championships, and board merit list toppers."
        />

        {/* Academic Toppers Board */}
        <AnimatedCard delay={0.05} className="mb-14 p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-lg font-bold text-blue-950 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Academic Merit Rankers &amp; Toppers (AY 2025–26)
              </h3>
              <p className="text-xs text-slate-500">Celebrating consistent top ranks in DBATU University &amp; MSBTE Board examinations</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-900 font-bold px-3 py-1 rounded-full border border-yellow-300">
              MSBTE &amp; DBATU Merit
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toppersList.map((topper, i) => (
              <AnimatedCard key={i} delay={i * 0.04} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                <div>
                  <div className="text-xs font-bold text-blue-950">{topper.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{topper.branch}</div>
                  <div className="text-[10px] text-yellow-800 font-semibold mt-1">{topper.rank} ({topper.year})</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-black text-blue-950">{topper.score}</div>
                  <div className="text-[9px] text-slate-400 uppercase font-bold">Aggregate</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCard>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-950 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:text-blue-950 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item, index) => (
              <AnimatedCard
                key={item.id}
                delay={index * 0.04}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-900/40 cursor-pointer aspect-4/3 shadow-xs hover:shadow-md transition"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400 text-slate-950">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight drop-shadow">{item.title}</h4>
                  <p className="text-[11px] text-slate-200 line-clamp-1">{item.caption}</p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-slate-900 opacity-0 group-hover:opacity-100 transition shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl border border-slate-200 max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-6 relative"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 cursor-pointer transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="rounded-xl overflow-hidden aspect-16/9 bg-slate-100 max-h-[60vh]">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-900 border border-yellow-300">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-blue-950">{selectedImage.title}</h3>
                  <p className="text-xs text-slate-600">{selectedImage.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

