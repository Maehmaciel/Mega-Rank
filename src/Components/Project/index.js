import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';
import { Container, ItemText, ItemTitle, SupportText } from './styles'
import api from '../../services/api'
import Support from '../../Pages/Support';

const Project = ({ children, supportable, projectData, popupStatus }) => {
  async function support(id) {
    try {
      popupStatus({ name: 'notify', information: 'Bem vindo' })
      await api.put(`/projects/${id}`)


      const { data } = await api.get('/home')
      projectData({
        project: data
      })
      console.log(data)


    } catch (error) {
      console.log(error)
      // setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
    }
  }
  return (
    <>
      <Container support={supportable} onClick={() => { supportable && support(children.id) }}>

        <ItemTitle>{children.name}</ItemTitle>
        <SupportText>Esse Projeto foi apoiado: {children.supporters.length} x</SupportText>
        <ItemText>Projeto de: {children.owner.username}</ItemText>
        <ItemText>{children.project}</ItemText>

      </Container>
    </>


  )
}

const mapStateToProps = state => ({
  project: state.project,
  popup: state.popup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Project);