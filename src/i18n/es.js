export const es = {
  meta: {
    title: 'David López — Ingeniero de Software',
    description:
      'Portafolio de David López López, ingeniero de software centrado en programación de sistemas, software interactivo y ciberseguridad.'
  },
  common: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    primaryNav: 'Principal',
    footerNav: 'Pie de página',
    language: 'Idioma',
    switchTo: 'Switch to English',
    builtWith: 'hecho con React y Node',
    playView: 'jugar / ver',
    source: 'código'
  },
  nav: {
    home: 'inicio',
    about: 'sobre mí',
    projects: 'proyectos',
    contact: 'contacto',
    email: 'email'
  },
  socials: {
    github: 'GitHub',
    itch: 'itch.io',
    email: 'Correo'
  },
  profile: {
    role: 'Ingeniero de Software',
    tagline:
      'Programación de sistemas, software interactivo y un interés creciente por la ciberseguridad.',
    location: 'España · Disponible en remoto',
    bio: [
      'Soy ingeniero de software formado en programación de sistemas, con experiencia en la creación de software interactivo en equipos multidisciplinares. En 42 Madrid trabajé con C y C++ en proyectos centrados en algoritmos, estructuras de datos, gestión de memoria, análisis sintáctico y programación concurrente en Linux. También he construido proyectos que integran aplicaciones con bases de datos y servicios mediante HTTP y Docker.',
      'Mi experiencia profesional en el desarrollo de videojuegos ha reforzado mis habilidades de depuración, optimización, análisis de problemas y colaboración. Tras completar el Common Core de 42 Madrid, quiero orientar mi carrera hacia la ciberseguridad y seguir aprendiendo sobre protección de sistemas, monitorización, análisis de riesgos y detección de incidentes.'
    ],
    skills: [
      {
        title: 'Lenguajes',
        items: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript']
      },
      {
        title: 'Sistemas y herramientas',
        items: [
          'Linux',
          'Docker',
          'Git',
          'Programación de sistemas',
          'Shell',
          'Análisis sintáctico',
          'Depuración'
        ]
      },
      {
        title: 'Desarrollo',
        items: ['Godot', 'Unity', 'Unreal Engine', 'PostgreSQL', 'HTTP']
      },
      {
        title: 'Fundamentos',
        items: [
          'Algoritmos',
          'Estructuras de datos',
          'Gestión de memoria',
          'Concurrencia',
          'Sincronización',
          'Optimización',
          'Resolución de problemas'
        ]
      },
      {
        title: 'Enfoque profesional',
        items: [
          'Ciberseguridad',
          'Seguridad de sistemas',
          'Monitorización de servicios',
          'Análisis de riesgos',
          'Respuesta a incidentes'
        ]
      }
    ],
    experience: [
      {
        role: 'Programador de videojuegos',
        company: 'Mochuelo Games',
        period: '2024 — Actualidad',
        description:
          'Desarrollo y mantenimiento de sistemas de gameplay en Unity, resolviendo problemas técnicos y depurando funcionalidades. Colaboro en un equipo multidisciplinar compartiendo avances, coordinando tareas y trabajando hacia objetivos comunes. Analizo y optimizo el rendimiento para mejorar la estabilidad y la eficiencia del software.'
      },
      {
        role: 'Programador de videojuegos',
        company: 'Mental Gaming',
        period: 'Mar 2023 — Jul 2023',
        description:
          'Implementé mecánicas y funcionalidades para un juego diseñado para apoyar el tratamiento de niños con TEA. Refactoricé y depuré código para localizar errores y mejorar el comportamiento del proyecto.'
      },
      {
        role: 'Programador de gameplay',
        company: 'Team Chubby Cat',
        period: '2022 — 2023',
        description:
          'Desarrollé sistemas de inteligencia artificial y mecánicas de gameplay. Colaboré en la implementación y optimización de funcionalidades con Unreal Engine.'
      }
    ],
    education: [
      {
        title: '42 Madrid — Common Core',
        subtitle: 'Programación',
        period: '2023 — 2026'
      },
      {
        title: 'Grado en Diseño y Desarrollo de Videojuegos',
        subtitle: 'Universidad Rey Juan Carlos',
        period: '2019 — 2023'
      }
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' }
    ]
  },
  home: {
    status:
      'abierto a puestos de ingeniería de software con enfoque en ciberseguridad',
    viewProjects: './ver_proyectos',
    contact: './contacto',
    featuredEyebrow: 'trabajo destacado',
    featuredTitle: 'Proyectos seleccionados',
    allProjects: 'cd ./proyectos',
    nextEyebrow: 'siguiente paso',
    nextTitle: 'Construyamos algo juntos.',
    nextText:
      'Disponible para puestos de ingeniería de software, especialmente en ciberseguridad.',
    startConversation: './iniciar_conversacion'
  },
  about: {
    title: 'Un desarrollador que cuida los detalles.',
    quickFacts: 'Datos rápidos',
    facts: {
      role: 'rol',
      location: 'ubicación',
      email: 'email',
      languages: 'idiomas'
    },
    skillsEyebrow: 'herramientas',
    skillsTitle: 'Habilidades y tecnologías',
    experienceEyebrow: 'trayectoria',
    experienceTitle: 'Experiencia',
    educationEyebrow: 'formación',
    educationTitle: 'Formación'
  },
  projects: {
    title: 'Proyectos que he construido',
    lead:
      'Una selección de software y juegos que he construido o en los que he participado. Cada uno me enseñó algo nuevo.',
    filterByType: 'Filtrar proyectos por tipo',
    filterByTag: 'Filtrar proyectos por etiqueta',
    categories: {
      all: 'todos',
      software: 'software',
      game: 'juegos'
    },
    empty: 'Todavía no hay proyectos que coincidan con ese filtro.',
    items: {
      'ft-transcendence': {
        title: 'ft_transcendence',
        description:
          'Proyecto final en 42 Madrid: un juego de cartas colaborativo basado en el Chinchón. Integró Godot con PostgreSQL y peticiones HTTP, con los servicios y el entorno de ejecución conectados y gestionados mediante Docker.',
        tags: ['Godot', 'PostgreSQL', 'HTTP', 'Docker']
      },
      minishell: {
        title: 'Minishell',
        description:
          'Una shell tipo Unix construida en C, que abarca análisis sintáctico, gestión de memoria y comportamiento de procesos.',
        tags: ['C', 'Shell', 'Parseo', 'Procesos']
      },
      'dining-philosophers': {
        title: 'Filósofos comensales',
        description:
          'Un ejercicio de concurrencia en C usando hilos y sincronización de recursos.',
        tags: ['C', 'Hilos', 'Concurrencia', 'Sincronización']
      },
      'sorting-algorithm': {
        title: 'Proyecto de algoritmos de ordenación',
        description:
          'Implementación y optimización de algoritmos de ordenación, prestando atención a la complejidad y la eficiencia.',
        tags: ['C', 'Algoritmos', 'Ordenación', 'Optimización']
      },
      'petricor-en-la-bahia': {
        title: 'Petricor en la Bahía',
        description:
          'Patrulla las aguas alrededor de Bahía Petricor con tu pequeña barca y ayuda a sus habitantes en este juego incremental.',
        tags: ['Game Jam', 'Aventura']
      },
      'ready-steadicam': {
        title: 'Ready, Steadicam!',
        description:
          'Acompaña a Labuho en un viaje en autobús multijugador por Madrid e intenta hacer las mejores fotos.',
        tags: ['Game Jam', 'Rol']
      },
      'nasa-space-apps-challenge': {
        title: 'NASA Space Apps Challenge',
        description:
          'Un proyecto para navegador creado para el NASA Space Apps Challenge.',
        tags: ['Hackathon']
      },
      diescend: {
        title: 'Diescend',
        description:
          'Desciende por la torre apostando en batallas de dados mientras derrotas a los miembros de tu antigua banda de la mafia.',
        tags: ['Game Jam', 'Estrategia']
      },
      'tiny-broom-vroom': {
        title: 'Tiny Broom Vroom!',
        description: 'Cuando limpiar se convierte en un juego.',
        tags: ['Game Jam', 'Puzle']
      },
      serpentina: {
        title: 'Serpentina',
        description:
          'Ayuda a Serpentina, la gata, a robar la sardina sin ser detectada en este juego de sigilo.',
        tags: ['Game Jam', 'Aventura']
      },
      duskhunter: {
        title: 'Duskhunter',
        description: 'Un roguelike construido en torno al uso del color.',
        tags: ['Game Jam', 'Acción']
      },
      'san-aisidro': {
        title: 'San A.I.sidro',
        description: 'Elige el Madrid que quieres.',
        tags: ['Game Jam', 'Novela visual']
      },
      echameuncable: {
        title: 'ÉchameUnCable',
        description: 'Localiza puertos y desenreda historias. Sintoniza con nosotros.',
        tags: ['Game Jam', 'Puzle']
      },
      'donde-esta-mi-vida': {
        title: '¿Dónde está mi vida?',
        description:
          'Un juego narrativo e inmersivo que te hace reflexionar sobre la salud y el bienestar digital en el mundo en el que vivimos.',
        tags: ['Game Jam', 'Educativo']
      },
      'chess-holywar': {
        title: 'Chess: HolyWar',
        description: 'Un juego de estrategia basado en el ajedrez.',
        tags: ['Estrategia']
      }
    }
  },
  contact: {
    title: 'Hablemos.',
    lead:
      '¿Tienes un proyecto en mente o simplemente quieres saludar? Envíame un mensaje y te responderé en un día o dos.',
    labels: {
      email: 'email',
      location: 'ubicación',
      name: 'nombre',
      message: 'mensaje',
      company: 'Empresa'
    },
    send: 'enviar_mensaje',
    sending: 'enviando...',
    success: 'mensaje enviado correctamente',
    error: 'Algo salió mal.'
  },
  notFound: {
    title: 'Página no encontrada',
    lead: 'La página que buscas no existe o se ha movido.'
  }
}
