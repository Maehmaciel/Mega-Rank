import React from 'react';
import * as actions from '../../store/actions/login'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Logo, User, Title } from './styles'
import Link from '../Link'
import logo from '../../assets/logo.png'
const Header = ({ children, user, title }) => {

  return (
    <Container>
      <Logo src={logo} />
      <Title>{title}</Title>
      {user.username ? (<User>Bem Vinda, {user.username}</User>) : (<div>
        <Link to="/login" size="xsmall">Login</Link>
        <Link to="/register" size="xsmall">Cadastro</Link>
      </div>)}

    </Container>

  )
}
const mapStateToProps = state => ({
  user: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)