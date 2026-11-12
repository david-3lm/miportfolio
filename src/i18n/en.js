export const en = {
  meta: {
    title: 'David López — Software Engineer',
    description:
      'Portfolio of David López López, a software engineer focused on systems programming, interactive software, and cybersecurity.'
  },
  common: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    language: 'Language',
    switchTo: 'Cambiar a español',
    builtWith: 'built with React & Node',
    playView: 'play / view',
    source: 'source'
  },
  nav: {
    home: 'home',
    about: 'about',
    projects: 'projects',
    contact: 'contact',
    email: 'email'
  },
  socials: {
    github: 'GitHub',
    itch: 'itch.io',
    email: 'Email'
  },
  profile: {
    role: 'Software Engineer',
    tagline:
      'Systems programming, interactive software, and a growing focus on cybersecurity.',
    location: 'Spain · Open to remote',
    bio: [
      'I am a software engineer trained in systems programming, with experience building interactive software in multidisciplinary teams. At 42 Madrid I worked with C and C++ on projects focused on algorithms, data structures, memory management, parsing, and concurrent programming on Linux. I have also built projects integrating applications with databases and services over HTTP and Docker.',
      'My professional experience in game development has strengthened my debugging, optimization, problem analysis, and collaboration skills. After completing the 42 Madrid Common Core, I want to move my career toward cybersecurity and keep learning about system protection, monitoring, risk analysis, and incident detection.'
    ],
    skills: [
      {
        title: 'Languages',
        items: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript']
      },
      {
        title: 'Systems & tools',
        items: [
          'Linux',
          'Docker',
          'Git',
          'Systems programming',
          'Shell',
          'Parsing',
          'Debugging'
        ]
      },
      {
        title: 'Development',
        items: ['Godot', 'Unity', 'Unreal Engine', 'PostgreSQL', 'HTTP']
      },
      {
        title: 'Fundamentals',
        items: [
          'Algorithms',
          'Data structures',
          'Memory management',
          'Concurrency',
          'Synchronization',
          'Optimization',
          'Problem solving'
        ]
      },
      {
        title: 'Professional focus',
        items: [
          'Cybersecurity',
          'Systems security',
          'Service monitoring',
          'Risk analysis',
          'Incident response'
        ]
      }
    ],
    experience: [
      {
        role: 'Game Programmer',
        company: 'Mochuelo Games',
        period: '2024 — Present',
        description:
          'Develop and maintain gameplay systems in Unity, solving technical problems and debugging features. Collaborate in a multidisciplinary team, sharing progress, coordinating tasks, and working toward shared goals. Analyze and optimize performance to improve software stability and efficiency.'
      },
      {
        role: 'Game Programmer',
        company: 'Mental Gaming',
        period: 'Mar 2023 — Jul 2023',
        description:
          'Implemented mechanics and features for a game designed to support the treatment of children with ASD. Refactored and debugged code to locate errors and improve the behavior of the project.'
      },
      {
        role: 'Gameplay Programmer',
        company: 'Team Chubby Cat',
        period: '2022 — 2023',
        description:
          'Developed artificial intelligence systems and gameplay mechanics. Collaborated on implementing and optimizing features with Unreal Engine.'
      }
    ],
    education: [
      {
        title: '42 Madrid — Common Core',
        subtitle: 'Programming',
        period: '2023 — 2026'
      },
      {
        title: 'Grado en Diseño y Desarrollo de Videojuegos',
        subtitle: 'Universidad Rey Juan Carlos',
        period: '2019 — 2023'
      }
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2' }
    ]
  },
  home: {
    status: 'open to software engineering roles with a focus on cybersecurity',
    viewProjects: './view_projects',
    contact: './contact',
    featuredEyebrow: 'featured work',
    featuredTitle: 'Selected projects',
    allProjects: 'cd ./projects',
    nextEyebrow: 'next step',
    nextTitle: "Let's build something together.",
    nextText:
      'Open to software engineering roles, especially in cybersecurity.',
    startConversation: './start_conversation'
  },
  about: {
    title: 'A developer who cares about the details.',
    quickFacts: 'Quick facts',
    facts: {
      role: 'role',
      location: 'location',
      email: 'email',
      languages: 'languages'
    },
    skillsEyebrow: 'toolkit',
    skillsTitle: 'Skills & technologies',
    experienceEyebrow: 'journey',
    experienceTitle: 'Experience',
    educationEyebrow: 'education',
    educationTitle: 'Education'
  },
  projects: {
    title: "Projects I've built",
    lead:
      'A selection of software and games I have built or contributed to. Each one taught me something new.',
    filterByType: 'Filter projects by type',
    filterByTag: 'Filter projects by tag',
    categories: {
      all: 'all',
      software: 'software',
      game: 'games'
    },
    empty: 'No projects match that filter yet.',
    items: {
      'ft-transcendence': {
        title: 'ft_transcendence',
        description:
          'Final project at 42 Madrid: a collaborative card game based on Chinchón. Integrated Godot with PostgreSQL and HTTP requests, with services and the runtime environment connected and managed through Docker.',
        tags: ['Godot', 'PostgreSQL', 'HTTP', 'Docker']
      },
      minishell: {
        title: 'Minishell',
        description:
          'A Unix-like shell built in C, covering parsing, memory management, and process behavior.',
        tags: ['C', 'Shell', 'Parsing', 'Processes']
      },
      'dining-philosophers': {
        title: 'Dining Philosophers',
        description:
          'A concurrency exercise in C using threads and resource synchronization.',
        tags: ['C', 'Threads', 'Concurrency', 'Synchronization']
      },
      'sorting-algorithm': {
        title: 'Sorting Algorithm Project',
        description:
          'Implementation and optimization of sorting algorithms, with attention to complexity and efficiency.',
        tags: ['C', 'Algorithms', 'Sorting', 'Optimization']
      },
      'petricor-en-la-bahia': {
        title: 'Petricor en la Bahía',
        description:
          'Patrol the waters around Bahía Petricor with your little boat and help its inhabitants in this incremental game.',
        tags: ['Game Jam', 'Adventure']
      },
      'ready-steadicam': {
        title: 'Ready, Steadicam!',
        description:
          'Join Labuho on a multiplayer bus trip through Madrid and try to take the best photos.',
        tags: ['Game Jam', 'Role Playing']
      },
      'nasa-space-apps-challenge': {
        title: 'NASA Space Apps Challenge',
        description:
          'A browser-based project built for the NASA Space Apps Challenge.',
        tags: ['Hackathon']
      },
      diescend: {
        title: 'Diescend',
        description:
          'Descend the tower by betting on dice battles while defeating members of your old mafia gang.',
        tags: ['Game Jam', 'Strategy']
      },
      'tiny-broom-vroom': {
        title: 'Tiny Broom Vroom!',
        description: 'When cleaning becomes a game.',
        tags: ['Game Jam', 'Puzzle']
      },
      serpentina: {
        title: 'Serpentina',
        description:
          'Help Serpentina the cat steal the sardine without being detected in this stealth game.',
        tags: ['Game Jam', 'Adventure']
      },
      duskhunter: {
        title: 'Duskhunter',
        description: 'A roguelike built around the use of color.',
        tags: ['Game Jam', 'Action']
      },
      'san-aisidro': {
        title: 'San A.I.sidro',
        description: 'Choose the Madrid you want.',
        tags: ['Game Jam', 'Visual Novel']
      },
      echameuncable: {
        title: 'ÉchameUnCable',
        description: 'Locate ports and untangle stories. Tune in with us.',
        tags: ['Game Jam', 'Puzzle']
      },
      'donde-esta-mi-vida': {
        title: '¿Dónde está mi vida?',
        description:
          'A narrative and immersive game that makes you reflect on digital health and well-being in the world we live in.',
        tags: ['Game Jam', 'Educational']
      },
      'chess-holywar': {
        title: 'Chess: HolyWar',
        description: 'A strategy game based on chess.',
        tags: ['Strategy']
      }
    }
  },
  contact: {
    title: "Let's talk.",
    lead:
      "Have a project in mind or just want to say hi? Drop me a message and I'll get back to you within a day or two.",
    labels: {
      email: 'email',
      location: 'location',
      name: 'name',
      message: 'message',
      company: 'Company'
    },
    send: 'send_message',
    sending: 'sending...',
    success: 'message sent successfully',
    error: 'Something went wrong.'
  },
  notFound: {
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has moved.'
  }
}
