import React from 'react'
import styled from 'styled-components'

const classnames = [
  'text-center',
  'font-display',
  'text-6xl',
  'tracking-tighter',
]

const UnstyledTitle = ({ className }) => (
  <h1 className={`${className} ${classnames.join(' ')}`}>
    <span className='text-purple-600'>{'<'}</span>kayak
    <span className='text-purple-600'>{'/>'}</span>
  </h1>
)

export default styled(UnstyledTitle)``
