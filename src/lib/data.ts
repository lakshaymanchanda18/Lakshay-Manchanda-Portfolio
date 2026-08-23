export const personalInfo = {
  name: "Lakshay Manchanda",
  title: "Software Engineer | AI/ML & Backend Systems",
  tagline: "Building intelligent systems at the intersection of web, mobile, and AI",
  bio: "I'm a Computer Science (AI & ML) student at UPES Dehradun with a strong foundation in full-stack web, Java/Spring Boot APIs, cross-platform mobile apps, and AI/ML systems. From enterprise LMS modules to civic-tech platforms and vector search engines, I engineer scalable, production-grade solutions.",
  email: "lakshaymanchanda574@gmail.com",
  phone: "+91 9306595652",
  github: "https://github.com/lakshaymanchanda18",
  linkedin: "https://www.linkedin.com/in/lakshay-manchanda-2431a3319/",
  location: "Karnal, Haryana, India",
  resumeUrl: "/Lakshay_Manchanda_Resume.pdf",
};

export const skills = [
  {
    category: "Languages & Backend",
    icon: "Server",
    color: "#00D4FF",
    items: ["Java", "PHP/Laravel", "Node.js", "Express", "Spring Boot", "Next.js API Routes", "REST APIs"],
  },
  {
    category: "Frontend & Mobile",
    icon: "Monitor",
    color: "#0066FF",
    items: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#10B981",
    items: ["MySQL", "PostgreSQL", "Prisma ORM", "SQLite"],
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    color: "#EC4899",
    items: ["Git/GitHub", "Jira", "Figma", "Vercel", "Swagger/OpenAPI", "Agile/Scrum", "DSA (Intermediate)", "System Design", "Team Leadership", "Technical Documentation"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "#F59E0B",
    items: ["LLM Orchestration", "Prompt Engineering", "RAG", "Deep Learning", "Pinecone Vector DB", "Scikit-learn", "NumPy/Pandas/Matplotlib", "Regularization (L1/L2)"],
  },
  {
    category: "Core CS Subjects",
    icon: "Code2",
    color: "#8B5CF6",
    items: ["OOPS", "DBMS", "OS", "COA", "DCN", "DSA", "FLAT"],
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "NIIT Limited",
    project: "Enterprise LMS Platform",
    period: "Jun 2026 – Aug 7, 2026",
    type: "Gurugram, India (On-site)",
    description:
      "Worked full stack on NIIT's multi-tenant Enterprise LMS dashboard, program/series pages, and user profile page, building React frontend features and Java/Spring Boot backend APIs.",
    highlights: [
      "Worked full stack on the LMS's multi-tenant dashboard, program/series pages, and the user profile page, building both the React front end and the Java/Spring Boot APIs behind it.",
      "Designed a gamified learning journey view — streaks, milestones, and progress tracking — to make daily engagement more visual and rewarding.",
      "Built in-app viewers for PDF, SCORM, and video content so learners could go through course material without leaving the platform.",
      "Added animations across the app — transitions, streak celebrations, progress indicators — for a more polished feel.",
      "Set up clickstream event tracking and built an interactive app tour, helping new users onboard and giving the product team real usage data.",
      "Built REST APIs for the daily 'Thought of the Day' module and contributed to an AI roleplay simulation feature used for workforce skills screening.",
    ],
    tech: ["React", "Java", "Spring Boot", "REST APIs", "Animations", "Clickstream Tracking", "AI Roleplay"],
    color: "#00D4FF",
  },
  {
    role: "React & React Native Developer Intern",
    company: "Frintt Stuudio Pvt. Ltd.",
    project: "Back&Bone",
    period: "Nov 2025 – Mar 2026",
    type: "Remote",
    description:
      "Built responsive frontend panels and cross-platform screens for Back&Bone web and mobile fitness app within a professional product engineering team.",
    highlights: [
      "Built responsive frontend panels for the Back&Bone web app and the matching screens on the mobile app.",
      "Put together a shared component library of 20+ reusable UI elements to keep the web and mobile experiences visually consistent.",
      "Integrated REST APIs to surface real-time performance and biometric activity-tracking data for users.",
    ],
    tech: ["React Native", "React", "TypeScript", "Context API", "REST APIs", "UI Library"],
    color: "#8B5CF6",
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise LMS Platform Modules (Client Deployment)",
    description:
      "Enterprise LMS built from scratch for corporate upskilling — featuring dashboard, content catalog, daily engagement modules, and conversational AI roleplay training scenarios.",
    longDescription:
      "Built an enterprise Learning Management System (LMS) from scratch for corporate upskilling used directly by client workforce staff. Delivered conversational AI modules that act as customer-facing characters in immersive roleplay training scenarios, using prompt-engineering schemas. Built with Java, PHP/Laravel, React, CSS, and REST APIs.",
    tech: ["Java", "PHP/Laravel", "React", "CSS", "REST APIs", "JSON Serialization"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: true,
    category: "fullstack",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#00D4FF",
  },
  {
    id: 2,
    title: "Ultimate CS Career Architect — AI Resume Audit Engine",
    description:
      "A full-stack AI resume review engine scoring resumes against ATS criteria on a 0–100 scale. Features Prisma/PostgreSQL storage, NextAuth authentication, and Mermaid diagram logic visualization.",
    longDescription:
      "Built a 3-layer AI resume review engine that scores resumes against ATS criteria on a 0–100 scale. Used Prisma and PostgreSQL for data, NextAuth for authentication, and Mermaid diagrams to visualize the scoring logic for users.",
    tech: ["Next.js", "TypeScript", "Google Gemini API", "Prisma", "PostgreSQL", "NextAuth", "Vercel"],
    github: "https://github.com/lakshaymanchanda18",
    demo: "#",
    featured: true,
    category: "fullstack",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "#8B5CF6",
  },
  {
    id: 3,
    title: "SaralYojna — Government Scheme Discovery Platform",
    description:
      "Civic-tech platform helping users discover eligible government schemes covering 500+ Indian schemes using Pinecone vector database semantic search.",
    longDescription:
      "Built a civic-tech platform that helps users discover government schemes they're eligible for, covering 500+ Indian schemes. Used a Pinecone vector database to run semantic search over eligibility criteria instead of relying on rigid keyword filters.",
    tech: ["React", "Node.js", "Express", "TypeScript", "Prisma", "Pinecone (Vector DB)"],
    github: "https://github.com/lakshaymanchanda18",
    demo: "#",
    featured: true,
    category: "fullstack",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#10B981",
  },
  {
    id: 4,
    title: "Dungeon Escape: Cardbound — Desktop Game",
    description:
      "Java desktop dungeon crawler with custom A* pathfinding using Manhattan heuristic and real-time GLSL fragment shaders for dynamic radial lighting.",
    longDescription:
      "Implemented A* pathfinding with a Manhattan heuristic and wall-adjacency costs to drive enemy movement. Wrote custom GLSL fragment shaders to render dynamic radial lighting and falloff effects in real time.",
    tech: ["Java", "LibGDX", "LWJGL3", "GLSL Shaders", "Gradle", "LDtk Level Designer"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: true,
    category: "gamedev",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "#F59E0B",
  },
  {
    id: 5,
    title: "TaskManager — Offline-First CRUD Mobile App",
    description:
      "Cross-platform task management mobile app with offline-first storage via AsyncStorage and smooth 60fps animations using React Native Reanimated.",
    longDescription:
      "Built a cross-platform task management app with offline-first storage via AsyncStorage and smooth 60fps animations using React Native Reanimated.",
    tech: ["React Native", "TypeScript", "Context API", "React Navigation"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: false,
    category: "mobile",
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "#0066FF",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2025 — Team Lead",
    description:
      "Internal College Finalist & Team Lead. Led a 6-member team building cross-lingual clinical conversational screening models.",
    icon: "Trophy",
    color: "#F59E0B",
    tags: ["SIH 2025", "Team Lead", "AI Screening"],
  },
  {
    title: "CGPA: 8.56 / 10",
    description:
      "Maintaining strong academic standing through 4th semester in B.Tech Computer Science and Engineering (Spec. AI & ML) at UPES Dehradun.",
    icon: "GraduationCap",
    color: "#00D4FF",
    tags: ["Academic Excellence", "AI/ML", "UPES"],
  },
  {
    title: "Languages & Communication",
    description:
      "Fluent in English and Hindi. Experienced in technical documentation, public speaking, debate, and leading cross-functional developer teams.",
    icon: "Mic2",
    color: "#10B981",
    tags: ["English", "Hindi", "Public Speaking"],
  },
  {
    title: "Interests & Passions",
    description:
      "Cricket, competitive hackathons, DSA practice, public speaking & debate, and system design architecture.",
    icon: "Users",
    color: "#8B5CF6",
    tags: ["Hackathons", "DSA", "System Design", "Cricket"],
  },
  {
    title: "Production-Grade Deployment Record",
    description:
      "Successfully delivered and deployed enterprise LMS modules, mobile apps, and full-stack AI web platforms with real-world users.",
    icon: "Rocket",
    color: "#EC4899",
    tags: ["Full-Stack", "Spring Boot", "React", "AI"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering (Spec. AI & ML)",
    institution: "University of Petroleum and Energy Studies (UPES)",
    location: "Dehradun, India",
    period: "2024 – 2028",
    cgpa: "8.56 / 10 (through 4th sem)",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core CS: OOPS, DBMS, OS, COA, DCN, DSA, FLAT",
      "Class XII: 77% | Class X: 96.8%",
    ],
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "Senior Secondary School",
    location: "Karnal, Haryana, India",
    period: "2024",
    cgpa: "77%",
    highlights: ["Physics, Chemistry, Mathematics & Computer Science"],
  },
  {
    degree: "Class X (Secondary)",
    institution: "Secondary School",
    location: "Karnal, Haryana, India",
    period: "2022",
    cgpa: "96.8%",
    highlights: ["Distinction across all core academic subjects"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
