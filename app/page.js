import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import StudyItem from "./components/StudyItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
		{
            title: "Co-Funder & Game Developer",
            company: "Tizona Games",
            period: "Dec 2024 - Act.",
            description: "",
            projects: [
                "Desarrollo de Videojuegos"
            ],
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
                "Desarrollo de un Videojuego para ayudar con el tratamiento de niños con TEA"
            ],
            technologies: ["Unity", "C#"],
            image: "/company_logo/Mental.png",
        },
    ];
	const studies = [
		{
            title: "Diseño y Desarrollo de Videojuegos",
            company: "Univesidad Rey Juan Carlos",
            period: "Sept. 2019 - Jun. 2024",
            description: "",
            projects: [
                "4 VideoGames",
				"3 Apps",
				"Agile Develompent"
            ],
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
            period: "Jan 2024 - Act.",
            description: "Campus de desarrollo de software en Distrito Telefónica, donde se aprende programación mediante una metodología puntera basada en el Peer-to-Peer",
            projects: [
                "Mi propia Shell",
				"Agile Develompent"
            ],
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
    ];

    // Sample project data
    const projects = [
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
    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />

			{/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Proyectos Personales
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2 text-justify">
                        Mi mente inquieta me ha llevado a desarrollar innumerables proyectos
						por mi cuenta, desde desarrollo de videojuegos, software hasta el mismo emprendimiento 
						de un estudio de videojuegos.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        Aquí puedes ver algunos de ellos:
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

  			{/* Study Experience Section*/}
            <section id="studies">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Mis Estudios
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {studies.map((study, index) => (
                            <StudyItem
                                key={index}
                                study={study}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-200">
                Template base: © {new Date().getFullYear()} Goyo Cancio. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
