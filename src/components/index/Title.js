import React from 'react'
import styled from 'styled-components'

const classnames = ['font-display', 'text-6xl', 'tracking-tighter', 'font-bold']

const UnstyledTitle = ({ className }) => (
  <h1 className={`${className} ${classnames.join(' ')}`}>
    <span className='text-purple-600'>{'<'}</span>kayak
    <span className='text-purple-600'>{'/>'}</span>
  </h1>
)

export default styled(UnstyledTitle)``
