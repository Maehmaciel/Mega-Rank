import React from 'react';

import { Container, ItemText } from './styles'

const Cursos = ({ children }) => {

  return (
    <>
      <Container>
        <iframe width="560" height="315" src={children} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Container>
    </>


  )
}
export default Cursos