// All your content lives here. Change the text, the components update automatically.

export const profile = {
  name: "Jyosna Vuttla",
  role: "Full-Stack Java Developer",
  tagline: "I build full-stack products!",
  intro:
    "Passionate Java Full-Stack Developer with hands-on experience in building end-to-end web applications. Skilled in core Java concepts, object-oriented design, robust backend architectures, and modern front-end integration to deliver clean, efficient code",
  email: "vuttlajyosna@gmail.com",
  links: { linkedin: "https://www.linkedin.com/in/jyosna-v-419148262/", github: "https://github.com/jyosna08", resume: "/my-resume.pdf" },
};

// "tone" picks the card colour: green | blue | amber | violet
export const stackCards = [
  { label: "Interface", tone: "green", items: ["React", "JavaScript","TypeScript","Bootstrap", "HTML5", "CSS3", "TailwindCSS"] },
  { label: "Service", tone: "blue", items: ["Java", "Spring Boot", "REST APIs", "JWT Security","Spring Data JPA"] },
  { label: "Data", tone: "amber", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { label: "Tools and Cloud", tone: "violet", items: ["Docker", "GitHub", "Git", "Postman","Prompt Engineering","AWS / Vercel"] },
];

export const training = [
  {
    org: "Student Tribe",
    period: "May 2026 - Oct 2026",
    title: "Full Stack Java Development Training",
    desc: "Gained strong technical skills and hands-on experience in Java, backend technologies, and full-stack development, including Spring Boot, REST APIs, microservices, [React] frontend, and CI/CD pipelines.",
  },
  {
    org: "TNSIF",
    period: "Aug 2025 - sep 2025",
    title: "Java and Softskills Training",
    desc: "Learned Java programming along with soft skills including communication, workplace etiquette, and interpersonal skills to be industry-ready.",
  },
];

export const education = [
  {
    school: "Kommuri Pratap Reddy Institute of Technology",
    degree: "B.Tech in Computer Science (AIML)",
    period: "2022 - 2026",
    cgpa: "7.9 / 10",
  },
];

export const projects = [
  {
    name: "Enterprise Employee Onboarding & Assets Tracker",
    year: "2024",
    status: "Completed",
    featured: true,
    tags: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "React", "Docker"],
    desc: "Designed and built scalable microservice-ready backend workflows using Java and Spring Boot. Implemented secure database isolation patterns with PostgreSQL to generate clean analytical insights. Orchestrated request handlers, cross-origin mapping security filters, and optimized layout integration pipelines alongside cloud gateways."
  },
  {
    name: "AI-Driven Technical Screening & Mock Interview System",
    year: "2024",
    status: "Completed",
    featured: true,
    tags: ["Java", "Spring Boot", "Google Gemini API", "React", "MySQL", "JWT Security", "Prompt Engineering"],
    desc: "Engineered an intelligent automated screening server framework with Java Spring Boot backend infrastructure and React clients. Integrated Google Gemini LLM API token handling pipelines to generate dynamic user interview evaluation arrays. Built a robust stateless security validation context leveraging JWT filters orchestration metrics."
  }
];


