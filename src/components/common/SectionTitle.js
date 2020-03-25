import React from 'react'
import styled from 'styled-components'

const classes = ['font-display', 'text-2xl', 'text-center', 'mb-2']

const UnstyledSubtitle = ({ className, children }) => (
  <h2 className={`${className} ${classes.join(' ')}`}>
    console.log(
    <span className='text-purple-500'>{children}</span>)
  </h2>
)

export default styled(UnstyledSubtitle)``
