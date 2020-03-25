import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../common/SectionTitle.js'
import data from '../../dummy/cardData.json'
import Card from './Card.js'

const UnstyledCardContainer = ({ className, children }) => (
  <div className={className}>
    <SectionTitle>previousWork</SectionTitle>

    <div className='flex flex-wrap justify-center my-4'>
      {data.map(datum => (
        <Card
          name={datum.name}
          description={datum.description}
          uses={datum.uses}
        />
      ))}
    </div>
  </div>
)

export default styled(UnstyledCardContainer)``
