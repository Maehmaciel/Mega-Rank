import React from 'react';

import { Container, Image, ItemText } from './styles'

export default function Option({ name, image, to, color }) {

  return (
    <>
      <Container to={to}>

        <ItemText>{name}</ItemText>
        <Image src={image} />
      </Container>
    </>


  )
}