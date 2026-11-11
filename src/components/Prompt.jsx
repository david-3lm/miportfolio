import { profile } from '../data/profile.js'

export default function Prompt({ command, path = '~' }) {
  return (
    <p className="prompt">
      <span className="prompt__user">{profile.handle}@portfolio</span>:
      <span className="prompt__path">{path}</span>
      <span className="prompt__sign">$</span> <span className="prompt__command">{command}</span>
    </p>
  )
}
