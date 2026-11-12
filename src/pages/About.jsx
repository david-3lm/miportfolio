import Prompt from '../components/Prompt.jsx'
import { useLanguage, useProfile } from '../i18n/index.jsx'

export default function About() {
  const { t } = useLanguage()
  const profile = useProfile()

  return (
    <section className="section">
      <div className="container">
        <header className="page-head">
          <Prompt command="cat ./about.md" />
          <h1>{t('about.title')}</h1>
          <p className="page-head__lead">{profile.tagline}</p>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="card about-facts">
            <h2>{t('about.quickFacts')}</h2>
            <dl>
              <div>
                <dt>{t('about.facts.role')}</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt>{t('about.facts.location')}</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>{t('about.facts.email')}</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>{t('about.facts.languages')}</dt>
                <dd>
                  {profile.languages
                    .map((language) => `${language.name} (${language.level})`)
                    .join(' · ')}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="section__head section__head--spaced">
          <div>
            <p className="eyebrow">{t('about.skillsEyebrow')}</p>
            <h2>{t('about.skillsTitle')}</h2>
          </div>
        </div>

        <div className="grid grid--3">
          {profile.skills.map((group) => (
            <article key={group.title} className="card skill-card">
              <h3>{group.title}</h3>
              <ul className="tags tags--large">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section__head section__head--spaced">
          <div>
            <p className="eyebrow">{t('about.experienceEyebrow')}</p>
            <h2>{t('about.experienceTitle')}</h2>
          </div>
        </div>

        <ol className="timeline">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline__item">
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span>{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <p>{job.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="section__head section__head--spaced">
          <div>
            <p className="eyebrow">{t('about.educationEyebrow')}</p>
            <h2>{t('about.educationTitle')}</h2>
          </div>
        </div>

        <div className="grid grid--3">
          {profile.education.map((item) => (
            <article key={item.title} className="card">
              <div className="project-card__top">
                <h3>{item.title}</h3>
                <span className="project-card__year">{item.period}</span>
              </div>
              <p>{item.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
