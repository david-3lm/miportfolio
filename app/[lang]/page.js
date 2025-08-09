import Header from "../components/Header";
import ExperienceItem from "../components/ExperienceItem";
import ProjectItem from "../components/ProjectItem";
import StudyItem from "../components/StudyItem";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home({ params }) {
  const { lang } = params;

  // Datos en español
  const dataEs = {
    experiences: [
      {
        title: "Co-Funder & Game Developer",
        company: "Tizona Games",
        period: "Dic 2024 - Act.",
        description: "",
        projects: ["Desarrollo de Videojuegos"],
        technologies: [
          "Unity",
          "Inteligencia Artificial",
          "GameDev",
          "TeamWork",
          "C#",
          "Agile Develompent",
        ],
        image: "/projects_logo/LogoTizona.png",
      },
      {
        title: "Game Developer",
        company: "Mental Gaming",
        period: "Mar 2024 - Jul 2024",
        description: "",
        projects: [
          "Desarrollo de un Videojuego para ayudar con el tratamiento de niños con TEA",
        ],
        technologies: ["Unity", "C#"],
        image: "/company_logo/Mental.png",
      },
    ],
    studies: [
      {
        title: "Diseño y Desarrollo de Videojuegos",
        company: "Univesidad Rey Juan Carlos",
        period: "Sept. 2019 - Jun. 2024",
        description: "",
        projects: ["4 VideoGames", "3 Apps", "Agile Develompent"],
        technologies: [
          "Unity",
          "Unreal Engine",
          "Inteligencia Artificial",
          "GameDev",
          "TeamWork",
          "C++",
          "Java",
          "JavaScript",
          "SQL",
          "C#",
          "Agile Develompent",
        ],
        image: "/company_logo/urjc.png",
      },
      {
        title: "42 Madrid",
        company: "Fundación Telefónica",
        period: "Ene 2024 - Act.",
        description:
          "Campus de desarrollo de software en Distrito Telefónica, donde se aprende programación mediante una metodología puntera basada en el Peer-to-Peer",
        projects: ["Mi propia Shell", "Agile Develompent"],
        technologies: [
          "C",
          "C++",
          "Docker",
          "P2P",
          "Software Develompent",
          "Game Develompent",
          "Redes",
          "Teamwork",
        ],
        image: "/projects_logo/42.png",
      },
    ],
    projects: [
      {
        image: "/projects_logo/TBV.png",
        domain: "https://laucia111.itch.io/tiny-broom-vroom",
      },
      {
        image: "/social/chess.svg",
        domain: "https://chubbycat-games.itch.io/chess-holywar",
      },
      {
        image: "/projects_logo/Serpentina.jpg",
        domain: "https://portaminas.itch.io/serpentina",
      },
      {
        image: "/projects_logo/42.png",
        domain: "https://github.com/david-3lm/42_adventure",
      },
      {
        image: "/projects_logo/LogoTizona.png",
        domain: "https://linktr.ee/TizonaGames",
      },
    ],
    titles: {
      projects: "Proyectos Personales",
      intro1:
        "Mi mente inquieta me ha llevado a desarrollar innumerables proyectos por mi cuenta, desde desarrollo de videojuegos, software hasta el mismo emprendimiento de un estudio de videojuegos.",
      intro2: "Aquí puedes ver algunos de ellos:",
      experience: "Experiencia Laboral",
      studies: "Mis Estudios",
      footer: "Template base: © " + new Date().getFullYear() + " Goyo Cancio. Todos los derechos reservados.",
    },
  };

  // Datos en inglés
  const dataEn = {
    experiences: [
      {
        title: "Co-Funder & Game Developer",
        company: "Tizona Games",
        period: "Dec 2024 - Present",
        description: "",
        projects: ["Video Game Development"],
        technologies: [
          "Unity",
          "Artificial Intelligence",
          "GameDev",
          "TeamWork",
          "C#",
          "Agile Development",
        ],
        image: "/projects_logo/LogoTizona.png",
      },
      {
        title: "Game Developer",
        company: "Mental Gaming",
        period: "Mar 2024 - Jul 2024",
        description: "",
        projects: [
          "Development of a Video Game to help with the treatment of children with ASD",
        ],
        technologies: ["Unity", "C#"],
        image: "/company_logo/Mental.png",
      },
    ],
    studies: [
      {
        title: "Video Game Design and Development",
        company: "Rey Juan Carlos University",
        period: "Sept 2019 - Jun 2024",
        description: "",
        projects: ["4 VideoGames", "3 Apps", "Agile Development"],
        technologies: [
          "Unity",
          "Unreal Engine",
          "Artificial Intelligence",
          "GameDev",
          "TeamWork",
          "C++",
          "Java",
          "JavaScript",
          "SQL",
          "C#",
          "Agile Development",
        ],
        image: "/company_logo/urjc.png",
      },
      {
        title: "42 Madrid",
        company: "Fundación Telefónica",
        period: "Jan 2024 - Present",
        description:
          "Software development campus in Telefónica District, where programming is learned through a cutting-edge methodology based on Peer-to-Peer",
        projects: ["My own Shell", "Agile Development"],
        technologies: [
          "C",
          "C++",
          "Docker",
          "P2P",
          "Software Development",
          "Game Development",
          "Networks",
          "Teamwork",
        ],
        image: "/projects_logo/42.png",
      },
    ],
    projects: [
      {
        image: "/projects_logo/TBV.png",
        domain: "https://laucia111.itch.io/tiny-broom-vroom",
      },
      {
        image: "/social/chess.svg",
        domain: "https://chubbycat-games.itch.io/chess-holywar",
      },
      {
        image: "/projects_logo/Serpentina.jpg",
        domain: "https://portaminas.itch.io/serpentina",
      },
      {
        image: "/projects_logo/42.png",
        domain: "https://github.com/david-3lm/42_adventure",
      },
      {
        image: "/projects_logo/LogoTizona.png",
        domain: "https://linktr.ee/TizonaGames",
      },
    ],
    titles: {
      projects: "Personal Projects",
      intro1:
        "My restless mind has led me to develop countless projects on my own, from video game development and software to the actual entrepreneurship of a game studio.",
      intro2: "Here you can see some of them:",
      experience: "Work Experience",
      studies: "My Studies",
      footer: "Base template: © " + new Date().getFullYear() + " Goyo Cancio. All rights reserved.",
    },
  };

  const data = lang === "en" ? dataEn : dataEs;

  return (
    <div className="flex flex-col max-w-screen-md mx-auto">
	  <br/><LanguageSwitcher />
      <Header />

      {/* Projects Section */}
      <section id="projects">
        <div className="container mx-auto py-12 px-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold">{data.titles.projects}</h2>
          </div>

          <p className="text-xs md:text-base mb-2 text-justify">{data.titles.intro1}</p>
          <p className="text-xs md:text-base mb-8 text-justify">{data.titles.intro2}</p>

          {/* Projects row */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {data.projects.map((project, index) => {
              if (!project || !project.image || !project.domain) {
                return null;
              }
              return (
                <div key={index}>
                  <ProjectItem project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience">
        <div className="container mx-auto py-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold">{data.titles.experience}</h2>
          </div>

          <div className="space-y-8">
            {data.experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Study Experience Section */}
      <section id="studies">
        <div className="container mx-auto py-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold">{data.titles.studies}</h2>
          </div>

          <div className="space-y-8">
            {data.studies.map((study, index) => (
              <StudyItem key={index} study={study} />
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center text-xs md:text-sm text-gray-200">
        {data.titles.footer}
      </footer>
    </div>
  );
}
