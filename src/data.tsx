export const data = {
  nav: {
    title: "TanJingYi",
    items: [
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#project" },
      { name: "Contect Me", href: "#about" },
      {
        name: "CV",
        target: "_blank",
        href: "./pages/cv.html",
        icon: <i class="fa-solid fa-arrow-up-right-from-square"></i>,
      },
    ],
  },
  hero: {
    title: "Hi, I am Jing Yi",
    tagline:
      "Software Engineer and Computer Science Undergraduate in my penutilmate year based in Singapore looking for full-time opportunities Jan 2026 onward.",
  },
  workExperience: {
    title: "Work Experience",
    experiences: [
      {
        duration: "Jun 2024 - Dec 2024",
        title:
          "Software Engineering Intern • Micron Semiconductor Asia Operations Pte Ltd",
        descriptions: [
          "Developed a scalable microservice to enable event-driven communication across multiple applications, reducing latency for critical manufacturing operations.",
          "Optimised microservice performance by implementing safe, concurrent task execution, increasing throughput under load.",
          "Refined user interfaces using the company’s Angular-powered UI framework, streamlining user experience and enhancing security.",
          "Implemented automated CI/CD pipelines in Azure DevOps, streamlining build, test, and deployment processes to OpenShift, ensuring faster, more reliable releases.",
        ],
      },
      {
        duration: "Aug 2024 - Oct 2024",
        title: "AidMi • Full-Stack Software Engineer",
        descriptions: [
          "Spearheaded the end-to-end development of a full-feature prototype within 2 months, attracting investors and securing first place at the NUS Social Impact Catalyst Pitch Day.",
          "Collaborated with an AI Engineer to integrate a chatbot for collecting patient medical anecdotes, ensuring seamless data flow for accurate insights to support psychiatric assessments.",
          "Adopted an iterative development approach, delivering incremental updates and incorporating user feedback, ensuring the product met the evolving business requirements.",
        ],
      },
      {
        duration: "Sep 2021 - Feb 2022",
        title: "IT Intern • Security and Risk Solutions PTE LTD",
        descriptions: [
          "Maintenance and Development of Security Management System",
          "Led an IoT Project to develop a Surveillance System prototype utilizing Computer Vision to be integrated with the existing Management System",
          "Worked with security personnel to create communications system complying with security protocols",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    experiences: [
      {
        duration: "Aug 2022 - (Expected) Dec 2025",
        title: "Undergraduate Student • Nanyang Technological University",
        descriptions: [
          "Computer Science Degree",
          "IT Sub-Committee Member (2023)",
        ],
      },
      {
        duration: "Apr 2019 - May 2022",
        title: "Student • Singapore Polytechnic",
        descriptions: [
          "Diploma in Information Technology",
          "Specialise in Software Development",
          "Certificate of Academic Achievement 2021",
          "GPA 3.739",
        ],
      },
    ],
  },
  skills: [
    {
      description: "Programming Languages",
      items: ["C", "C#", "JavaScript", "TypeScript", "Python"],
      icon: <i class="fas fa-code"></i>,
    },
    {
      description: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"],
      icon: <i class="fas fa-desktop"></i>,
    },
    {
      description: "Backend Development",
      items: ["ASP.NET Core", "Express.js", "Flask"],
      icon: <i class="fas fa-server"></i>,
    },
    {
      description: "Database",
      items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
      icon: <i class="fas fa-database"></i>,
    },
    {
      description: "App Development",
      items: ["React Native", "Android (Java)"],
      icon: <i class="fas fa-mobile-alt"></i>,
    },
    {
      description: "Cloud and DevOps",
      items: ["Docker", "Azure DevOps", "Gitlab CI/CD"],
      icon: <i class="fas fa-cloud"></i>,
    },
  ],
  projects: [
    {
      title: "AidMi",
      description:
        "In collaboration with Team AidMi to design and develop their first prototype, an AI-chatbot that can collect medical anecdotes to enhance pre-consult information collection for psychiatrists. The project secured first place at the NUS Social Impact Catalyst Pitch Day.",
      stack: ["React", "Supabase", "Refine.dev", "Typescript"],
      thumbnail: {
        type: "image",
        thumbnailUrl: "./images/aidmi/aidmi.png",
        externalLink: "https://aidmi.ai/",
      },
    },
    {
      title: "APPA",
      description:
        "A healthcare application, developed as part of a software engineering module during my university studies, underwent a comprehensive process spanning ideation, use case specification, class diagrams, sequence diagrams, and state diagrams. To enhance the user experience, we employed Figma to create a prototype for the web application.",
      stack: ["Figma", "React", "TailwindCSS", "Next.js", "Express.js"],
      thumbnail: {
        type: "image",
        thumbnailUrl: "./images/health-dashboard.png",
        externalLink:
          "https://www.figma.com/proto/Z9hyM4A4l6N4vbcJKTQFxQ/APPA-Prototype?type=design&node-id=114-2018&t=N4nkqnPgL67PHFRa-1&scaling=min-zoom&page-id=21%3A3&starting-point-node-id=22%3A9&mode=design",
      },
    },
  ],
  about: {
    title: "Need to reach me?",
    content:
      "Hello, I am Jing Yi, a computer science undergraduate who specializes in software engineering. With almost 4 years of experience programming, I have honed my skills in creating engaging and user-friendly web applications. \n\nI am currently seeking job opportunities to further expand my knowledge of industry practices and explore new technologies. I am eager to learn from experienced professionals and refine my existing skills. If given the opportunity, I promise to bring dedication, enthusiasm, and a strong work ethic to the team. \n\nIf you are looking for a motivated programmer who is eager to learn, grow, and contribute to your organization, I would love to discuss potential opportunities with you. ",
    email: "jingyi0939@gmail.com",
    profileUrl: "./images/portfolio_picture.png",
    handles: [
      {
        platform: "GitHub",
        url: "https://github.com/JinxYi",
        icon: <i class="fab fa-github"></i>
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/tan-jing-yi-2ab7501bb/",
        icon: <i class="fab fa-linkedin"></i>
      }
    ]
  }
};
