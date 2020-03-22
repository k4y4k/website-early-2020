import React from 'react'
import Title from '../components/index/Title'
import Section from '../components/common/Section'
import Subtitle from '../components/index/Subtitle'
import Button from '../components/common/Button'
import { Github, Twitter } from '@icons-pack/react-simple-icons'

export default () => (
  <Section centred={true}>
    <div>
      <Title />
      <Subtitle />

      <div className='flex  justify-center mt-4 mb-4'>
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
  </Section>
)
