import React from 'react'
import styled from 'styled-components'
import {
  ReactJs,
  Javascript,
  Electron,
  Tailwindcss,
  Sass,
} from '@icons-pack/react-simple-icons'

const cardContainerClasses = [
  'border',
  'border-purple-600',
  'm-4',
  'p-4',
  'w-full',
  'md:w-auto',
]

const usesClasses = ['font-black', 'text-sm', 'uppercase', 'p-1', 'm-1']

const Description = styled.p`
  hyphens: auto;
`

const UnstyledCard = ({ className, children, name, description, uses }) => (
  <div lang='en' className={`${className} ${cardContainerClasses.join(' ')}`}>
    <h3 className='text-lg font-bold font-display mb-2'>{name}</h3>
    <Description className='mb-4'>{description}</Description>

    <hr className='bg-purple-600 mb-4 border-0 h-px' />

    <div className='flex w-full flex-wrap'>
      {uses.map(use => (
        <p className={usesClasses.join(' ')}>
          {use === 'React' ? <ReactJs color='#61DAFB' /> : null}
          {use === 'JavaScript' ? <Javascript color='#F7DF1E' /> : null}
          {use === 'Electron' ? <Electron color='#47848F' /> : null}
          {use === 'tailwindCSS' ? <Tailwindcss color='#38B2AC' /> : null}
          {use === 'Sass' ? <Sass color='#CC6699' /> : null}
        </p>
      ))}
    </div>
  </div>
)

export default styled(UnstyledCard)`
  max-width: 480px;
`
