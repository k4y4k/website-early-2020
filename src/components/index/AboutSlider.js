import React from 'react'
import styled from 'styled-components'
import {
  Css3,
  Docker,
  Electron,
  Gatsby,
  Git,
  Github,
  Graphql,
  Gulp,
  Html5,
  Javascript,
  Netlify,
  NodeDotJs,
  Postcss,
  ReactJs,
  Redux,
  Sass,
  StyledComponents,
  Tailwindcss,
  Webpack,
  Wordpress,
} from '@icons-pack/react-simple-icons'
import Ticker from 'react-ticker'

const logos = [
  <Netlify size='50' color='#00C7B7' />,
  <Css3 size='50' color='#1572B6' />,
  <Wordpress size='50' color='#21759B' />,
  <Docker size='50' color='#2496ED' />,
  <NodeDotJs size='50' color='#339933' />,
  <Tailwindcss size='50' color='#38B2AC' />,
  <Electron size='50' color='#47848F' />,
  <ReactJs size='50' color='#61DAFB' />,
  <Webpack size='50' color='#8DD6F9' />,
  <Gatsby size='50' color='#663399' />,
  <Redux size='50' color='#764ABC' />,
  <Sass size='50' color='#CC6699' />,
  <Gulp size='50' color='#DA4648' />,
  <StyledComponents size='50' color='#DB7093' />,
  <Postcss size='50' color='#DD3A0A' />,
  <Graphql size='50' color='#E10098' />,
  <Html5 size='50' color='#E34F26' />,
  <Git size='50' color='#F05032' />,
  <Javascript size='50' color='#F7DF1E' />,
  <Github size='50' color='#ffffff' />,
]

const UnstyledAboutSlider = () => (
  <React.Fragment>
    <Ticker offset='50%'>
      {index => (
        <div className='m-2 mx-4'>
          <h1>{logos[index.index % (logos.length - 1)]}</h1>
        </div>
      )}
    </Ticker>
  </React.Fragment>
)

export default styled(UnstyledAboutSlider)``
