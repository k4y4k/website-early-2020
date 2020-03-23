import React from 'react'
import styled from 'styled-components'
import { Gatsby } from '@icons-pack/react-simple-icons'

const UnstyledFooter = ({ children, className }) => (
  <footer className='text-md bg-purple-800 p-2 text-center'>
    <p>
      Made with ✨ and <Gatsby className='inline' /> by kayak (😎)
    </p>
  </footer>
)

export default styled(UnstyledFooter)``
