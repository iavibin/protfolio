export const profileData = {
  name: "Vibin I A",
  title: "Full-Stack Enthusiast | Robotics & AI Explorer",
  tagline: "1st Year CSE Student at Loyola-ICAM College of Engineering",

  about: {
    description: "As a first-year Computer Science Engineering student at Loyola-ICAM College of Engineering and Technology (LICET), I'm passionate about merging software development with robotics and artificial intelligence. I believe in learning by building and constantly pushing the boundaries of what's possible with code.",
    goal: "My ultimate goal is to create intelligent systems that bridge the gap between the digital and physical world, combining my love for software engineering with cutting-edge robotics technology."
  },

  skills: {
    known: [
      { name: "C++", icon: "code" },
      { name: "Python", icon: "code" },
      { name: "MySQL", icon: "database" }
    ],
    learning: [
      { name: "C", icon: "code" },
      { name: "HTML5", icon: "code" },
      { name: "CSS3", icon: "palette" },
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
        focus: ["Python Programming", "Calculus", "Electrical Engineering Fundamentals"]
      },
      {
        number: 2,
        gpa: null,
        status: "In Progress",
        focus: ["C Programming", "Probability and Queuing Theory", "Physics for Information Science"]
      }
    ]
  },

  contact: {
    email: "iavibin08@gmail.com",
    linkedin: "https://www.linkedin.com/in/iavibin/",
    github: "https://github.com/iavibin"
  }
};
