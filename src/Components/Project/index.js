import React from 'react';

import { Container, ItemText } from './styles'

const Cursos = ({ children }) => {

  return (
    <>
      <Container>

        <ItemText>{children.name}</ItemText>
        <ItemText>{children.project}</ItemText>
      </Container>
    </>


  )
}
export default Cursos