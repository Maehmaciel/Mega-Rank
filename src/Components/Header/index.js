import React from 'react';
import * as actions from '../../store/actions/login'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Logo, User, Title } from './styles'
import Link from '../Link'
import logo from '../../assets/logo.png'
import Popup from '../PopUp'
const Header = ({ children, user, title }) => {

  return (
    <Container>
      <Link to="/" size="image">
        <Logo src={logo} />
      </Link>
      <Popup />
      <Title>{title}</Title>
      {user.username ? (<User>Bem Vinda, {user.username}</User>) : (<div>
        <Link to="/login" text="Login" size="xsmall"></Link>
        <Link to="/register" text="Cadastro" size="xsmall"></Link>
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