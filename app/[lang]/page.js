import Header from "../components/Header";
import ExperienceItem from "../components/ExperienceItem";
import ProjectItem from "../components/ProjectItem";
import StudyItem from "../components/StudyItem";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { experiences, projects, studies } from "@/data/portfolio";
import { translations } from "@/data/translations";
import Link from "next/link";

export default function Home({ params }) {
  const { lang } = params;

  const locale = lang === "en" ? "en" : "es";


  const t = translations[locale];
  const year = new Date().getFullYear();


	const localizedExperiences = experiences.map((experience) => ({
	  ...experience,
	  title: typeof experience.title === "object"
	    ? experience.title[locale]
	    : experience.title,
	  company: typeof experience.company === "object"
	    ? experience.company[locale]
	    : experience.company,
	  period: typeof experience.period === "object"
	    ? experience.period[locale]
	    : experience.period,
	  description: typeof experience.description === "object"
	    ? experience.description[locale]
	    : experience.description,
	  projects: Array.isArray(experience.projects)
	    ? experience.projects
	    : experience.projects[locale],
	}));

	const localizedStudies = studies.map((study) => ({
	  ...study,
	  title: typeof study.title === "object"
	    ? study.title[locale]
	    : study.title,
	  company: typeof study.company === "object"
	    ? study.company[locale]
	    : study.company,
	  period: typeof study.period === "object"
	    ? study.period[locale]
	    : study.period,
	  description: typeof study.description === "object"
	    ? study.description[locale]
	    : study.description,
	  projects: Array.isArray(study.projects)
	    ? study.projects
	    : study.projects[locale],
	}));

	return (
	  <div className="flex flex-col max-w-screen-md mx-auto">
	    <br />
	    <LanguageSwitcher />
	    <Header />
    	{/* <Link href={`/${lang}/game`}>Jugar</Link> */}
		    {/* Projects Section */}
	    <section id="projects">
	      <div className="container mx-auto py-12 px-10">
	        <div className="text-center mb-6">
	          <h2 className="text-2xl md:text-4xl font-bold">
	            {t.projects}
	          </h2>
	        </div>

	        <p className="text-xs md:text-base mb-2 text-justify">
	          {t.intro1}
	        </p>
	        <p className="text-xs md:text-base mb-8 text-justify">
	          {t.intro2}
	        </p>

	        {/* Projects row */}
	        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
	          {projects.map((project) => (
	            <div key={project.id}>
	              <ProjectItem
	                project={{
	                  ...project,
	                  domain: project.url,
	                }}
	              />
	            </div>
	          ))}
	        </div>
	      </div>
	    </section>

	    {/* Work Experience Section */}
	    <section id="experience">
	      <div className="container mx-auto py-12">
	        <div className="text-center">
	          <h2 className="text-2xl md:text-4xl font-bold">
	            {t.experience}
	          </h2>
	        </div>

	        <div className="space-y-8">
	          {localizedExperiences.map((experience) => (
	            <ExperienceItem
	              key={experience.id}
	              experience={experience}
	            />
	          ))}
	        </div>
	      </div>
	    </section>

	    {/* Study Experience Section */}
	    <section id="studies">
	      <div className="container mx-auto py-12">
	        <div className="text-center">
	          <h2 className="text-2xl md:text-4xl font-bold">
	            {t.studies}
	          </h2>
	        </div>

	        <div className="space-y-8">
	          {localizedStudies.map((study) => (
	            <StudyItem
	              key={study.id}
	              study={study}
	            />
	          ))}
	        </div>
	      </div>
	    </section>

	    <footer className="text-center text-xs md:text-sm text-gray-200">
	      {t.footer(year)}
	    </footer>
	  </div>
	);
}
