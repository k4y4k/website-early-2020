import React from 'react'
import styled from 'styled-components'
import Title from '../common/SectionTitle'
import AboutSlider from './AboutSlider'

const UnstyledAboutContainer = ({ children, className }) => (
  <React.Fragment>
    <Title>kayak</Title>

    <AboutSlider />
    <div className={`${className} mx-auto`}>
      <p>
        I'm kayak, and I make websites, bad jokes,{' '}
        <span className='italic'>dad</span> jokes, and cups of coffee much too
        close to bedtime. I have a passion for fast, lightweight and efficient
        code, and a love of learning and teaching.
      </p>
      <p>
        I am a mostly-self-taught frontend developer looking to move into
        backend fairly soon. I have a formal background in graphic design, but
        after discovering programming's own unique blend of logic, problem
        solving and creativity, I was immediately hooked!
      </p>
      <p>
        The modern Web is constantly evolving, and, as a developer, so am I.
        Every project brings its own challenges and successes, and every day
        teaches me something new.
      </p>

      <p>
        I am currently looking for a job! If you think you have a place for me
        on your team, please, reach out on{' '}
        <a
          href='https://twitter.com/__kayak__'
          className='text-purple-500 hover:underline'
        >
          Twitter
        </a>
        , or send an email to{' '}
        <a
          href='mailto:kayak@kayak.rocks'
          className='text-purple-500 hover:underline'
        >
          kayak@kayak.rocks
        </a>
        .
      </p>
    </div>
  </React.Fragment>
)

export default styled(UnstyledAboutContainer)`
  max-width: 960px;
  p {
    margin: 0.5rem 0;
  }
`
