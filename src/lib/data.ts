export const personalInfo = {
  name: "Lakshay Manchanda",
  title: "AI/ML & Software Engineering | Data & GenAI",
  tagline: "Building intelligent systems at the intersection of web, mobile, and AI",
  bio: "I'm a Computer Science (AI & ML) student at UPES Dehradun with a strong foundation in full-stack web, Java/Spring Boot APIs, cross-platform mobile apps, and AI/ML systems. From enterprise LMS modules to civic-tech platforms and vector search engines, I engineer scalable, production-grade solutions.",
  email: "lakshaymanchanda574@gmail.com",
  phone: "+91 9306595652",
  github: "https://github.com/lakshaymanchanda18",
  linkedin: "https://www.linkedin.com/in/lakshay-manchanda-2431a3319/",
  leetcode: "https://leetcode.com/u/lakshaymanchandaa18/",
  location: "Karnal, Haryana, India",
  resumeUrl: "/Lakshay_Manchanda_Resume.pdf",
};

export const skills = [
  {
    category: "Languages & Backend",
    icon: "Server",
    color: "#00D4FF",
    items: ["Python", "Java", "SQL", "Spring Boot", "Node.js", "Express", "Next.js API Routes", "REST APIs"],
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
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Vector Databases (Pinecone)", "SQLite"],
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    color: "#EC4899",
    items: [
      "Git / GitHub",
      "GitLab CI/CD",
      "AI Coding Assistants",
      "Vercel",
      "Agile / Scrum",
      "DSA (100+ LeetCode)",
      "System Design",
      "Technical Documentation",
    ],
  },
  {
    category: "Data & AI / ML",
    icon: "Brain",
    color: "#F59E0B",
    items: [
      "Agentic AI",
      "AI Agents (Tool Calling)",
      "LLM Orchestration",
      "Google Gemini API",
      "Prompt Engineering",
      "RAG & Embeddings",
      "Deep Learning",
      "Scikit-learn",
      "Pandas & NumPy",
    ],
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
    period: "Jun 2026 – Aug 2026",
    type: "Gurugram, India (On-site)",
    description:
      "Worked full stack on NIIT's multi-tenant Enterprise LMS dashboard, program/series pages, and user profile page, building React frontend features and Java/Spring Boot backend APIs.",
    highlights: [
      "Built Java/Spring Boot REST APIs and the React front end for an enterprise LMS used by corporate workforce clients, including the multi-tenant dashboard, program/series pages and user profile.",
      "Implemented clickstream event tracking and an interactive onboarding tour, giving the product team real usage data on how new users engaged with the platform.",
      "Worked within GitLab CI/CD workflows using Git version control, pushing code through pipelines across dev, migration, testing and main branches so changes were tested before reaching main.",
      "Contributed to an AI roleplay simulation feature used for workforce skills screening; built REST APIs for the daily 'Thought of the Day' module.",
      "Built a gamified learning-journey view (streaks, milestones, progress tracking) and in-app PDF, SCORM and video viewers so learners can finish content inside the platform.",
    ],
    tech: ["React", "Java", "Spring Boot", "REST APIs", "GitLab CI/CD", "Clickstream Tracking", "AI Roleplay"],
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
      "Built a shared library of 20+ reusable UI components used across web and mobile to keep the experience consistent.",
      "Integrated REST APIs to surface real-time performance and biometric activity-tracking data in the Back&Bone web and mobile apps.",
    ],
    tech: ["React Native", "React", "TypeScript", "Context API", "REST APIs", "UI Library"],
    color: "#8B5CF6",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ultimate CS Career Architect — AI Resume Audit Engine",
    description:
      "Full-stack AI career platform featuring a supervised agentic AI planner with human approval gates, a multi-provider LLM failover router (Gemini, Groq, Mistral), and a 3-layer ATS resume audit engine.",
    longDescription:
      "Built a full-stack AI career platform with a 3-layer resume audit (ATS score 0–100, specialization alignment, bullet-level impact) on the Google Gemini API. Developed a supervised agentic AI agent for career planning: a bounded multi-turn loop (max 3 planning turns, 4 tool calls) using whitelisted tools over user-scoped Prisma/PostgreSQL data, with prompt-injection guardrails and a human approval gate before any database write. Engineered a multi-provider LLM failover router (Gemini, Groq, OpenRouter, Mistral, Cerebras) with structured JSON output, JSON repair and exponential backoff. Added LLM-based mock interviews, AI project suggestions with Mermaid architecture diagrams and a Kanban job tracker (NextAuth-secured).",
    tech: ["Next.js", "TypeScript", "Google Gemini API", "Agentic AI", "Prisma", "PostgreSQL", "NextAuth", "Mermaid", "Vercel"],
    github: "https://github.com/lakshaymanchanda18/Ultimate-CS-Career-Architect",
    demo: "https://ultimate-cs-career-architect.vercel.app",
    featured: true,
    category: "fullstack",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "#8B5CF6",
  },
  {
    id: 2,
    title: "SaralYojna — Government Scheme Discovery Platform",
    description:
      "Civic-tech platform helping users discover eligible government schemes across 500+ Indian schemes using Pinecone vector database semantic search.",
    longDescription:
      "Built a civic-tech platform that helps users discover the government schemes they are eligible for, across a dataset of 500+ Indian schemes. Implemented semantic search over the eligibility criteria of all 500+ schemes using a Pinecone vector database, replacing rigid keyword filters with meaning-based retrieval; exposed through Node.js/Express (TypeScript) APIs.",
    tech: ["React", "Node.js", "Express", "TypeScript", "Prisma", "Pinecone (Vector DB)"],
    github: "https://github.com/lakshaymanchanda18/GovScheme",
    demo: "https://gov-scheme-nine.vercel.app",
    featured: true,
    category: "fullstack",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#10B981",
  },
  {
    id: 3,
    title: "Enterprise LMS Platform Modules (Client Deployment)",
    description:
      "Enterprise LMS modules built for corporate upskilling — featuring dashboard, content catalog, daily engagement modules, and conversational AI roleplay training scenarios.",
    longDescription:
      "Built enterprise LMS modules (dashboard, content catalog, daily engagement features) used directly by client workforce staff, including LLM-based conversational AI roleplay characters built with prompt-engineering schemas. Built with Java, React, REST APIs, and JSON Serialization.",
    tech: ["Java", "React", "REST APIs", "JSON Serialization"],
    github: "https://github.com/lakshaymanchanda18",
    demo: null,
    featured: true,
    category: "fullstack",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#00D4FF",
  },
  {
    id: 4,
    title: "Dungeon Escape: Cardbound — Desktop Game",
    description:
      "Java desktop dungeon crawler with custom A* pathfinding using Manhattan heuristic and real-time GLSL fragment shaders for dynamic radial lighting.",
    longDescription:
      "Implemented A* pathfinding with a Manhattan heuristic and wall-adjacency costs to drive enemy movement (Java, LibGDX). Wrote custom GLSL fragment shaders to render dynamic radial lighting and falloff effects in real time.",
    tech: ["Java", "LibGDX", "GLSL Shaders", "LWJGL3", "Gradle"],
    github: "https://github.com/lakshaymanchanda18/DungeonEscapeCardBound",
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
    github: "https://github.com/lakshaymanchanda18/TaskManager-CRUD",
    demo: null,
    featured: false,
    category: "mobile",
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "#0066FF",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2025 — Finalist & Team Lead",
    description:
      "Internal College Finalist & Team Lead. Led a 6-member team building cross-lingual clinical conversational screening models.",
    icon: "Trophy",
    color: "#F59E0B",
    tags: ["SIH 2025", "Team Lead", "AI Screening"],
  },
  {
    title: "CGPA: 8.57 / 10",
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
      "Cricket, hackathons, DSA practice, public speaking & debate, and system design architecture.",
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
    cgpa: "8.57 / 10 (through 4th sem)",
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
