import React from 'react'

const svgStyles = {
  display: 'inline-block',
  fill: 'currentcolor',
  height: '1.25em',
  maxWidth: '100%',
  position: 'relative',
  transition: 'fill 0.25s ease',
  userSelect: 'none',
  verticalAlign: 'text-bottom'
}

const Icon = ({ children, ...props }) => (
  <svg {...props} style={svgStyles}>
    {children}
  </svg>
)

Icon.displayName = 'Icon'

export default Icon
