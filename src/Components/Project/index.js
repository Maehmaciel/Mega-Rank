import React from 'react';

import { Container, ItemText } from './styles'

const Cursos = ({ children }) => {

  return (
    <>
      <Container>

        <ItemText>{children.name}</ItemText>
        <ItemText>{children.Cursos}</ItemText>
      </Container>
    </>


  )
}
export default Cursos