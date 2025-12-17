export const personalInfo = {
  name: "Jonathan Lee",
  location: "Galway, Ireland",
  email: "jonathan.lee.devel@gmail.com",
  github: "https://github.com/jonathan-lee-devel",
  linkedin: "https://www.linkedin.com/in/jonathan-lee-devel/",
};

export const workExperience = [
  {
    company: "Fidelity Investments",
    location: "Galway, Ireland",
    position: "Senior Software Engineer",
    period: "Jan 2026 - Present",
    achievements: [
        "Created a shared Maven/Java library to reduced duplication of code across microservices.",
        "Introduced functionality which allows developers to debug issues by viewing the site from that person's perspective in a secure manner.",
        "Enhanced our release strategy by introducing the concept of audiences whereby user attributes can be evaluated to determine whether they have access to a feature or not."
    ],
  },
  {
    company: "Fidelity Investments",
    location: "Galway, Ireland",
    position: "Software Engineer",
    period: "Nov 2023 - December 2025",
    achievements: [
      "Developed and maintained internal company intranet / company website hub.",
      "Collaborated with teammates in implementing various features and bug fixes for the application, spanning across all 20+ microservices and Angular front-ends.",
      "Successfully implemented a rehydration orchestration pipeline using Jenkins, Maven, Docker, and Kubernetes.",
    ],
  },
  {
    company: "Mastercard",
    location: "Dublin, Ireland",
    position: "Software Engineer",
    period: "Jan 2023 - Nov 2023",
    achievements: [
      "Developed and maintained a very large Spring Boot Java application, with a focus on scalability and performance.",
      "Implemented improvements to the application such as updating the mutual TLS server-to-server communication code.",
      "Engaged in the release of software updates to the application, including the deployment of new features and bug fixes to a customer-base of 1 million monthly active users.",
    ],
  },
  {
    company: "Ericsson",
    location: "Westmeath, Ireland",
    position: "Software Engineer",
    period: "Nov 2022 - Jan 2023",
    achievements: [
      "Promoted from Graduate Software Engineer to Software Engineer in my first year at the company."
    ],
  },
  {
    company: "Ericsson",
    location: "Westmeath, Ireland",
    position: "Graduate Software Engineer",
    period: "Nov 2021 - Nov 2022",
    achievements: [
      "Developed a Node.js Express application for the internal Kubernetes-based pipeline resource-pooling system.",
      "Connected UI components to the backend API using Socket.io and REST APIs.",
      "Worked on companion applications for the pipeline resource-pooling system, including a Python 3 CLI REST client.",
    ],
  },
  {
    company: "Jaguar Land Rover",
    location: "Clare, Ireland",
    position: "Undergraduate Software Developer",
    period: "Jan 2020 - Sep 2020",
    achievements: [
      "Brought an MVP to a beta audience by developing Spring Boot Java applications that served as a REST API for Next-gen vehicle cloud platform.",
      "Developed a Python 3 OpenAPI documentation generator for the REST API, successfully generated 200+ endpoints for each vehicle signal emitted."
    ],
  },
];

export const education = [
  {
    institution: "University of Galway",
    location: "Galway, Ireland",
    degree: "Bachelor of Science (Honors) in Computer Science",
    period: "2017 - 2021",
  },
];
export const skills = {
  programmingLanguages: [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
  ],
  frontendDevelopment: [
    "Angular",
    "NgRx",
    "TailwindCSS",
  ],
  backendDevelopment: ["Spring Boot", "Node.js", "NestJS"],
  databaseAndStorage: ["PostgreSQL", "OracleSQL", "MongoDB", "Redis"],
  cloudAndDevOps: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
  toolsAndServices: [
    "Kubernetes",
    "Spinnaker",
    "Jenkins",
  ],
};

export const projects = [
  {
    title: "[EchoNexus] Web Application Feedback Platform",
    github: "https://github.com/jonathanlee-io/echonexus",
    description: [
      "(NestJS & Angular)-based web application for feedback collection and analysis.",
      "Embeddable JavaScript widget for collecting feedback from users that can be integrated into any website in seconds.",
    ],
  },
  {
    title: "[Zenigo] All-in-one Software Release Management Platform",
    github: "https://github.com/jonathanlee-io/zenigo",
    description: [
      "(NestJS & Angular)-based monorepo microservices-based application for managing and tracking software releases through feature flags.",
      "Absorbed and adapted the entirety of the EchoNexus feedback platform into the Zenigo monorepo.",
    ],
  },
  {
    title: "[RoomyLedger] Online Shared Ledger for Roommates",
    github: "https://github.com/jonathan-lee-devel/roomyledger",
    description: [
      "(NestJS & Angular)-based web application for managing and tracking shared ledger transactions between roommates.",
    ],
  },
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
