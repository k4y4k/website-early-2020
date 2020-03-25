import React from 'react'
import Section from '../components/common/Section'
import CardContainer from '../components/cards/CardContainer'
import BlogListing from '../components/blog/BlogListing'
import Footer from '../components/index/Footer'
import HeroContainer from '../components/index/HeroContainer'
import AboutContainer from '../components/index/AboutContainer'

export default () => (
  <React.Fragment>
    <Section centred={true}>
      <HeroContainer />
    </Section>

    <Section>
      <CardContainer />
    </Section>

    <Section>
      <AboutContainer />
    </Section>

    <Footer />
  </React.Fragment>
)
