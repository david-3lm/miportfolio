import { useMemo, useState } from 'react'
import { Icon } from '../components/Icon.jsx'
import Prompt from '../components/Prompt.jsx'
import { projects } from '../data/projects.js'

const categories = [
  { value: 'all', label: 'all' },
  { value: 'software', label: 'software' },
  { value: 'game', label: 'games' }
]

export default function Projects() {
  const [category, setCategory] = useState('all')
  const [activeTag, setActiveTag] = useState('all')

  const byCategory = useMemo(
    () =>
      category === 'all'
        ? projects
        : projects.filter((project) => project.category === category),
    [category]
  )

  const tags = useMemo(
    () => ['all', ...new Set(byCategory.flatMap((project) => project.tags))],
    [byCategory]
  )

  const visible = useMemo(
    () =>
      activeTag === 'all'
        ? byCategory
        : byCategory.filter((project) => project.tags.includes(activeTag)),
    [byCategory, activeTag]
  )

  function selectCategory(value) {
    setCategory(value)
    setActiveTag('all')
  }

  return (
    <section className="section">
      <div className="container">
        <header className="page-head">
          <Prompt command="ls ./projects" />
          <h1>Projects I&apos;ve built</h1>
          <p className="page-head__lead">
            A selection of software and games I have built or contributed to.
            Each one taught me something new.
          </p>
        </header>

        <div className="filters" role="group" aria-label="Filter projects by type">
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter${category === item.value ? ' filter--active' : ''}`}
              aria-pressed={category === item.value}
              onClick={() => selectCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {category !== 'all' && (
          <div className="filters" role="group" aria-label="Filter projects by tag">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter${activeTag === tag ? ' filter--active' : ''}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid--3">
          {visible.map((project) => (
            <article key={project.slug} className="card project-card">
              <div className="project-card__top">
                <h2>{project.title}</h2>
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

        {visible.length === 0 && (
          <p className="empty">No projects match that filter yet.</p>
        )}
      </div>
    </section>
  )
}
