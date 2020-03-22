import React from 'react'
import styled from 'styled-components'

const UnstyledSection = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default styled(UnstyledSection)`
  min-height: 100vh;
`
