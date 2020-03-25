import React from 'react'
import Section from '../components/common/Section'
import CardContainer from '../components/cards/CardContainer'
import BlogListing from '../components/blog/BlogListing'
import Footer from '../components/index/Footer'
import HeroContainer from '../components/index/HeroContainer'

export default () => (
  <React.Fragment>
    <Section centred={true}>
      <HeroContainer />
    </Section>
    <Section>
      <p>my name is kayak, i make websites, please hire me</p>
    </Section>
    <Section>
      <CardContainer />
    </Section>
    {/*
    <Section>
      <BlogListing />
    </Section>
   */}
    <Footer />
  </React.Fragment>
)
