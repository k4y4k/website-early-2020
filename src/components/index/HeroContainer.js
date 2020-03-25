import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { Github, Twitter } from '@icons-pack/react-simple-icons'
import Button from '../common/Button'
import Subtitle from './Subtitle'

const UnstyledHeroContainer = ({ children, className }) => (
  <div className={className}>
    <Title />
    <Subtitle />
    <div className='flex justify-center mt-4 mb-4'>
      <Button>
        <a href='https://github.com/k4y4k'>
          <Github />
        </a>
      </Button>
      <Button>
        <a href='https://twitter.com/__kayak__'>
          <Twitter />
        </a>
      </Button>
      <Button filled>
        <a href='mailto:kayak@kayak.rocks'>get in touch</a>
      </Button>
    </div>
  </div>
)

export default styled(UnstyledHeroContainer)``
