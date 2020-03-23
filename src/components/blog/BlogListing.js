import React from 'react'
import styled from 'styled-components'
import Title from '../common/SectionTitle'
import BlogPostListing from './BlogPostListing'

import data from '../../dummy/blogData.json'

const UnstyledBlogListing = ({ className, children }) => (
  <div className={className}>
    <Title>blog</Title>
    <div
      className='flex flex-wrap mx-auto justify-between'
      style={{ maxWidth: 960 }}
    >
      {data.map(datum => (
        <BlogPostListing
          name={datum.name}
          date={datum.date}
          description={datum.description}
        />
      ))}
    </div>
  </div>
)

export default styled(UnstyledBlogListing)``
