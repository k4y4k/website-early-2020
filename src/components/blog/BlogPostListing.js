import React from 'react'
import styled from 'styled-components'

const tagClasses = [
  'mx-2',
  'text-sm',
  'bg-purple-600',
  'uppercase',
  'px-2',
  'font-black',
  'inline-block',
]

const UnstyledBlogPostListing = ({
  className,
  children,
  name,
  date,
  description,
}) => (
  <div className={`${className} p-4 m-1 border border-purple-600`}>
    <h3 className='uppercase text-xl font-black font-display mb-2 hover:underline'>
      {name}
    </h3>
    <p className={tagClasses.join(' ')}>{date}</p>
    <p className={tagClasses.join(' ')}>1,320 words</p>
    <p className='my-2'>{description}</p>
    <div className='text-right'></div>
  </div>
)

export default styled(UnstyledBlogPostListing)`
  max-width: 470px;
`
