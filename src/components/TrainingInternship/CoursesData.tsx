import React from "react";
import { CheckCircle,  Code,
  LayoutDashboard,
  Server,
  Shield,
  Image,
  Monitor,
  TrendingUp,
  GraduationCap,
  Clock,
  Award,
  Briefcase,
  BookOpen,
  UserCheck,
  Activity,
  Brain,
  BarChart3,
  Zap,
  Cpu,
  Puzzle} from "lucide-react";
import "./Courses.css";
import { DiJava, DiJavascript1, DiPython } from "react-icons/di";

export type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};
export type IncludedCourse = {
  id: string;
  title: string;
  slug: string;
};

export type Course = {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  totalFee: string;
  startFee: string;
  coursesIncluded?: IncludedCourse[];
  programStructure: string[];
  benefits: Benefit[];
  technologies?: string[];
};
export interface CourseIncluded {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  duration: string;
  totalFee: number;
  enrollFee: number;
  gradient: string;
  icon: React.ElementType;
  skills: string[];
  curriculum: string[];
  projects: string[];
  tools: string[];
  careerPaths: string[];
}

const coursesData: Record<string, Course> = {
  "core-tech-design": {
    title: "Core Tech & Design Courses",
    subtitle: "Master the fundamentals of tech and design",
    description:
      "Our Core Tech & Design program equips you with the essential skills in full stack development, cybersecurity, and UI/UX design, preparing you for real-world projects and internships.",
    duration: "3 Months",
    totalFee: "NPR 3,000",
    startFee: "NPR 1,500",
    programStructure: [
      "First Month: Complete full training with hands-on learning and mentor guidance",
      "After 1 Month: Promoted to Internship",
      "Promotion depends on skills, performance, and consistency",
      "Fast-track promotion available for exceptional performers",
    ],
     coursesIncluded: [
      { id: "full-stack", title: "Full Stack Development", slug: "full-stack" },
      { id: "frontend", title: "Frontend Development", slug: "frontend" },
      { id: "backend", title: "Backend Development", slug: "backend" },
      { id: "cybersecurity", title: "Cybersecurity", slug: "cybersecurity" },
      { id: "graphic-design", title: "Graphic Design", slug: "graphic-design" },
      { id: "ui-ux", title: "UI/UX Design", slug: "ui-ux" },
      { id: "seo", title: "SEO", slug: "seo" },
    ],
    benefits: [
      { icon: CheckCircle, title: "Experience Letter", description: "Receive an official experience letter" },
      { icon: CheckCircle, title: "Course Completion Certificate", description: "Showcase your achievement" },
      { icon: CheckCircle, title: "Internship Certificate", description: "After training and internship completion" },
      { icon: CheckCircle, title: "Udemy Course Access", description: "1 lifetime course in your domain" },
      { icon: CheckCircle, title: "Resume Support", description: "Professional guidance to strengthen your CV" },
      { icon: CheckCircle, title: "24/7 Mentor Support", description: "Get help whenever needed" },
      { icon: CheckCircle, title: "Letter of Recommendation", description: "Available if required" },
      { icon: CheckCircle, title: "Job Opportunities", description: "Direct selection if openings are available" },
      { icon: CheckCircle, title: "Internal Hackathon", description: "Participate in a hands-on coding event" },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Figma", "SEO Tools"],
  },
  "data-ai-programs": {
    title: "Data & AI Programs",
    subtitle: "Learn AI, Data Analytics, and Machine Learning",
    description:
      "Our Data & AI programs help you master artificial intelligence, machine learning, data analysis, and data science with practical projects and hands-on mentorship.",
    duration: "3 Months",
    totalFee: "NPR 8,000",
    startFee: "NPR 2,500",
    programStructure: [
      "First Month: Fundamentals of AI, Machine Learning, and Data Analytics",
      "Second Month: Hands-on projects and mentorship guidance",
      "Third Month: Internship or project-based assessment",
      "Promotion based on skill and performance",
    ],
    coursesIncluded: [
      { id: "ai", title: "Artificial Intelligence", slug: "ai" },
      { id: "ml", title: "Machine Learning", slug: "ml" },
      { id: "data-analyst", title: "Data Analyst", slug: "data-analyst" },
      { id: "data-science", title: "Data Science", slug: "data-science" },
      { id: "agentic-ai", title: "Agentic AI", slug: "agentic-ai" },
    ],
    benefits: [
      { icon: CheckCircle, title: "Experience Letter", description: "Official proof of training and internship" },
      { icon: CheckCircle, title: "Course Completion Certificate", description: "Showcase your achievement" },
      { icon: CheckCircle, title: "Internship Certificate", description: "After training and internship completion" },
      { icon: CheckCircle, title: "Udemy Course Access", description: "1 lifetime course in your domain" },
      { icon: CheckCircle, title: "Resume Support", description: "Professional guidance to strengthen your CV" },
      { icon: CheckCircle, title: "24/7 Mentor Support", description: "Get help whenever needed" },
      { icon: CheckCircle, title: "Job Opportunities", description: "Direct selection if openings are available" },
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Power BI"],
  },

  "dsa-program": {
    title: "DSA Program",
    subtitle: "Master Data Structures & Algorithms",
    description:
      "Our DSA program focuses on problem-solving, competitive programming, and interview preparation. Learn with 350+ DSA problems and coding challenges.",
    duration: "100 Days Challenge",
    totalFee: "NPR 7,000",
    startFee: "NPR 2,000",
    programStructure: [
      "Learn DSA concepts and solve 350+ problems on LeetCode, GFG, and Hackerrank",
      "Daily 100 Days Coding Challenge",
      "Hands-on guidance and mentor support",
      "Interview preparation focus and skill evaluation",
    ],
    coursesIncluded: [
      { id: "dsa-complete", title: "DSA Complete Learning", slug: "dsa-complete" },
    ],
    benefits: [
      { icon: CheckCircle, title: "Experience Letter", description: "Official proof of training and internship" },
      { icon: CheckCircle, title: "Course Completion Certificate", description: "Showcase your achievement" },
      { icon: CheckCircle, title: "Mentor Support", description: "24/7 guidance during training" },
      { icon: CheckCircle, title: "Job Opportunities", description: "Direct selection if openings exist" },
    ],
    technologies: ["C++", "Java", "Python", "Problem Solving", "DSA Techniques"],
  },

  "programming-language-courses": {
    title: "Programming Language Courses",
    subtitle: "Learn the most popular programming languages",
    description:
      "Our Programming Language Courses teach Python, C, C++, Java, and JavaScript from scratch. Perfect for beginners and developers looking to strengthen their coding foundation.",
    duration: "3 Months",
    totalFee: "NPR 6,000",
    startFee: "NPR 1,500",
    programStructure: [
      "Hands-on programming training",
      "Small projects to apply learned concepts",
      "Mentor guidance and skill evaluation",
      "Promotion to internship for high performers",
    ],
    coursesIncluded: [
      { id: "python", title: "Python", slug: "python" },
      { id: "c", title: "C", slug: "c" },
      { id: "cpp", title: "C++", slug: "cpp" },
      { id: "java", title: "Java", slug: "java" },
      { id: "javascript", title: "JavaScript", slug: "javascript" },
    ],
    benefits: [
      { icon: CheckCircle, title: "Experience Letter", description: "Official proof of training and internship" },
      { icon: CheckCircle, title: "Course Completion Certificate", description: "Showcase your achievement" },
      { icon: CheckCircle, title: "Mentor Support", description: "24/7 guidance during training" },
      { icon: CheckCircle, title: "Job Opportunities", description: "Direct selection if openings exist" },
    ],
    technologies: ["Python", "C", "C++", "Java", "JavaScript"],
  },
   
};
export const courseIncludedData: CourseIncluded[] = [
  {
    id: "full-stack",
    name: "Full Stack Development",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description:
      "Become a complete web developer mastering both frontend and backend technologies. Build production-ready applications from scratch.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: Code,
    skills: [
      "HTML5 & CSS3",
      "JavaScript & TypeScript",
      "React.js",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "REST APIs",
      "Git & GitHub",
      "Deployment",
    ],
    curriculum: [
      "Week 1-2: HTML5, CSS3, and Responsive Design",
      "Week 3-4: JavaScript Fundamentals & DOM Manipulation",
      "Week 5-6: React.js - Components, Hooks, and State Management",
      "Week 7-8: Node.js, Express.js & REST API Development",
      "Week 9-10: Database Integration (MongoDB & PostgreSQL)",
      "Week 11-12: Authentication, Deployment & Final Project",
    ],
    projects: [
      "Personal Portfolio Website",
      "E-commerce Platform",
      "Social Media Dashboard",
      "Real-time Chat Application",
    ],
    tools: ["VS Code", "Git", "Postman", "Docker", "Vercel", "Railway"],
    careerPaths: ["Full Stack Developer", "Web Developer", "Software Engineer", "Technical Lead"],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description:
      "Master the art of creating beautiful, responsive, and interactive user interfaces using modern frameworks and tools.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: LayoutDashboard,
    skills: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
      "Web Performance",
      "Accessibility",
    ],
    curriculum: [
      "Week 1-2: HTML5 Semantic Elements & CSS3 Advanced",
      "Week 3-4: JavaScript Modern Features & Async Programming",
      "Week 5-6: React.js Fundamentals & Component Architecture",
      "Week 7-8: State Management & React Hooks Deep Dive",
      "Week 9-10: Styling with Tailwind CSS & Animation Libraries",
      "Week 11-12: TypeScript Integration & Performance Optimization",
    ],
    projects: [
      "Landing Page Clone",
      "Weather Dashboard",
      "Task Management App",
      "Portfolio with Animations",
    ],
    tools: ["VS Code", "Chrome DevTools", "Figma", "npm/yarn", "Vite"],
    careerPaths: ["Frontend Developer", "UI Developer", "React Developer", "Web Designer"],
  },
  {
    id: "backend",
    name: "Backend Development",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description: "Build robust server-side applications, APIs, and learn database management with industry-standard technologies.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Python Django",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Authentication",
    ],
    curriculum: [
      "Week 1-2: Node.js Fundamentals & NPM Ecosystem",
      "Week 3-4: Express.js & RESTful API Design",
      "Week 5-6: Database Design & SQL/NoSQL",
      "Week 7-8: Authentication, Authorization & Security",
      "Week 9-10: Caching, Queues & Performance",
      "Week 11-12: Microservices & Cloud Deployment",
    ],
    projects: ["RESTful Blog API", "User Authentication System", "E-commerce Backend", "Real-time Notification Service"],
    tools: ["Node.js", "Postman", "MongoDB Compass", "pgAdmin", "Docker", "AWS"],
    careerPaths: ["Backend Developer", "API Developer", "Node.js Developer", "Software Engineer"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description: "Learn to protect systems, networks, and data from cyber threats. Master ethical hacking and security best practices.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: Shield,
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "OWASP Top 10",
      "Linux Security",
      "Cryptography",
      "Incident Response",
      "Security Auditing",
    ],
    curriculum: [
      "Week 1-2: Cybersecurity Fundamentals & Networking",
      "Week 3-4: Linux & Command Line for Security",
      "Week 5-6: Web Application Security & OWASP",
      "Week 7-8: Network Scanning & Vulnerability Assessment",
      "Week 9-10: Penetration Testing Methodologies",
      "Week 11-12: Incident Response & Security Best Practices",
    ],
    projects: [
      "Vulnerability Assessment Report",
      "Web App Penetration Test",
      "Network Security Audit",
      "Security Policy Document",
    ],
    tools: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"],
    careerPaths: ["Security Analyst", "Ethical Hacker", "Security Consultant", "SOC Analyst"],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description: "Create stunning visual content for brands, social media, and marketing. Master industry-standard design tools.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: Image,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Brand Identity",
      "Typography",
      "Color Theory",
      "Layout Design",
      "Social Media Graphics",
    ],
    curriculum: [
      "Week 1-2: Design Principles & Color Theory",
      "Week 3-4: Adobe Photoshop Mastery",
      "Week 5-6: Adobe Illustrator & Vector Graphics",
      "Week 7-8: Brand Identity & Logo Design",
      "Week 9-10: Social Media & Marketing Graphics",
      "Week 11-12: Portfolio Building & Client Projects",
    ],
    projects: [
      "Brand Identity Package",
      "Social Media Campaign",
      "Product Packaging Design",
      "Event Poster Series",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Adobe InDesign"],
    careerPaths: ["Graphic Designer", "Brand Designer", "Visual Designer", "Marketing Designer"],
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description: "Design intuitive and user-centered digital experiences. Learn research, wireframing, prototyping, and usability testing.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: Monitor,
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
      "Mobile Design",
    ],
    curriculum: [
      "Week 1-2: UX Fundamentals & User Research Methods",
      "Week 3-4: Information Architecture & User Flows",
      "Week 5-6: Wireframing & Low-Fidelity Prototypes",
      "Week 7-8: Visual Design & Figma Mastery",
      "Week 9-10: High-Fidelity Prototyping & Interactions",
      "Week 11-12: Usability Testing & Design Systems",
    ],
    projects: [
      "Mobile App Redesign",
      "E-commerce UX Audit",
      "Design System Creation",
      "Case Study Portfolio",
    ],
    tools: ["Figma", "Adobe XD", "Maze", "Hotjar", "Miro", "Notion"],
    careerPaths: ["UI Designer", "UX Designer", "Product Designer", "UX Researcher"],
  },
  {
    id: "seo",
    name: "SEO",
    category: "Core Tech & Design",
    categoryId: "core-tech",
    description: "Master search engine optimization to drive organic traffic. Learn technical SEO, content optimization, and analytics.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-tech",
    icon: TrendingUp,
    skills: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Google Analytics",
      "Search Console",
      "Content Strategy",
      "Local SEO",
    ],
    curriculum: [
      "Week 1-2: SEO Fundamentals & Search Engine Algorithms",
      "Week 3-4: Keyword Research & Competitor Analysis",
      "Week 5-6: On-Page SEO & Content Optimization",
      "Week 7-8: Technical SEO & Website Audits",
      "Week 9-10: Off-Page SEO & Link Building Strategies",
      "Week 11-12: Analytics, Reporting & Advanced Tactics",
    ],
    projects: ["Website SEO Audit", "Keyword Strategy Document", "Content Optimization Plan", "Monthly SEO Report"],
    tools: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "Screaming Frog", "Yoast"],
    careerPaths: ["SEO Specialist", "Digital Marketing Manager", "Content Strategist", "SEO Consultant"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Data & AI Programs",
    categoryId: "data-ai",
    description: "Explore the world of AI including neural networks, deep learning, and building intelligent systems that can learn and adapt.",
    duration: "3 Months",
    totalFee: 8000,
    enrollFee: 2500,
    gradient: "gradient-data",
    icon: Brain,
    skills: ["Python for AI", "Neural Networks", "Deep Learning", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Reinforcement Learning"],
    curriculum: [
      "Week 1-2: AI Fundamentals & Python Programming",
      "Week 3-4: Mathematics for AI (Linear Algebra, Calculus)",
      "Week 5-6: Neural Networks & Deep Learning Basics",
      "Week 7-8: Computer Vision with CNNs",
      "Week 9-10: Natural Language Processing",
      "Week 11-12: Advanced AI Applications & Projects"
    ],
    projects: ["Image Classification Model", "Chatbot Development", "Object Detection System", "AI-Powered Application"],
    tools: ["Python", "TensorFlow", "PyTorch", "Jupyter", "Google Colab", "Hugging Face"],
    careerPaths: ["AI Engineer", "Deep Learning Engineer", "Research Scientist", "AI Consultant"]
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "Data & AI Programs",
    categoryId: "data-ai",
    description: "Learn to build predictive models using supervised and unsupervised learning algorithms. Master the complete ML pipeline.",
    duration: "3 Months",
    totalFee: 8000,
    enrollFee: 2500,
    gradient: "gradient-data",
    icon: BarChart3,
    skills: ["Python", "Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation", "Ensemble Methods", "ML Deployment"],
    curriculum: [
      "Week 1-2: Python for ML & Data Manipulation",
      "Week 3-4: Statistics & Probability for ML",
      "Week 5-6: Supervised Learning Algorithms",
      "Week 7-8: Unsupervised Learning & Clustering",
      "Week 9-10: Feature Engineering & Model Tuning",
      "Week 11-12: Model Deployment & MLOps Basics"
    ],
    projects: ["Price Prediction Model", "Customer Segmentation", "Fraud Detection System", "Recommendation Engine"],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "MLflow", "Streamlit"],
    careerPaths: ["ML Engineer", "Data Scientist", "AI Developer", "Quantitative Analyst"]
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    category: "Data & AI Programs",
    categoryId: "data-ai",
    description: "Transform raw data into actionable insights. Master data visualization, SQL, and analytical tools used by top companies.",
    duration: "3 Months",
    totalFee: 8000,
    enrollFee: 2500,
    gradient: "gradient-data",
    icon: Activity,
    skills: ["SQL", "Excel Advanced", "Python Pandas", "Data Visualization", "Tableau", "Power BI", "Statistical Analysis", "Business Intelligence"],
    curriculum: [
      "Week 1-2: Data Analysis Fundamentals & Excel",
      "Week 3-4: SQL for Data Analysis",
      "Week 5-6: Python Pandas & Data Wrangling",
      "Week 7-8: Data Visualization with Tableau/Power BI",
      "Week 9-10: Statistical Analysis & Hypothesis Testing",
      "Week 11-12: Dashboard Creation & Reporting"
    ],
    projects: ["Sales Performance Dashboard", "Customer Analytics Report", "Marketing Campaign Analysis", "Financial Data Analysis"],
    tools: ["SQL", "Python", "Tableau", "Power BI", "Excel", "Google Data Studio"],
    careerPaths: ["Data Analyst", "Business Analyst", "BI Analyst", "Analytics Manager"]
  },
  {
    id: "data-science",
    name: "Data Science",
    category: "Data & AI Programs",
    categoryId: "data-ai",
    description: "Master the complete data science workflow from data collection to building predictive models and communicating insights.",
    duration: "3 Months",
    totalFee: 8000,
    enrollFee: 2500,
    gradient: "gradient-data",
    icon: Zap,
    skills: ["Python", "Statistics", "Machine Learning", "Data Visualization", "Big Data", "SQL", "A/B Testing", "Deep Learning Basics"],
    curriculum: [
      "Week 1-2: Python Programming & Data Structures",
      "Week 3-4: Statistics, Probability & EDA",
      "Week 5-6: Data Wrangling & Feature Engineering",
      "Week 7-8: Machine Learning Algorithms",
      "Week 9-10: Advanced ML & Model Optimization",
      "Week 11-12: Big Data Tools & Capstone Project"
    ],
    projects: ["End-to-End ML Pipeline", "Predictive Analytics Project", "NLP Text Analysis", "Time Series Forecasting"],
    tools: ["Python", "Jupyter", "Scikit-learn", "Spark", "AWS", "Tableau"],
    careerPaths: ["Data Scientist", "ML Engineer", "Research Analyst", "Chief Data Officer"]
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    category: "Data & AI Programs",
    categoryId: "data-ai",
    description: "Build autonomous AI agents that can reason, plan, and take actions. Master LLMs, RAG, and agent frameworks.",
    duration: "3 Months",
    totalFee: 8000,
    enrollFee: 2500,
    gradient: "gradient-data",
    icon: Cpu,
    skills: ["LLMs & Prompting", "LangChain", "RAG Systems", "Agent Frameworks", "Vector Databases", "API Integration", "Multi-Agent Systems", "AI Orchestration"],
    curriculum: [
      "Week 1-2: LLM Fundamentals & Prompt Engineering",
      "Week 3-4: LangChain & Agent Building Basics",
      "Week 5-6: RAG Systems & Vector Databases",
      "Week 7-8: Tool Use & Function Calling",
      "Week 9-10: Multi-Agent Systems & Orchestration",
      "Week 11-12: Production Deployment & Scaling"
    ],
    projects: ["AI Research Assistant", "Autonomous Coding Agent", "Customer Support Bot", "Multi-Agent Workflow System"],
    tools: ["Python", "LangChain", "OpenAI API", "Pinecone", "ChromaDB", "CrewAI"],
    careerPaths: ["AI Engineer", "LLM Developer", "AI Solutions Architect", "AI Product Manager"]
  },
  // DSA
  {
    id: "dsa-complete",
    name: "DSA Complete Learning",
    category: "DSA Program",
    categoryId: "dsa",
    description: "Master data structures and algorithms with 350+ coding problems. Prepare for technical interviews at top tech companies.",
    duration: "100 Days Challenge",
    totalFee: 7000,
    enrollFee: 2000,
    gradient: "gradient-dsa",
    icon: Puzzle,
    skills: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Dynamic Programming", "Sorting & Searching", "Recursion", "Bit Manipulation", "System Design Basics"],
    curriculum: [
      "Days 1-15: Arrays, Strings & Hashing",
      "Days 16-30: Linked Lists & Stacks/Queues",
      "Days 31-50: Trees, BST & Heaps",
      "Days 51-70: Graphs & Graph Algorithms",
      "Days 71-85: Dynamic Programming",
      "Days 86-100: Mock Interviews & Problem Marathon"
    ],
    projects: ["350+ LeetCode Problems", "100+ GFG Problems", "HackerRank Certifications", "Mock Interview Sessions"],
    tools: ["LeetCode", "GeeksforGeeks", "HackerRank", "Codeforces", "InterviewBit"],
    careerPaths: ["Software Engineer", "Backend Developer", "SDE at FAANG", "Competitive Programmer"]
  },
  // Programming Languages
  {
    id: "python",
    name: "Python",
    category: "Programming Languages",
    categoryId: "programming",
    description: "Learn Python from basics to advanced. One of the most versatile languages for web, data science, AI, and automation.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-lang",
    icon: DiPython,
    skills: ["Python Basics", "OOP Concepts", "File Handling", "Libraries (NumPy, Pandas)", "Web Scraping", "API Development", "Testing", "Automation"],
    curriculum: [
      "Week 1-2: Python Basics & Control Flow",
      "Week 3-4: Functions, Modules & OOP",
      "Week 5-6: File Handling & Error Management",
      "Week 7-8: Libraries (NumPy, Pandas, Matplotlib)",
      "Week 9-10: Web Scraping & API Integration",
      "Week 11-12: Automation & Project Development"
    ],
    projects: ["CLI Application", "Web Scraper", "Data Analysis Project", "Automation Bot"],
    tools: ["Python", "VS Code", "Jupyter", "pip", "PyCharm"],
    careerPaths: ["Python Developer", "Backend Developer", "Data Analyst", "Automation Engineer"]
  },
  {
    id: "c",
    name: "C Programming",
    category: "Programming Languages",
    categoryId: "programming",
    description: "Master the foundational programming language. Perfect for understanding computer architecture and low-level programming.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-lang",
    icon: Code,
    skills: ["C Basics", "Pointers", "Memory Management", "Data Structures", "File I/O", "Algorithms", "Debugging", "Embedded Basics"],
    curriculum: [
      "Week 1-2: C Fundamentals & Control Structures",
      "Week 3-4: Functions & Arrays",
      "Week 5-6: Pointers & Memory Management",
      "Week 7-8: Strings & File Handling",
      "Week 9-10: Structures & Dynamic Memory",
      "Week 11-12: Data Structures & Projects"
    ],
    projects: ["Student Management System", "File Encryption Tool", "Calculator Application", "Mini Database"],
    tools: ["GCC", "VS Code", "Code::Blocks", "Valgrind", "GDB"],
    careerPaths: ["Systems Programmer", "Embedded Developer", "Game Developer", "OS Developer"]
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming Languages",
    categoryId: "programming",
    description: "Learn C++ for high-performance applications. Essential for game development, competitive programming, and systems.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-lang",
    icon: Code,
    skills: ["C++ Basics", "OOP", "STL", "Memory Management", "Templates", "Smart Pointers", "Multithreading", "Modern C++"],
    curriculum: [
      "Week 1-2: C++ Basics & OOP Fundamentals",
      "Week 3-4: Classes, Inheritance & Polymorphism",
      "Week 5-6: STL Containers & Algorithms",
      "Week 7-8: Pointers, References & Memory",
      "Week 9-10: Templates & Exception Handling",
      "Week 11-12: Modern C++ Features & Projects"
    ],
    projects: ["Banking System", "Game Engine Basics", "File Compressor", "STL Implementation"],
    tools: ["G++", "VS Code", "Visual Studio", "CMake", "Valgrind"],
    careerPaths: ["Game Developer", "Systems Programmer", "Quant Developer", "Embedded Engineer"]
  },
  {
    id: "java",
    name: "Java",
    category: "Programming Languages",
    categoryId: "programming",
    description: "Master Java for enterprise applications, Android development, and building scalable backend systems.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-lang",
    icon: DiJava,
    skills: ["Core Java", "OOP", "Collections Framework", "Exception Handling", "Multithreading", "JDBC", "Spring Basics", "Testing"],
    curriculum: [
      "Week 1-2: Java Basics & OOP Principles",
      "Week 3-4: Classes, Interfaces & Inheritance",
      "Week 5-6: Collections & Generics",
      "Week 7-8: Exception Handling & File I/O",
      "Week 9-10: Multithreading & Concurrency",
      "Week 11-12: JDBC, Spring Intro & Projects"
    ],
    projects: ["Library Management System", "Multi-threaded Application", "REST API with Spring", "Chat Application"],
    tools: ["JDK", "IntelliJ IDEA", "Eclipse", "Maven", "JUnit"],
    careerPaths: ["Java Developer", "Android Developer", "Backend Engineer", "Enterprise Developer"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming Languages",
    categoryId: "programming",
    description: "Learn the language of the web. Build interactive websites, web apps, and server-side applications with Node.js.",
    duration: "3 Months",
    totalFee: 6000,
    enrollFee: 1500,
    gradient: "gradient-lang",
    icon: DiJavascript1,
    skills: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs", "Node.js Basics", "Testing", "Build Tools", "TypeScript Intro"],
    curriculum: [
      "Week 1-2: JavaScript Basics & Data Types",
      "Week 3-4: Functions, Scope & Closures",
      "Week 5-6: DOM Manipulation & Events",
      "Week 7-8: Async JavaScript (Promises, Async/Await)",
      "Week 9-10: APIs, Fetch & Error Handling",
      "Week 11-12: Node.js Basics & Project Development"
    ],
    projects: ["Interactive Web App", "Weather Application", "Quiz Game", "Todo App with Local Storage"],
    tools: ["VS Code", "Node.js", "npm", "Chrome DevTools", "Jest"],
    careerPaths: ["JavaScript Developer", "Web Developer", "Full Stack Developer", "Node.js Developer"]
  }
];

export const benefits = [
  { icon: GraduationCap, title: "Experience Letter", description: "Get a professional experience letter upon program completion" },
  { icon: Award, title: "Course Completion Certificate", description: "Receive a verified certificate for your learning journey" },
  { icon: Briefcase, title: "Internship Certificate", description: "Earn an internship certificate after training completion" },
  { icon: BookOpen, title: "Lifetime Udemy Course", description: "Get 1 free Udemy course in your domain forever" },
  { icon: UserCheck, title: "Resume Building Support", description: "Professional help to craft your perfect resume" },
  { icon: Clock, title: "24/7 Mentor Support", description: "Round-the-clock access to experienced mentors" },
  { icon: Activity, title: "Letter of Recommendation", description: "Get LOR if required for further opportunities" },
  { icon: TrendingUp, title: "Job Opportunities", description: "Direct selection for openings - no interview needed!" },
];

export default coursesData;

