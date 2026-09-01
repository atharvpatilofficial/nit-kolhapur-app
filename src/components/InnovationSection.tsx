import React from 'react';
import {
  Sparkles,
  Cpu,
  Trophy,
  Rocket,
  Lightbulb,
  ArrowUpRight
} from 'lucide-react';
import { MotionHeading, AnimatedCard } from './MotionEffects';

export const InnovationSection: React.FC = () => {
  const studentInnovations = [
    {
      title: 'Smart Agro-Disease Scanner using Deep CNN',
      department: 'AIML',
      award: 'DIPEX State Innovation Award Winner',
      description: 'Mobile-first real-time plant disease detection model tailored for sugarcane and grape farmers in Kolhapur district.',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      title: 'Autonomous Wheelchair with Eye-Gaze & Voice AI',
      department: 'AIML / Computer',
      award: 'Bharati Vidyapeeth Technofest Winner',
      description: 'Assistive mobility robot controlled via on-device computer vision and voice commands for paralyzed individuals.',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    {
      title: 'Battery-Operated Wheelchair with Reverse Incline Locking',
      department: 'Automobile',
      award: 'MSBTE State Level Project 1st Prize',
      description: 'Pneumatically locked incline safety wheelchair with dual regenerative braking to prevent backward slope rolling.',
      badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300'
    },
    {
      title: 'Multipurpose Agricultural Weed Remover & Aerator',
      department: 'Mechanical',
      award: 'GP Kolhapur Shark Tank Winner',
      description: 'Compact petrol-driven ergonomic implement designed for small-holding sugarcane and soybean farms.',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
    },
    {
      title: 'Precision Architectural Load Model of Ram Mandir',
      department: 'Civil',
      award: 'NPK DigiFest Outstanding Craft Winner',
      description: 'Detailed scale structural engineering and stress-testing model analyzing non-ferrous heritage durability.',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
    },
    {
      title: 'Eco-Friendly Water Injection in 4-Stroke IC Engine',
      department: 'Automobile',
      award: 'ISTE Best Technical Innovation Award',
      description: 'Custom water-methanol vapor injection lowering NOx emissions by 28% while boosting brake thermal efficiency.',
      badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300'
    }
  ];

  const startupPortals = [
    { name: 'Startup India Portal', desc: 'Govt Recognition & Tax Exemption', url: 'https://www.startupindia.gov.in' },
    { name: 'SISFS (Seed Fund Scheme)', desc: 'Financial assistance for early-stage proof of concept', url: 'https://seedfund.startupindia.gov.in' },
    { name: 'Pradhan Mantri MUDRA Yojana', desc: 'Institutional micro-credit funding', url: 'https://www.mudra.org.in' },
    { name: 'SIDBI Venture Capital', desc: 'Small Industries Development Bank of India', url: 'https://www.sidbi.in' },
    { name: 'Atal Innovation Mission (AIM)', desc: 'NITI Aayog innovation ecosystem', url: 'https://aim.gov.in' }
  ];

  return (
    <section id="innovation" className="py-16 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <MotionHeading
          badge="Research, Innovation & Startups"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-yellow-700" />}
          badgeColor="yellow"
          title="Center of Excellence in AI & Innovation Cell (IIC)"
          subtitle="Fostering patents, state-level project champions, entrepreneurship incubators, and MCED-approved smart skill certifications."
        />

        {/* Dual Pillar: AI Center of Excellence + MHRD IIC Cell */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* AI CoE */}
          <AnimatedCard delay={0.05} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl border border-yellow-300">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Center of Excellence in AI</h3>
                <p className="text-xs text-yellow-700 font-semibold">Established 2022 • High-Performance GPU Infrastructure</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with NVIDIA RTX GPU servers and Edge AI Jetson modules, the Center of Excellence enables undergraduate engineers to train computer vision models, large language frameworks, and autonomous robotics algorithms.
            </p>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
              <div className="space-y-0.5">
                <div className="font-semibold text-blue-950">Official Department Publication:</div>
                <div className="text-slate-500 text-[11px]">&ldquo;The Algorithm&rdquo; (AY 2023–24 &amp; 2024–25)</div>
              </div>
              <span className="px-2.5 py-1 bg-yellow-100 text-yellow-900 rounded-md text-[11px] font-bold border border-yellow-300">
                Annual Newsletter
              </span>
            </div>
          </AnimatedCard>

          {/* IIC MHRD Cell */}
          <AnimatedCard delay={0.1} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 text-yellow-900 rounded-xl border border-yellow-300">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Institution’s Innovation Council (IIC)</h3>
                <p className="text-xs text-yellow-700 font-semibold">Approved by Ministry of Education (MHRD), Govt of India</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nurturing student startup culture through prototype funding, patent filing workshops, ideation hackathons, and tie-ups with Maharashtra Centre for Entrepreneurship Development (MCED).
            </p>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs">
              <div className="space-y-0.5">
                <div className="font-semibold text-blue-950">Innovation Credentials:</div>
                <div className="text-slate-500 text-[11px]">DIPEX, MSBTE &amp; Shark Tank Champions</div>
              </div>
              <span className="px-2.5 py-1 bg-yellow-100 text-yellow-900 rounded-md text-[11px] font-bold border border-yellow-300">
                National Star Rating
              </span>
            </div>
          </AnimatedCard>
        </div>

        {/* Award-Winning Student Innovations Showcase */}
        <div className="mb-12 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-950 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                State-Winning Student Engineering Projects
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Real solutions built by NITians tackling regional agriculture, mobility, and structural problems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentInnovations.map((proj, i) => (
              <AnimatedCard
                key={i}
                delay={i * 0.05}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900/30 space-y-3 transition flex flex-col justify-between shadow-xs hover:shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {proj.department} Dept
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${proj.badgeColor}`}>
                      {proj.award}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-blue-950 leading-snug">{proj.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Startup & Incubation External Resources */}
        <AnimatedCard delay={0.2} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                Startup Seed Funding &amp; National Incubation Resources
              </h3>
              <p className="text-xs text-slate-500">Direct portal connections for student innovators seeking seed capital and grants</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {startupPortals.map((portal, i) => (
              <a
                key={i}
                href={portal.url}
                target="_blank"
                rel="noreferrer noopener"
                className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-900/40 transition group block shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs font-bold text-blue-950 group-hover:text-blue-900">
                  <span>{portal.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900" />
                </div>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{portal.desc}</p>
              </a>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

