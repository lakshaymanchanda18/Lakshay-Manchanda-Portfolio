export const personalInfo = {
  name: "Lakshay Manchanda",
  title: "Full-Stack Engineer & AI/ML Developer",
  tagline: "Building intelligent systems at the intersection of web and AI",
  bio: "I'm a Computer Science (AI & ML) student at UPES Dehradun with a passion for building production-grade software. From cross-platform mobile apps to AI-powered civic-tech platforms, I engineer solutions that scale. Currently exploring the frontier where intelligent systems meet elegant user experiences.",
  email: "lakshaymanchanda574@gmail.com",
  phone: "+91 9306595652",
  github: "https://github.com/lakshaymanchanda18",
  linkedin: "https://www.linkedin.com/in/lakshay-manchanda-2431a3319/",
  location: "Dehradun, India",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "#00D4FF",
    items: ["C/C++", "Python", "Java", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend / Mobile",
    icon: "Monitor",
    color: "#0066FF",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#8B5CF6",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases & ORM",
    icon: "Database",
    color: "#10B981",
    items: ["MySQL", "PostgreSQL", "Prisma ORM", "Pinecone (Vector DB)", "Redis"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "#F59E0B",
    items: ["Google Gemini API", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    color: "#EC4899",
    items: ["Git", "GitHub", "Jira (Agile Kanban)", "Vercel", "Figma", "Swagger/OpenAPI"],
  },
];

export const experience = [
  {
    role: "React & React Native Developer Intern",
    company: "Frintt Studio Pvt. Ltd.",
    project: "Back&Bone",
    period: "Nov 2025 – Mar 2026",
    type: "Remote",
    description:
      "Worked on Back&Bone, a cross-platform fitness application serving Android & iOS users, within a professional product engineering team.",
    highlights: [
      "Engineered 20+ reusable UI components for Back&Bone fitness app (React Native 0.73+) maintaining design consistency across all product surfaces",
      "Integrated RESTful APIs for real-time workout and activity tracking with Context API state management, eliminating unnecessary re-renders",
      "Contributed concurrently to production React web platform alongside mobile development",
    ],
    tech: ["React Native", "React", "TypeScript", "Context API", "REST APIs"],
    color: "#00D4FF",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ultimate CS Career Architect",
    description:
      "A full-stack AI-powered career platform featuring a 3-layer resume audit engine with ATS scoring, specialization alignment, and content grading. Built with structured JSON generation, automatic retry logic, and comprehensive job pipeline management.",
    longDescription:
      "Built a sophisticated AI resume audit engine using Google Gemini API that evaluates resumes across three dimensions: ATS compatibility score (0–100), specialization alignment match, and content impact grade (A–F). The full-stack architecture includes Next.js API routes, Prisma ORM with PostgreSQL, NextAuth session management, and a drag-and-drop job tracker across 5 pipeline stages.",
    tech: ["Next.js", "TypeScript", "Google Gemini AI", "Prisma ORM", "PostgreSQL", "NextAuth", "Vercel"],
    github: "https://github.com/lakshaymanchanda18",
    demo: "#",
    featured: true,
    category: "fullstack",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#00D4FF",
  },
  {
    id: 2,
    title: "SaralYojna — Gov Scheme Discovery",
    description:
      "Civic-tech platform with AI-powered eligibility assessment across 500+ Indian government schemes. Features semantic similarity scoring, bilingual chatbot, and enterprise-grade security with JWT auth, 2FA, CSRF protection, and Redis caching.",
    longDescription:
      "A comprehensive civic-tech platform using Pinecone vector embeddings for semantic similarity scoring across 500+ government schemes. Features a Python ETL pipeline for data normalization, Google Gemini AI chatbot with Hindi/English support, PWA service worker, and full Swagger/OpenAPI documentation.",
    tech: ["React", "Node.js", "Express", "TypeScript", "Prisma", "Pinecone", "Google Gemini AI"],
    github: "https://github.com/lakshaymanchanda18",
    demo: "#",
    featured: true,
    category: "fullstack",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "#8B5CF6",
  },
  {
    id: 3,
    title: "Dungeon Escape: Cardbound",
    description:
      "A Java-based dungeon crawler game with custom A* pathfinding, hardware-accelerated FBO lighting via OpenGL, a 3-phase boss state machine with full deck-builder mechanics, and GLSL post-processing shaders for glassmorphism UI.",
    longDescription:
      "A 6-member Agile Kanban team project using LibGDX and LWJGL3. Features custom A* pathfinding with Manhattan heuristic, dynamic radial light falloff, JSON DTO save/load system across 3 slots, and GLSL blur shaders for UI effects. Distributed as a standalone Gradle JAR.",
    tech: ["Java", "LibGDX", "LWJGL3", "Gradle", "LDtk", "GLSL", "OpenGL"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: true,
    category: "gamedev",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "#10B981",
  },
  {
    id: 4,
    title: "TaskManager CRUD",
    description:
      "Cross-platform mobile task manager with offline-first architecture, priority tiers, time-based reminders, and encrypted AsyncStorage persistence achieving stable 60fps animations on Android 5.0+ and iOS 12.0+.",
    longDescription:
      "An offline-first React Native task management app with full CRUD operations, priority tiers, time-based reminders, and encrypted AsyncStorage persistence. Achieves stable 60fps animations via React Native Reanimated on both Android and iOS. In progress: biometric authentication via Face ID / fingerprint.",
    tech: ["React Native", "TypeScript", "Context API", "AsyncStorage", "React Native Reanimated", "React Navigation"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: false,
    category: "mobile",
    gradient: "from-orange-500/20 to-yellow-500/20",
    accentColor: "#F59E0B",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2025 — Team Lead",
    description:
      "Led a 6-member cross-functional team to build a multilingual healthcare chatbot for Odia-speaking rural communities. Competed at national level, improving telemedicine accessibility through AI-powered symptom-based interaction.",
    icon: "Trophy",
    color: "#F59E0B",
    tags: ["National Level", "Team Lead", "Healthcare AI"],
  },
  {
    title: "CGPA: 8.46/10",
    description:
      "Maintaining strong academic performance in B.Tech Computer Science (AI & ML) at UPES Dehradun while actively contributing to real-world projects and open-source.",
    icon: "GraduationCap",
    color: "#00D4FF",
    tags: ["Academic Excellence", "AI/ML", "UPES"],
  },
  {
    title: "PR Core Member — OPEN Community, UPES",
    description:
      "Active core member of the developer community at UPES, contributing to open-source initiatives and fostering technical collaboration across campus.",
    icon: "Users",
    color: "#8B5CF6",
    tags: ["Open Source", "Community", "Leadership"],
  },
  {
    title: "National Debating Competition Organizer",
    description:
      "Doc and Scoring Committee Member at PRAYUDH (Debating Club, UPES). Part of the organizing committee for national-level debate competitions.",
    icon: "Mic2",
    color: "#10B981",
    tags: ["Leadership", "Communication", "Organization"],
  },
  {
    title: "Production-Grade Deployment Record",
    description:
      "Successfully deployed multiple full-stack applications to Vercel with real-world users, combining AI integrations, vector search, and enterprise security practices.",
    icon: "Rocket",
    color: "#EC4899",
    tags: ["Vercel", "Production", "Deployment"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science (AI & ML)",
    institution: "University of Petroleum and Energy Studies (UPES)",
    location: "Dehradun, India",
    period: "2024 – 2028",
    cgpa: "8.46 / 10",
    highlights: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core coursework: Data Structures, Algorithms, Machine Learning, DBMS",
      "Active in developer community (OPEN Community) and debate club (PRAYUDH)",
    ],
  },
  {
    degree: "Class XII (PCM + CS)",
    institution: "Senior Secondary School",
    location: "India",
    period: "2024",
    cgpa: "77%",
    highlights: [],
  },
  {
    degree: "Class X",
    institution: "Secondary School",
    location: "India",
    period: "2022",
    cgpa: "96.8%",
    highlights: [],
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
