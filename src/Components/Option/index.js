import React from 'react';

import { Container, Image, ItemText } from './styles'

export default function Option({ name, image, color }) {

  return (
    <>
      <Container>

        <ItemText>{name}</ItemText>
        <Image src={image} />
      </Container>
    </>


  )
}