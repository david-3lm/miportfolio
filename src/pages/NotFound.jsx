import { Link } from 'react-router-dom'
import Prompt from '../components/Prompt.jsx'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <Prompt command="cd ./404" />
        <h1>Page not found</h1>
        <p className="page-head__lead">
          The page you are looking for does not exist or has moved.
        </p>
        <Link to="/" className="button">
          cd ~
        </Link>
      </div>
    </section>
  )
}
