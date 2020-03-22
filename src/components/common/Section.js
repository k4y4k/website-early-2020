import React from 'react'
import styled from 'styled-components'

const UnstyledSection = ({ className, children }) => (
  <div className={className + ' text-center'}>{children}</div>
)

export default styled(UnstyledSection)`
  padding: 3rem 1.5rem;
`
