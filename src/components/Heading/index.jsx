export const Heading = ({
  children,
  type = 'h1',
  color = '',
  className = ''
}) => {
  const customizedColor = color === 'white' ? 'text-white' : 'text-text'

  if (type === 'h1') {
    return (
      <h1
        className={`text-[4.625rem] leading-[5.25rem] font-graphik-bold ${customizedColor} ${className}`}
      >
        {children}
      </h1>
    )
  }

  if (type === 'h4') {
    return (
      <h4
        className={`text-[1.75rem] leading-[2.5rem] font-graphik ${customizedColor} ${className}`}
      >
        {children}
      </h4>
    )
  }

  return (
    <h2
      className={`text-5xl leading-[3.4375rem] font-graphik ${customizedColor} ${className}`}
    >
      {children}
    </h2>
  )
}
