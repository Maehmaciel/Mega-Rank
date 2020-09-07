import React from 'react';

import { Container, Frame } from './styles'

const Cursos = ({ children }) => {

  return (
    <>
      <Container>
        <Frame src={children} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Frame>
      </Container>
    </>


  )
}
export default Cursos