import React from 'react'
import styled from 'styled-components'

const classes = [
  'uppercase',
  'border',
  'border-purple-600',
  'hover:bg-purple-600',
  'p-2',
  'm-2',
  'rounded-md',
]

const UnstyledButton = ({ children, className, filled }) => {
  return (
    <button
      className={`${className} ${classes.join(' ')} ${
        filled
          ? ' bg-purple-600 hover:bg-purple-800 hover:border-purple-800'
          : ''
      }`}
    >
      {children}
    </button>
  )
}

export default styled(UnstyledButton)``
