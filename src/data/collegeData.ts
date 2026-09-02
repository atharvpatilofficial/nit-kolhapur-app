import {
  Department,
  FacultyMember,
  Recruiter,
  AlumniStory,
  BusRoute,
  Notice,
  GalleryItem,
  SisterInstitution,
  MandatoryDoc
} from '../types/college';

export const COLLEGE_INFO = {
  name: 'New Institute of Technology',
  shortName: 'NIT Kolhapur',
  legacyName: 'New Polytechnic Kolhapur (NPK)',
  tagline: 'Center of Academic Excellence for Global Industrial & Societal Needs',
  mottoMarathi: 'बहुजन हिताय | बहुजन सुखाय',
  mottoEnglish: 'For the welfare of many | For the happiness of many',
  establishedYear: 1983,
  parentTrust: 'Shri Prince Shivaji Maratha Boarding House, Kolhapur (SPSMBH)',
  parentTrustEst: 1920,
  founderInspiration: 'Rajarshi Chhatrapati Shahu Maharaj',
  address: 'Shantinagar, Mudshingi, Kolhapur, Maharashtra 416005',
  phone: '(0231) 2623824',
  tollFree: '1800 890 6290',
  admissionHotlines: ['8799926060', '8799926069', '8799926070'],
  email: 'info@nitkolhapur.edu.in',
  admissionEmail: 'admissions@nitkolhapur.edu.in',
  codes: {
    dte: '6402',
    dbatu: 'EN6402',
    msbte: '0047',
    aicte: '1-442128781'
  },
  stats: {
    yearsOfLegacy: '40+',
    campusAcres: '20+',
    alumniInMNCs: '4,500+',
    alumniGovtSector: '1,200+',
    rtoInspectors: '125+',
    internshipRate: '100%',
    libraryVolumes: '36,930+',
    hostelCapacity: '530+'
  },
  leadership: {
    chairman: 'Hon. K. G. Patil',
    director: 'Dr. Sanjay H. Dabhole (Principal)',
    registrar: 'Patil N. B.'
  }
};

export const NOTICES: Notice[] = [
  {
    id: 'n-1',
    title: 'Admissions Open 2026–27: Book Spot Admission in ₹10,400/- Only for B.Tech & Diploma',
    date: 'Aug 2026',
    category: 'Admissions',
    isNew: true
  },
  {
    id: 'n-2',
    title: 'Recruitment 2026–27: Walk-in Interviews for Assistant Professors & Technical Lecturers',
    date: 'Aug 2026',
    category: 'Recruitment',
    isNew: true
  },
  {
    id: 'n-3',
    title: 'AICTE Approval for New Cutting-Edge B.Tech Specializations in CSE (AI & ML) & Mechatronics',
    date: 'Jul 2026',
    category: 'Academics',
    isNew: true
  },
  {
    id: 'n-4',
    title: 'Campus Placement Phase-II: 35+ Core MNCs visiting for On-Campus Drives',
    date: 'Jul 2026',
    category: 'Events',
    isNew: false
  },
  {
    id: 'n-5',
    title: 'International Conference on Sustainable Engineering & Emerging AI Technologies — Call for Papers',
    date: 'Jul 2026',
    category: 'Academics',
    isNew: false
  },
  {
    id: 'n-6',
    title: 'MahaDBT & State Govt Scholarship Portal Renewal Notice for SC/ST/OBC/EBC/NT students',
    date: 'Jun 2026',
    category: 'Admissions',
    isNew: false
  }
];

export const SISTER_INSTITUTIONS: SisterInstitution[] = [
  {
    name: 'Maharashtra High School & Junior College',
    established: 1960,
    courses: 'Secondary, Higher Secondary, Vocational & Agriculture',
    highlights: '20,000+ Book Library, Large Playground, State Sports Champions'
  },
  {
    name: 'The New College, Kolhapur',
    established: 1971,
    courses: 'Arts, Commerce, Science, Computer Science, BBA & MCVC',
    highlights: 'Ideal Educational Institution Award by Govt of Maharashtra'
  },
  {
    name: 'College of Architecture, Kolhapur',
    established: 1984,
    courses: 'B.Arch (5 Yrs) & M.Arch (2 Yrs)',
    highlights: 'NASA National Competition Winner, State-of-the-Art Studios'
  },
  {
    name: 'New Prathamik Vidyalaya',
    established: 1985,
    courses: 'Primary Education & Music Foundations',
    highlights: 'Scholarship achievements, Free medical checkups for needy'
  },
  {
    name: 'Girls’ High School (Shantinagar–Unchgaon)',
    established: 1991,
    courses: 'Secondary Education for Girls',
    highlights: 'Night study rooms, Computer labs, Focus on underprivileged girls'
  },
  {
    name: 'Prince Shivaji English Medium School',
    established: 2008,
    courses: 'CBSE / English Medium Pre-Primary to High School',
    highlights: 'Personal attention, Activity-based digital classrooms'
  },
  {
    name: 'New College of Pharmacy, Kolhapur',
    established: 2022,
    courses: 'B.Pharm & D.Pharm',
    highlights: 'PCI Approved, Advanced Pharmaceutical Formulation Labs'
  },
  {
    name: 'New Women’s College of Pharmacy',
    established: 2023,
    courses: 'D.Pharm for Women',
    highlights: 'Women empowerment in pharmaceutical sciences'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning (AIML)',
    shortName: 'AIML',
    level: 'B.Tech & Diploma',
    tagline: 'Unlock Potential of A.I & Intelligent Systems',
    established: 2022,
    intake: { btech: 60, diploma: 60 },
    duration: '4 Years (B.Tech) / 3 Years (Diploma) / Lateral Entry Available',
    eligibility: '12th Science (PCM) / 10th for Diploma / ITI / Direct Second Year',
    hod: {
      name: 'Prof. Vikram Gavali',
      designation: 'Head of Department & Assistant Professor',
      qualification: 'M.Tech CSE, Ph.D (Pursuing)',
      phone: '+91 9657242994',
      email: 'aiml.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      message: 'Our AIML department is a recognized Center of Excellence. We nurture students with hands-on generative AI, deep neural networks, and interdisciplinary industrial applications from day one.'
    },
    overview: 'Established in 2022 with a vision to build Maharashtra’s premier AI training ground. Students engage in Deep Learning, Computer Vision, Generative AI, Natural Language Processing, and Cloud AI deployment applied across Healthcare, Agriculture, Manufacturing, and FinTech.',
    vision: 'To become a renowned department for AI/ML education in Maharashtra and develop industry-ready ethical engineers.',
    mission: [
      'Deliver cutting-edge curriculum in Artificial Intelligence and Machine Learning.',
      'Foster high-impact industry collaboration and practical project-based R&D.',
      'Produce socially responsible engineers equipped to solve regional and global challenges.',
      'Instill lifelong learning skills and ethical AI development values.'
    ],
    keyFeatures: [
      'High Performance GPU AI Workstations & NVIDIA Jetson Nano Kits',
      'Winner of DIPEX State Level Project Competition',
      'Winner of Bharati Vidyapeeth Technofest & Shark Tank Kolhapur',
      'Published Department Newsletter "The Algorithm"',
      '100% Industry Internship assistance with Top AI startups and MNCs'
    ],
    labs: [
      {
        name: 'AI & Deep Learning Research Lab',
        description: 'Dedicated GPU servers, Tensor processing environments, and CUDA programming setups.',
        equipment: ['High-End NVIDIA RTX Workstations', 'Python AI Toolkits', 'TensorFlow/PyTorch Server', 'Jetson Nano Dev Kits']
      },
      {
        name: 'Data Science & Machine Learning Lab',
        description: 'Big data processing, statistical computing, and predictive modeling workstation cluster.',
        equipment: ['Jupyter Enterprise Gateway', 'Apache Spark Cluster', 'R & Tableau Workstations', 'Cloud AI Sandbox']
      },
      {
        name: 'Computer Vision & IoT Lab',
        description: 'Autonomous robotics vision, edge cameras, and drone analytics workspace.',
        equipment: ['Intel RealSense 3D Cameras', 'Raspberry Pi 5 Clusters', 'Embedded Vision Sensors', 'Thermal Imaging Kits']
      }
    ],
    studentProjects: [
      {
        title: 'Smart Agro-Disease Scanner using Deep CNN',
        description: 'Mobile-first real-time plant disease detection model tailored for Kolhapur sugarcane and grape farmers.',
        award: 'DIPEX State Innovation Award Winner'
      },
      {
        title: 'Autonomous Wheelchair with Eye-Gaze & Voice AI',
        description: 'Assistive mobility robot powered by on-device computer vision and voice commands.',
        award: 'Technofest 1st Prize Winner'
      },
      {
        title: 'Traffic Congestion Optimizer using YOLOv8',
        description: 'Intelligent signal timing system deployed on live CCTV feeds for municipal intersections.',
        award: 'MSBTE Regional Runner-up 2025'
      }
    ],
    facultyCount: 18,
    placements: ['TCS Digital', 'Infosys AI Lab', 'Siemens Digital', 'Cognizant', 'Tech Mahindra', 'Tata Elxsi'],
    newsletterTitle: 'The Algorithm'
  },
  {
    id: 'computer',
    name: 'Computer Science & Engineering / Electronics & Computer',
    shortName: 'CSE / E&CE',
    level: 'B.Tech & Diploma',
    tagline: 'Architecting Digital Transformation & Software Systems',
    intake: { btech: 60, diploma: 60 },
    duration: '4 Years (B.Tech) / 3 Years (Diploma)',
    eligibility: '12th PCM / 10th for Diploma / D.Voc / ITI',
    hod: {
      name: 'Prof. Deepak P. Jagtap',
      designation: 'Head of Department & Sr. Associate Professor',
      qualification: 'M.Tech E&TC, B.E. Electronics (23+ Yrs Exp)',
      phone: '+91 9423276182',
      email: 'cse.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      message: 'With over two decades of educational rigor, we blend core computing fundamentals, cybersecurity, cloud architecture, and modern full-stack development to ensure every graduate excels in global technology roles.'
    },
    overview: 'One of the most sought-after programs at NIT Kolhapur. The department bridges hardware-software interfaces, modern web frameworks, cybersecurity, database management, and mobile computing.',
    vision: 'To produce globally competitive computer engineers grounded in technical mastery and ethical values.',
    mission: [
      'Provide rigorous academic training in modern software and computing architectures.',
      'Empower students with industry-relevant hackathons, live client projects, and coding clubs.',
      'Cultivate an entrepreneurial mindset through incubation and technology incubation partnerships.'
    ],
    keyFeatures: [
      'NBA Accredited Academic Excellence',
      'Over 23+ Years of faculty leadership in Embedded & Computing domains',
      'State-of-the-Art 500+ high-speed Gigabit LAN connected PC infrastructure',
      'Active CodeChef, HackerRank & Google Developer Student Club campus chapter'
    ],
    labs: [
      {
        name: 'Advanced Programming & Algorithm Lab',
        description: 'Multi-OS lab for C++, Java, Python, Go, and competitive algorithmic challenges.',
        equipment: ['60 Core i7 Systems', 'Linux Enterprise Workstations', 'VS Code Pro Sandbox', 'Git CI/CD Pipeline Server']
      },
      {
        name: 'Database & Cloud Computing Lab',
        description: 'Relational & NoSQL database management, distributed computing, and AWS/GCP sandbox.',
        equipment: ['PostgreSQL & MongoDB Cluster', 'Docker & Kubernetes Node', 'Cloud IDE Suite', 'High Speed NAS Storage']
      },
      {
        name: 'Embedded Systems & IoT Lab',
        description: 'Microcontroller programming, Arduino, ESP32, and hardware-software integration.',
        equipment: ['ARM Cortex Development Boards', 'Digital Storage Oscilloscopes', 'Logic Analyzers', 'Sensor Modules']
      },
      {
        name: 'Cybersecurity & Networks Lab',
        description: 'Network simulation, ethical hacking sandbox, packet analysis, and cryptography.',
        equipment: ['Cisco Managed Switches & Routers', 'Wireshark Testing Stations', 'Kali Linux Isolated Network']
      }
    ],
    studentProjects: [
      {
        title: 'Campus ERP & Smart Attendance System',
        description: 'Biometric and face recognition-based automated attendance portal for 2,000+ students.',
        award: 'In-House Institutional Deployment'
      },
      {
        title: 'Decentralized Academic Credential Verifier',
        description: 'Blockchain-backed marksheet authentication to prevent certificate tampering.',
        award: 'NPK DigiFest Best Software Project'
      }
    ],
    facultyCount: 15,
    placements: ['TCS', 'Infosys', 'Capgemini', 'Wipro', 'Persistent Systems', 'Zensar', 'Accenture']
  },
  {
    id: 'automobile',
    name: 'Automobile Engineering',
    shortName: 'Automobile',
    level: 'Diploma',
    tagline: 'Connecting Aspirations & Mobility Innovation',
    established: 1983,
    intake: { diploma: 60 },
    duration: '3 Years (Post 10th) / 2 Years (Direct 2nd Year)',
    eligibility: '10th SSC Pass with Science & Math / 12th Science / ITI',
    hod: {
      name: 'Prof. S. H. Deshmukh',
      designation: 'Head of Department',
      qualification: 'M.E. Automobile / Mechanical',
      phone: '+91 9422423423',
      email: 'auto.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      message: 'NIT Automobile Department is an MSBTE Nodal Resource Center. With real running cars, jeeps, cut-section engines, and EV testbeds, our students learn automotive engineering with their own hands.'
    },
    overview: 'One of the hallmark departments of NIT Kolhapur since 1983. Backed by extensive vehicle fleets, chassis simulators, engine testing rigs, and EV powertrain kits, the department has produced over 125+ RTO officers and hundreds of automotive plant managers.',
    vision: 'To be the benchmark center for automotive skill development, green mobility, and vehicle design in Western Maharashtra.',
    mission: [
      'Deliver industry-validated hands-on vehicle diagnosis and assembly training.',
      'Promote research in electric vehicles, hybrid powertrains, and emission reduction.',
      'Train service advisors, technical supervisors, and entrepreneurs for the automotive sector.'
    ],
    keyFeatures: [
      'MSBTE Nodal Institute for Automobile Curriculum & Resource Person Training',
      'Campus Fleet: 2 Working Cars, 1 Jeep, Multiple 2-Wheelers & Cut-Section Engines',
      'Specialized Electric Vehicle (EV) Diagnostic & Battery Testing Bench',
      'Unmatched record of 125+ Alumni serving as Govt. RTO Inspectors'
    ],
    labs: [
      {
        name: 'Automotive Engine Testing & Overhaul Lab',
        description: 'Multi-cylinder petrol and diesel engines with dynamometer testing and fuel injection rigs.',
        equipment: ['CRDI Multi-Cylinder Engine Testbed', 'Computerized Wheel Balancer', 'Exhaust Gas 5-Gas Analyzer', 'Diesel Smoke Meter']
      },
      {
        name: 'Auto Chassis, Transmission & Electrical Lab',
        description: 'Cut-section vehicle chassis, synchromesh gearboxes, differential units, and steering rigs.',
        equipment: ['Working Tata & Maruti Chassis Models', 'ABS Braking Simulator', 'Automotive Wiring Simulator', 'Air Conditioning Rig']
      },
      {
        name: 'Vehicle Maintenance & Body Repair Workshop',
        description: 'Hydraulic vehicle lifts, pneumatic tools, paint booth, and computerized wheel aligner.',
        equipment: ['Two-Post Hydraulic Car Lift', 'Tyre Changer Machine', 'Pneumatic Impact Wrenches', 'Spot Welding Station']
      }
    ],
    studentProjects: [
      {
        title: 'Battery-Operated Smart Wheelchair with Reverse Locking',
        description: 'Pneumatically locked incline safety wheelchair with dual regenerative braking.',
        award: 'State Level MSBTE Project Winner'
      },
      {
        title: 'Electropneumatic Automated Gear Shifting Mechanism',
        description: 'Electronic paddle-shift retrofitting kit for standard manual transmission gearboxes.',
        award: 'DIPEX Regional Showcase'
      },
      {
        title: 'Eco-Friendly Water Injection in 4-Stroke IC Engine',
        description: 'Custom water-methanol vapor injection lowering NOx emissions by 28% and boosting mileage.',
        award: 'ISTE Best Project Award'
      }
    ],
    facultyCount: 12,
    placements: ['Mercedes-Benz India', 'Tata Motors', 'Mahindra & Mahindra', 'Royal Enfield', 'Apollo Tyres', 'Kirloskar Oil Engines', 'Ghatge Patil Industries']
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'Civil',
    level: 'B.Tech & Diploma',
    tagline: 'Building The Sustainable Future & Infrastructure',
    intake: { btech: 60, diploma: 60 },
    duration: '4 Years (B.Tech) / 3 Years (Diploma)',
    eligibility: '12th PCM / 10th for Diploma / ITI Civil Draughtsman',
    hod: {
      name: 'Prof. S. B. Yadav',
      designation: 'Head of Department',
      qualification: 'M.E. Structural Engineering',
      phone: '+91 9960686868',
      email: 'civil.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      message: 'Civil engineering shapes civilizations. We empower our students with Total Station survey equipment, CAD/BIM tools, concrete testing, and geotechnical labs to build resilient infrastructure.'
    },
    overview: 'From monumental bridge models to real-time structural analysis and green building certifications, Civil Engineering at NIT prepares technocrats for massive public works, highways, and private urban projects.',
    vision: 'To produce socially committed civil engineers capable of designing sustainable, disaster-resilient infrastructure.',
    mission: [
      'Provide experiential learning in modern survey, structural design, and environmental engineering.',
      'Encourage field visits to mega dams, expressways, water treatment plants, and heritage restoration sites.',
      'Instill high standards of professional ethics and sustainable construction methodologies.'
    ],
    keyFeatures: [
      'Advanced Surveying Instruments: Digital Total Stations, Auto Levels & GPS Receivers',
      'Fully equipped Concrete Technology & Material Testing lab serving local industry consultancy',
      'Field projects: Swachh Bharat drainage mapping, Railway-track analysis & Historic temple modeling',
      'Active student chapters of Indian Concrete Institute (ICI) & Builders Association of India'
    ],
    labs: [
      {
        name: 'Advanced Surveying & Geomatics Lab',
        description: 'Precision digital theodolites, Electronic Total Stations, and GIS software.',
        equipment: ['Digital Total Stations (Leica/Topcon)', 'Auto Levels', 'Handheld DGPS Units', 'Plan Monitors']
      },
      {
        name: 'Concrete Technology & Material Testing Lab',
        description: 'Universal Testing Machine (UTM 1000 kN), compression testing, and aggregate evaluation.',
        equipment: ['1000 kN UTM Machine', 'Digital Compression Testing Machine (2000 kN)', 'Vicat Apparatus', 'Sieve Shakers']
      },
      {
        name: 'Geotechnical & Environmental Engineering Lab',
        description: 'Soil shear strength, permeability, BOD/COD analysis, and water turbidity tests.',
        equipment: ['Direct Shear Apparatus', 'Triaxial Cell', 'Standard Proctor Compaction Rig', 'Spectrophotometer']
      },
      {
        name: 'CAD & Structural Design Lab',
        description: 'AutoCAD, STAAD.Pro, ETABS, and Revit Architecture design suite.',
        equipment: ['High-Performance CAD Workstations', 'Large Format A0 Plotter', 'BIM Modelling Software']
      }
    ],
    studentProjects: [
      {
        title: 'Precision Architectural Model of Ram Mandir',
        description: 'Detailed scale structural engineering and aesthetic load-bearing analysis model.',
        award: 'NPK DigiFest Outstanding Craft Winner'
      },
      {
        title: 'Eco-Permeable Paver Blocks from Industrial Waste',
        description: 'Stormwater recharging pavement utilizing foundry slag and fly ash with 30 MPa compressive strength.',
        award: 'State Environment Project Recognition'
      }
    ],
    facultyCount: 14,
    placements: ['IRB Infrastructure', 'Larsen & Toubro Construction', 'Shapoorji Pallonji', 'Tata Projects', 'PWD & Water Resources Dept']
  },
  {
    id: 'electrical',
    name: 'Electrical, Electronics & Power Engineering',
    shortName: 'Electrical',
    level: 'B.Tech & Diploma',
    tagline: 'Energizing Tomorrow with Clean Power & Smart Grids',
    intake: { btech: 60, diploma: 60 },
    duration: '4 Years (B.Tech) / 3 Years (Diploma)',
    eligibility: '12th PCM / 10th for Diploma / ITI Electrician',
    hod: {
      name: 'Prof. B. B. Rajigare',
      designation: 'Head of Department',
      qualification: 'M.E. Power Systems',
      phone: '+91 9423280246',
      email: 'electrical.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      message: 'From 400 kV extra high voltage substations to 45 kW EV fast chargers and solar microgrids, our department delivers comprehensive power and electrical systems training.'
    },
    overview: 'Equipped with on-campus solar manufacturing demonstration units, high-voltage switchgear setups, PLC automation systems, and an EV charging infrastructure, students gain mastery over conventional power and clean renewable technologies.',
    vision: 'To be a premier center of excellence in electrical power systems, industrial automation, and green energy technology.',
    mission: [
      'Provide deep theoretical and experimental training in power electronics, renewable grids, and drives.',
      'Partner with power utilities (MSEDCL, MAHAGENCO, Tata Power) for hands-on field internships.',
      'Foster innovations in smart energy meters, microgrids, and electric vehicle charging infrastructure.'
    ],
    keyFeatures: [
      'On-Campus 45 kW EV Fast Charging Test Station & 100 kW Rooftop Solar PV System',
      'Regular industrial visits to 400 kV Substations, Adani Dahanu Thermal Plant & MAHAGENCO Hydro Plants',
      'Partnership with L&T Switchgear Training Centre, Pune for certified industrial automation modules',
      'Specialized labs for PLC, SCADA, Power Quality, and Electrical Machines'
    ],
    labs: [
      {
        name: 'Electrical Machines & Drives Lab',
        description: 'AC/DC motors, alternators, transformers, and variable frequency drive controllers.',
        equipment: ['Coupled DC-AC Motor Generator Sets', '3-Phase Induction Motors', 'Synchronous Alternator Panel', 'VFD Drives']
      },
      {
        name: 'Power Systems & High Voltage Switchgear Lab',
        description: 'Transmission line simulators, protective relays (numerical and electromechanical), and circuit breakers.',
        equipment: ['Microcontroller Numerical Relay Test Bench', 'Air & Vacuum Circuit Breaker Panels', 'Insulation Megger Sets']
      },
      {
        name: 'Industrial Automation, PLC & SCADA Lab',
        description: 'Siemens and Allen-Bradley PLCs, HMI touchscreen panels, and pneumatic actuators.',
        equipment: ['Siemens S7-1200 PLC Trainers', 'SCADA Supervisory Workstations', 'Sensor Interfacing Kits']
      },
      {
        name: 'Solar & Renewable Energy Lab',
        description: 'Solar PV irradiance testers, MPPT charge controllers, grid-tie inverters, and battery banks.',
        equipment: ['Solar PV Cell Characterization Bench', 'Pure Sine Wave Inverters', 'Power Quality Analyzers']
      }
    ],
    studentProjects: [
      {
        title: 'IoT-Enabled Smart Transformer Health Monitor',
        description: 'Wireless oil temperature, load current, and moisture telemetry system with alert SMS gateway.',
        award: 'MSEDCL Innovation Recognition'
      },
      {
        title: 'Hybrid Solar-Wind EV Fast Charging Hub',
        description: 'Grid-isolated 5 kW dual-source battery charging station with dynamic load balancing.',
        award: 'Technofest 2nd Prize'
      }
    ],
    facultyCount: 13,
    placements: ['Polycab India', 'Siemens', 'Tata Power', 'L&T Electrical & Automation', 'Finolex Cables', 'MSEDCL', 'ABB India']
  },
  {
    id: 'mechanical',
    name: 'Mechanical & Mechatronics Engineering (Additive Mfg)',
    shortName: 'Mechanical',
    level: 'B.Tech & Diploma',
    tagline: 'Shape The Future with Smart Robotics & 3D Manufacturing',
    intake: { btech: 60, diploma: 60 },
    duration: '4 Years (B.Tech) / 3 Years (Diploma)',
    eligibility: '12th PCM / 10th for Diploma / ITI Machinist/Fitter',
    hod: {
      name: 'Prof. S. S. Patil',
      designation: 'Head of Department',
      qualification: 'M.E. Mechanical (Design Engineering)',
      phone: '+91 9370980099',
      email: 'mech.hod@nitkolhapur.edu.in',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      message: 'Mechanical engineering is evolving with Mechatronics, 3D Additive Manufacturing, and Robotics. We empower students with CNC machining, fluid power automation, and CAD/CAM simulation.'
    },
    overview: 'Kolhapur is one of India’s premier foundry and manufacturing hubs. NIT Mechanical Engineering leverages this rich ecosystem, offering specialized training in Additive Manufacturing (3D Printing), CNC machining, Industrial Robotics, and Thermal Engineering.',
    vision: 'To develop visionary mechanical and mechatronics engineers leading Industry 4.0 and advanced manufacturing.',
    mission: [
      'Deliver world-class training in CNC machining, additive 3D manufacturing, and thermal dynamics.',
      'Bridge academia and Kolhapur foundry/automotive industries through continuous joint problem-solving.',
      'Promote sustainable energy design and green manufacturing practices.'
    ],
    keyFeatures: [
      'Industrial CNC Lathe & Milling Machines with Fanuc/Siemens Controllers',
      'Advanced 3D Printing & Additive Manufacturing Rapid Prototyping Center',
      'Heavy Central Workshop: Foundry, Pattern Making, Welding, Fitting, and Machine Shop',
      'Close tie-ups with Menon Pistons, Kirloskar, Zanwar Group, and Ghatge Patil Industries'
    ],
    labs: [
      {
        name: 'CNC & Additive Manufacturing Center',
        description: 'Production-grade CNC Turning Center, CNC Milling, and FDM/SLA 3D Printers.',
        equipment: ['Production CNC Lathe (Fanuc)', 'Industrial 3D Printers (Creality/Ultimaker)', 'MasterCAM & SolidWorks']
      },
      {
        name: 'Fluid Power, Pneumatics & Robotics Lab',
        description: 'Electro-hydraulic and electro-pneumatic training benches with PLC control and 6-DOF robotic arms.',
        equipment: ['Festo Pneumatic Trainer Kits', 'Hydraulic Power Pack Unit', '6-Axis Industrial Robotic Arm']
      },
      {
        name: 'Thermal Engineering & Heat Transfer Lab',
        description: 'Boiler setups, steam turbines, heat exchangers, and refrigeration test rigs.',
        equipment: ['Two-Stage Air Compressor Test Rig', 'Vapour Compression Refrigeration Rig', 'Heat Exchanger Apparatus']
      },
      {
        name: 'Metrology & Quality Inspection Lab',
        description: 'Surface roughness testers, optical profile projectors, coordinate measuring instruments.',
        equipment: ['Profile Projector', 'Tool Maker Microscope', 'Digital Micrometers & Vernier Gauges']
      }
    ],
    studentProjects: [
      {
        title: 'Multipurpose Agricultural Weed Remover & Soil Aerator',
        description: 'Compact petrol-driven ergonomic implement designed for local small-holding sugarcane farmers.',
        award: 'Shark Tank Kolhapur 1st Prize'
      },
      {
        title: 'Electro-Hydraulic Heavy Tractor Maintenance Fixture',
        description: 'Safe under-chassis hydraulic lift and lock cradle eliminating hazardous jack slippage.',
        award: 'State Industrial Safety Award'
      }
    ],
    facultyCount: 16,
    placements: ['Menon Pistons', 'Cummins India', 'BFW (Bharat Fritz Werner)', 'Zanwar Group', 'Kirloskar Brothers', 'Tata Motors', 'Thermax']
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'f-1',
    name: 'Prof. Deepak P. Jagtap',
    department: 'Computer Science & Engineering',
    designation: 'Associate Professor & HOD',
    qualification: 'M.Tech (E&TC), B.E. (Electronics)',
    experience: '23 Years 10 Months',
    specialization: ['Embedded Systems', 'Image Processing', 'Deep Learning', 'Generative AI', 'IoT'],
    researchAreas: ['Outcome-Based Education', 'Deep Neural Networks for Medical Imaging', 'Embedded IoT Automation'],
    phone: '+91 9423276182',
    email: 'dpjagtap@nitkolhapur.edu.in',
    publications: 18,
    patents: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-2',
    name: 'Dr. Asmita A. Desai',
    department: 'Artificial Intelligence & Machine Learning',
    designation: 'Professor & Dean R&D',
    qualification: 'Ph.D in Computer Engineering, M.Tech CSE',
    experience: '19 Years',
    specialization: ['Cybersecurity with AI/ML', 'High Performance Computing', 'Quantum Technologies', 'Data Science'],
    researchAreas: ['AI-Driven Threat Detection', 'Outcome Based Learning', 'Solar PV Energy Prediction Algorithms'],
    phone: '+91 9890123456',
    email: 'dr.asmitadesai@nitkolhapur.edu.in',
    publications: 27,
    patents: 4,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'f-3',
    name: 'Prof. Vikram Gavali',
    department: 'Artificial Intelligence & Machine Learning',
    designation: 'Assistant Professor & HOD AIML',
    qualification: 'M.Tech CSE, B.E. IT',
    experience: '12 Years',
    specialization: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Python AI'],
    researchAreas: ['Agri-Tech Deep Learning', 'Autonomous Systems', 'Edge AI'],
    phone: '+91 9657242994',
    email: 'vikram.gavali@nitkolhapur.edu.in',
    publications: 14,
    patents: 1,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-4',
    name: 'Prof. S. H. Deshmukh',
    department: 'Automobile Engineering',
    designation: 'HOD Automobile & MSBTE Resource Person',
    qualification: 'M.E. Automobile Engineering',
    experience: '22 Years',
    specialization: ['Automotive Engine Diagnostics', 'EV Powertrains', 'Chassis Engineering'],
    researchAreas: ['Hybrid Transmission Systems', 'Alternative Fuels', 'Vehicle Dynamics'],
    phone: '+91 9422423423',
    email: 'shdeshmukh@nitkolhapur.edu.in',
    publications: 11,
    patents: 2,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-5',
    name: 'Prof. S. B. Yadav',
    department: 'Civil Engineering',
    designation: 'HOD Civil Engineering',
    qualification: 'M.E. Structural Engineering',
    experience: '20 Years',
    specialization: ['Structural Analysis', 'Advanced Concrete Tech', 'Total Station Surveying'],
    researchAreas: ['Earthquake Resistant Structures', 'Fly-Ash Utilization in High-Strength Concrete'],
    phone: '+91 9960686868',
    email: 'sbyadav@nitkolhapur.edu.in',
    publications: 9,
    patents: 1,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-6',
    name: 'Prof. B. B. Rajigare',
    department: 'Electrical Engineering',
    designation: 'HOD Electrical Engineering',
    qualification: 'M.E. Power Systems',
    experience: '21 Years',
    specialization: ['Power Grid Systems', 'High Voltage Switchgear', 'Solar PV Integration'],
    researchAreas: ['Smart Microgrids', 'Power Factor Correction', 'EV Charging Infrastructure'],
    phone: '+91 9423280246',
    email: 'bbrajigare@nitkolhapur.edu.in',
    publications: 13,
    patents: 1,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-7',
    name: 'Prof. S. S. Patil',
    department: 'Mechanical Engineering',
    designation: 'HOD Mechanical & Mechatronics',
    qualification: 'M.E. Mechanical Design',
    experience: '18 Years',
    specialization: ['Additive Manufacturing', 'CNC Programming', 'Robotics & Automation'],
    researchAreas: ['3D Printing Material Optimization', 'Foundry Automation', 'Thermal Simulation'],
    phone: '+91 9370980099',
    email: 'sspatil@nitkolhapur.edu.in',
    publications: 12,
    patents: 2,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    isHod: true
  },
  {
    id: 'f-8',
    name: 'Dr. A. K. Mangore',
    department: 'Computer Science & Engineering',
    designation: 'Professor',
    qualification: 'Ph.D, M.Tech CSE',
    experience: '17 Years',
    specialization: ['Cloud Architecture', 'Distributed Systems', 'Software Engineering'],
    researchAreas: ['Cloud Security', 'Big Data Analytics'],
    phone: '+91 9822001122',
    email: 'akmangore@nitkolhapur.edu.in',
    publications: 16,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  }
];

export const RECRUITERS: Recruiter[] = [
  { name: 'Tata Motors', category: 'Automotive & Core', logoPlaceholder: 'TATA' },
  { name: 'Mercedes-Benz', category: 'Automotive Global', logoPlaceholder: 'MERCEDES' },
  { name: 'Siemens', category: 'Electrical & Automation', logoPlaceholder: 'SIEMENS' },
  { name: 'Cummins India', category: 'Heavy Power & Engines', logoPlaceholder: 'CUMMINS' },
  { name: 'TCS', category: 'Information Technology', logoPlaceholder: 'TCS' },
  { name: 'Infosys', category: 'Information Technology', logoPlaceholder: 'INFOSYS' },
  { name: 'Polycab India', category: 'Cables & Power', logoPlaceholder: 'POLYCAB' },
  { name: 'Royal Enfield', category: 'Automotive', logoPlaceholder: 'ROYAL ENFIELD' },
  { name: 'Menon Pistons', category: 'Precision Engine Parts', logoPlaceholder: 'MENON' },
  { name: 'Kirloskar Oil Engines', category: 'Engineering & Power', logoPlaceholder: 'KIRLOSKAR' },
  { name: 'Zanwar Group', category: 'Foundry & Castings', logoPlaceholder: 'ZANWAR' },
  { name: 'Ghatge Patil Industries', category: 'Industrial Engineering', logoPlaceholder: 'GPI' },
  { name: 'BFW (Bharat Fritz Werner)', category: 'CNC & Machine Tools', logoPlaceholder: 'BFW' },
  { name: 'IRB Infrastructure', category: 'Civil & Highways', logoPlaceholder: 'IRB' },
  { name: 'Larsen & Toubro', category: 'EPC & Construction', logoPlaceholder: 'L&T' },
  { name: 'Mahindra & Mahindra', category: 'Automotive & Agri', logoPlaceholder: 'MAHINDRA' }
];

export const PLACEMENT_COORDINATORS = [
  { department: 'Mechanical & Mechatronics', name: 'Prof. Kirronn Valivade', phone: '+91 9822334455' },
  { department: 'Automobile Engineering', name: 'Prof. Vaibhav Patankar', phone: '+91 9422556677' },
  { department: 'Electrical Engineering', name: 'Prof. Nitin Sawant', phone: '+91 9890667788' },
  { department: 'Electronics & Computer / CSE', name: 'Prof. Rajesh Kulkarni', phone: '+91 9881223344' },
  { department: 'Civil Engineering', name: 'Prof. Yogesh Mane', phone: '+91 9922114455' },
  { department: 'Artificial Intelligence & ML', name: 'Prof. Shamali Chavan', phone: '+91 9766443322' }
];

export const ALUMNI_TESTIMONIALS: AlumniStory[] = [
  {
    name: 'Mangesh Gurav',
    designation: 'Motor Vehicle Inspector (RTO)',
    company: 'Government of Maharashtra (Transport Dept)',
    batch: 'Alumnus',
    department: 'Automobile Engineering',
    quote: 'NIT Kolhapur provided the exact technical ground, discipline, and vehicle mechanics training that allowed me to crack the Maharashtra MPSC RTO examination with distinction. The teachers are true mentors.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Deep Vasa',
    designation: 'Managing Director & Owner',
    company: 'Rocket Engineering Corporation, Kolhapur',
    batch: 'Distinguished Alumnus',
    department: 'Mechanical Engineering',
    quote: 'The world-class workshop, precision machine tools, and hands-on approach at NIT shaped my engineering instincts. It gave me the capability to expand Rocket Engineering into an international exporter.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Aditya Patil',
    designation: 'Plant Operations Head',
    company: 'Ghatge Patil Industries Ltd',
    batch: 'Alumnus',
    department: 'Electronics & Computer Engineering',
    quote: 'From coding real-time industrial controllers in the labs to participating in project competitions, my 3 years at NIT built the strongest possible technical foundation.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Shashank Deshpande',
    designation: 'Senior Technical Lead',
    company: 'Ford India / Mobility Systems',
    batch: 'Alumnus',
    department: 'Automobile Engineering',
    quote: 'The faculty’s continuous push toward state-level project competitions gave us the confidence to solve complex automotive problems on global platforms.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
  }
];

export const BUS_ROUTES: BusRoute[] = [
  {
    routeNumber: 1,
    routeName: 'Ichalkaranji – Jaysingpur – Shiroli – NIT Campus',
    stops: ['Ichalkaranji Bus Stand', 'Thorat Chowk', 'Jaysingpur Bypass', 'Shiroli MIDC', 'Tarabai Park', 'NIT Campus'],
    startPoint: 'Ichalkaranji (07:15 AM)',
    morningTime: '07:15 AM – 08:45 AM',
    eveningTime: '05:15 PM – 06:45 PM',
    driverContact: '+91 9822100001'
  },
  {
    routeNumber: 2,
    routeName: 'Kagal – Five Star MIDC – Uchgaon – NIT Campus',
    stops: ['Kagal ST Stand', 'Five Star MIDC Gate', 'Kandgaon Phata', 'Uchgaon Shantinagar', 'Rajarampuri', 'NIT Campus'],
    startPoint: 'Kagal (07:30 AM)',
    morningTime: '07:30 AM – 08:50 AM',
    eveningTime: '05:15 PM – 06:30 PM',
    driverContact: '+91 9822100002'
  },
  {
    routeNumber: 3,
    routeName: 'Peth Vadgaon – Warnanagar – Rankala – NIT Campus',
    stops: ['Peth Vadgaon Stand', 'Warnanagar Phata', 'Vathar', 'Rankala Lake Stand', 'Shivaji Peth', 'NIT Campus'],
    startPoint: 'Peth Vadgaon (07:20 AM)',
    morningTime: '07:20 AM – 08:45 AM',
    eveningTime: '05:15 PM – 06:40 PM',
    driverContact: '+91 9822100003'
  },
  {
    routeNumber: 4,
    routeName: 'Radhanagari – Gargoti – Kalamba – NIT Campus',
    stops: ['Radhanagari', 'Gargoti ST Stand', 'Murgud Phata', 'Kalamba Ring Road', 'Mangalwar Peth', 'NIT Campus'],
    startPoint: 'Gargoti (07:10 AM)',
    morningTime: '07:10 AM – 08:55 AM',
    eveningTime: '05:15 PM – 07:00 PM',
    driverContact: '+91 9822100004'
  },
  {
    routeNumber: 5,
    routeName: 'Kolhapur City Metro Loop (CBS – Kawala Naka – Rajarampuri – Campus)',
    stops: ['Central Bus Stand (CBS)', 'Railway Station', 'Kawala Naka', 'Cyber Chowk', 'Rajarampuri', 'Mudshingi Campus'],
    startPoint: 'Central Bus Stand (08:00 AM)',
    morningTime: '08:00 AM – 08:50 AM',
    eveningTime: '05:15 PM – 06:00 PM',
    driverContact: '+91 9822100005'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Sprawling 20+ Acre Tech Campus',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    caption: 'Main Academic Quadrangle and lush green corridors in Shantinagar, Mudshingi, Kolhapur.'
  },
  {
    id: 'g-2',
    title: 'AI & GPU Supercomputing Laboratory',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    caption: 'Students training deep learning networks in the Center of Excellence for AI.'
  },
  {
    id: 'g-3',
    title: 'Automotive Engine & Vehicle Testing Rig',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    caption: 'Cut-section vehicle chassis and dynamometer test station in the Automobile Department.'
  },
  {
    id: 'g-4',
    title: 'Central Library & 150-Seat Reading Hall',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    caption: 'Over 36,930+ volumes, IEEE/DELNET digital journals, and reference study spaces.'
  },
  {
    id: 'g-5',
    title: 'MSBTE Regional Project Competition',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    caption: 'NIT students presenting state-winning electric wheelchair and agro-harvester projects.'
  },
  {
    id: 'g-6',
    title: 'Annual Sports & Interzonal Champions',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    caption: 'Celebrating 10 consecutive years of Interzonal Championship in cricket and athletics.'
  },
  {
    id: 'g-7',
    title: 'Industrial Visit to 400 kV Thermal Substation',
    category: 'Industry Visits',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    caption: 'Electrical Engineering students interacting with senior power engineers at MAHAGENCO.'
  },
  {
    id: 'g-8',
    title: 'DIPEX State Innovation Award Ceremony',
    category: 'Achievements',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    caption: 'NITians receiving 1st prize from Honorable Higher & Technical Education dignitaries.'
  }
];

export const MANDATORY_DOCS: MandatoryDoc[] = [
  {
    title: 'AICTE Mandatory Disclosure (Extension of Approval 2026–27)',
    category: 'Regulatory',
    docCode: 'AICTE-MD-2026-6402',
    description: 'Complete institutional disclosure, sanctioned intakes, faculty bio-data, and infrastructure area details.'
  },
  {
    title: 'DTE Maharashtra Approval & Verification Status',
    category: 'State Govt',
    docCode: 'DTE-6402-APPROVAL',
    description: 'Directorate of Technical Education institution affiliation and CAP seat matrix confirmation.'
  },
  {
    title: 'DBATU & MSBTE Affiliation Certificates',
    category: 'University & Board',
    docCode: 'MSBTE-0047-DBATU-EN6402',
    description: 'Formal academic affiliation letters for B.Tech degree and Diploma polytechnic branches.'
  },
  {
    title: 'National Board of Accreditation (NBA) SAR Summary',
    category: 'Accreditation',
    docCode: 'NBA-ACCREDITATION-SAR',
    description: 'Self-Assessment Report, PEO, PO, Course Outcomes, and Continuous Improvement documentation.'
  },
  {
    title: 'Institution Innovation Council (IIC - MHRD) Certificate',
    category: 'Innovation',
    docCode: 'MHRD-IIC-NITKLP',
    description: 'Ministry of Education Innovation Cell Star Rating and Startup incubation activities report.'
  },
  {
    title: 'Anti-Ragging Committee & Internal Complaints Committee (ICC)',
    category: 'Student Safety',
    docCode: 'NIT-SAFETY-COMMITTEES',
    description: 'Statutory cells, contact numbers, grievance redressal portal, and zero-tolerance policy.'
  },
  {
    title: 'Fee Regulating Authority (FRA) Approved Fee Structure',
    category: 'Finance',
    docCode: 'FRA-FEE-2026-27',
    description: 'Government approved tuition and development fees along with EBC/OBC/SC/ST reimbursement rules.'
  },
  {
    title: 'Citizen Charter & Right to Information (RTI) Officers',
    category: 'Governance',
    docCode: 'NIT-RTI-CHARTER-2026',
    description: 'Designated Public Information Officer (PIO) and Appellate Authority contact details.'
  }
];

export const ADMISSION_CONTACTS = [
  { role: 'General Admission Incharge', name: 'Prof. Rohan Desai', phone: '+91 9890180983' },
  { role: 'Automobile Engineering', name: 'Prof. Dalavi Sanjay', phone: '+91 9970757770' },
  { role: 'Mechanical Engineering', name: 'Prof. Rahul Patil', phone: '+91 9011461876' },
  { role: 'Mechanical Engineering (Co-Incharge)', name: 'Prof. Yuraj Gajegeshvar', phone: '+91 9890833463' },
  { role: 'Civil Engineering', name: 'Prof. Jagdish Ingavale', phone: '+91 9823430891' },
  { role: 'Electronics & Computer / CSE', name: 'Prof. Uday Saloke', phone: '+91 9881149111' },
  { role: 'Artificial Intelligence & ML', name: 'Prof. Shamali Chavan', phone: '+91 9766443322' }
];

export const ADMINISTRATIVE_CONTACTS = [
  { role: 'Principal / Director', name: 'Dr. Sanjay H. Dabhole', phone: '+91 9767199299' },
  { role: 'Registrar', name: 'Patil N. B.', phone: '+91 9423039696' },
  { role: 'Accounts & Fees Section', name: 'Vikas Alawane', phone: '+91 9970060507' },
  { role: 'Stores & Purchase', name: 'Ramesh Patil', phone: '+91 9822248703' },
  { role: 'Scholarship Section (SC/ST/OBC/EBC)', name: 'Pritim Bandsode', phone: '+91 9860857064' },
  { role: 'Scholarship Desk (Govt Portals)', name: 'Ajit Salokhe', phone: '+91 8087801271' },
  { role: 'Leaving & Transfer Certificate Desk', name: 'Amit Patil', phone: '+91 8888925756' },
  { role: 'First Year Academic Dean', name: 'Prof. M. Shinde', phone: '+91 9881590142' }
];
