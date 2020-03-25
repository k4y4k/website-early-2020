import React from 'react'
import styled from 'styled-components'

const UnstyledSection = ({ className, children, centred }) => (
  <div className={className + (centred ? ' text-center' : ' ')}>{children}</div>
)

export default styled(UnstyledSection)`
  padding: 3rem 1.5rem;
`
