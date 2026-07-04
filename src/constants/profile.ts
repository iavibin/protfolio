export const profileData = {
  name: "Vibin I A",
  title: "Full-Stack Enthusiast | CGPA - 8.80",
  tagline: "2nd Year CSE Student at Loyola-ICAM College of Engineering",

  about: {
    description: "As a Computer Science Engineering student at LICET, I specialize in building end-to-end software architectures and data-driven web applications. My focus lies in developing robust back-end systems that process real-time data streams and translating them into intuitive, high-performance front-end interfaces. Dedicated to mastering full-stack development and optimizing software performance."
  },

  skills: {
    known: [
      { name: "C++", icon: "code" },
      { name: "Python", icon: "code" },
      { name: "MySQL", icon: "database" },
      { name: "C", icon: "code" },
      { name: "Git/GitHub", icon: "git-branch" }
    ],
    learning: [
      { name: "HTML", icon: "code" },
      { name: "CSS", icon: "palette" },
      { name: "JavaScript", icon: "code" },
      { name: "Java", icon: "code" },
      { name: "MongoDB", icon: "database" },
      
    ]
  },

  projects: [
    {
      title: "AirGuard",
      description: "Engineered a full-stack application to ingest and visualize real-time environmental telemetry. Developed a Flask-based REST API to handle asynchronous data streams, managed a relational SQL database for historical trend analysis, and built a dynamic web dashboard for data visualization.",
      image: "https://i.ibb.co/1tnpdbpV/airguard-project.jpg",
      tech: ["Python", "Flask", "MySQL", "Chart.js"],
      icons: ["python", "flask", "database", "chart"],
      github: "https://github.com/iavibin/airguard",
      featured: true
    },

    {
      title: "Sentinel APK",
      description: "Developed an automated mobile security app that intercepts and analyzes Android APKs before installation. It uses a proactive background daemon with the Android FileObserver API for 24/7 directory monitoring. A high-speed, asynchronous Python FastAPI engine ingests the binaries, running a static analysis pipeline via Androguard to deconstruct manifests and detect malicious permission clusters. Finally, a modern Kotlin and Jetpack Compose dashboard translates this complex risk data into an actionable safety matrix.",
      image: "https://i.ibb.co/Xxv0xtLk/UI.jpg",
      tech: ["Kotlin", "Jetpack Compose", "FastAPI", "Androguard"],
      icons: ["python", "flask", "database", "chart"],
      github: "https://github.com/iavibin/sentinel-apk",
      featured: true
    }
  ],

  education: {
    institution: "Loyola-ICAM College of Engineering and Technology (LICET)",
    degree: "Bachelor of Engineering in Computer Science",
    semesters: [
      {
        number: 1,
        gpa: 8.1,
        status: "Completed",
        focus: ["Python Programming", "Calculus for Engineers", "Basic Electrical and Electronics Engineering"]
      },
      {
        number: 2,
        gpa: null,
        status: "In Progress",
        focus: ["C Programming", "Probability and Queuing Theory", "Engineering Graphics"]
      }
    ]
  },

  contact: {
    email: "iavibin08@gmail.com",
    linkedin: "https://www.linkedin.com/in/iavibin/",
    github: "https://github.com/iavibin"
  }
};
