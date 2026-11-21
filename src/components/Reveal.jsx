import useInView from '../hooks/useInView.js'

export default function Reveal({
  as: Component = 'div',
  className = '',
  delay = 0,
  style,
  children,
  ...props
}) {
  const [ref, inView] = useInView()

  return (
    <Component
      {...props}
      ref={ref}
      className={`reveal${inView ? ' reveal--visible' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
