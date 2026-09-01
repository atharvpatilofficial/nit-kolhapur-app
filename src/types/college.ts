export interface Department {
  id: string;
  name: string;
  shortName: string;
  level: 'B.Tech & Diploma' | 'B.Tech' | 'Diploma';
  tagline: string;
  established?: number;
  intake: {
    btech?: number;
    diploma?: number;
  };
  duration: string;
  eligibility: string;
  hod: {
    name: string;
    designation: string;
    qualification: string;
    phone: string;
    email: string;
    photo: string;
    message: string;
  };
  overview: string;
  vision: string;
  mission: string[];
  keyFeatures: string[];
  labs: {
    name: string;
    description: string;
    equipment: string[];
  }[];
  studentProjects: {
    title: string;
    description: string;
    award?: string;
  }[];
  facultyCount: number;
  placements: string[];
  newsletterTitle?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string[];
  researchAreas?: string[];
  phone?: string;
  email?: string;
  publications?: number;
  patents?: number;
  image: string;
  isHod?: boolean;
}

export interface Recruiter {
  name: string;
  category: string;
  logoPlaceholder: string;
}

export interface AlumniStory {
  name: string;
  designation: string;
  company: string;
  batch: string;
  department: string;
  quote: string;
  image: string;
}

export interface BusRoute {
  routeNumber: number;
  routeName: string;
  stops: string[];
  startPoint: string;
  morningTime: string;
  eveningTime: string;
  driverContact: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Academics' | 'Recruitment' | 'Events' | 'Exam';
  isNew?: boolean;
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Events' | 'Sports' | 'Projects' | 'Industry Visits' | 'Achievements';
  imageUrl: string;
  caption: string;
}

export interface SisterInstitution {
  name: string;
  established: number | string;
  courses: string;
  highlights: string;
}

export interface MandatoryDoc {
  title: string;
  category: string;
  docCode: string;
  description: string;
}
