import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import Prompt from '../components/Prompt.jsx'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="terminal hero__terminal">
            <div className="terminal__bar">
              <span className="terminal__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="terminal__title">
                {profile.handle}@portfolio: ~/home
              </span>
            </div>

            <div className="terminal__body">
              <Prompt command="whoami" />
              <h1 className="hero__title">
                {profile.name}
                <span className="cursor" aria-hidden="true">
                  _
                </span>
              </h1>
              <p className="hero__role">{profile.role}</p>
              <p className="hero__lead">{profile.tagline}</p>

              <Prompt command="cat ./status" />
              <p className="hero__status">
                <span className="status-ok">[available]</span> open to software
                engineering roles with a focus on cybersecurity · {profile.location}
              </p>

              <div className="hero__actions">
                <Link to="/projects" className="button">
                  ./view_projects
                </Link>
                <Link to="/contact" className="button button--ghost">
                  ./contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">featured work</p>
              <h2>Selected projects</h2>
            </div>
            <Link to="/projects" className="link-arrow">
              cd ./projects <Icon name="arrow-right" size={16} />
            </Link>
          </div>

          <div className="grid grid--3">
            {featured.map((project) => (
              <article key={project.slug} className="card project-card">
                <div className="project-card__top">
                  <h3>{project.title}</h3>
                  {project.year && (
                    <span className="project-card__year">{project.year}</span>
                  )}
                </div>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {(project.live || project.repo) && (
                  <div className="project-card__links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        play / view <Icon name="external" size={15} />
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        source <Icon name="github" size={15} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container cta">
          <div>
            <p className="eyebrow">next step</p>
            <h2>Let&apos;s build something together.</h2>
            <p>Open to software engineering roles, especially in cybersecurity.</p>
          </div>
          <Link to="/contact" className="button">
            ./start_conversation
          </Link>
        </div>
      </section>
    </>
  )
}
