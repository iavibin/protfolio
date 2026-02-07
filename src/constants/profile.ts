export const profileData = {
  name: "Vibin I A",
  title: "Full-Stack Enthusiast | CGPA - ",
  tagline: "1st Year CSE Student at Loyola-ICAM College of Engineering",

  about: {
    description: "As a Computer Science Engineering student at LICET, I specialize in building end-to-end software architectures and data-driven web applications. My focus lies in developing robust back-end systems that process real-time data streams and translating them into intuitive, high-performance front-end interfaces. With a strong foundation in C++ and Python, I am dedicated to mastering full-stack development and optimizing software performance across the modern web stack.",
    goal: "To engineer robust, scalable software solutions by integrating front-end interactivity with secure back-end architectures. Focused on leveraging data-driven logic and modern full-stack frameworks to build high-performance digital systems."
  },

  skills: {
    known: [
      { name: "C++", icon: "code" },
      { name: "Python", icon: "code" },
      { name: "MySQL", icon: "database" }
    ],
    learning: [
      { name: "C", icon: "code" },
      { name: "HTML", icon: "code" },
      { name: "CSS", icon: "palette" },
      { name: "JavaScript", icon: "code" },
      { name: "MongoDB", icon: "database" },
      { name: "Git/GitHub", icon: "git-branch" }
    ]
  },

  projects: [
    {
      title: "AirGuard",
      description: "An IoT-based Air Pollution Monitoring System that provides real-time air quality data and analysis. Built with ESP32 microcontroller, MQ135 sensor for gas detection, Flask backend, and SQL database for data persistence.",
      image: "https://i.ibb.co/1tnpdbpV/airguard-project.jpg",
      tech: ["ESP32", "MQ135", "Flask", "SQL", "IoT"],
      github: "https://github.com/iavibin/airguard",
      featured: true
    }
  ],

  education: {
    institution: "Loyola-ICAM College of Engineering and Technology (LICET)",
    degree: "Bachelor of Engineering in Computer Science",
    semesters: [
      {
        number: 1,
        gpa: 7.81,
        status: "Completed",
        focus: ["Python Programming", "Calculus", "Basic Electrical and Electronics Engineering"]
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
