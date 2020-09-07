import React from 'react';

import { Container, Logo } from './styles'
import Link from '../Link'
import logo from '../../assets/logo.png'
const Header = ({ children }) => {

  return (
    <Container>
      <Logo src={logo} />
      <div>
        <Link to="/login" size="xsmall">Login</Link>
        <Link to="/register" size="xsmall">Cadastro</Link>
      </div>
    </Container>

  )
}
export default Header