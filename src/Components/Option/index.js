import React from 'react';

import { Container, Image, ItemText } from './styles'

export default function Option({ name, image, to, popup, color }) {

  return (
    <>

      <Container className="popup" to={to}>
        <span className="popuptext" >{popup}</span>
        <ItemText>{name}</ItemText>
        <Image src={image} />
      </Container>
    </>


  )
}