import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';
import { Container, ItemText, ItemTitle, SupportText } from './styles'
import api from '../../services/api'
import Support from '../../Pages/Support';

const Project = ({ history, children, supportable, projectData, popupStatus, user }) => {
  const [apoiado, setApoiado] = useState(false)
  async function support(id, userSupporters) {
    let supporters = []
    try {
      userSupporters.map(sup => {
        supporters.push(sup.id)
        if (user == sup.id) {
          popupStatus({ name: 'notify', information: 'Você já apoiou este projeto' })
          setApoiado(true)
        }


      })
      if (!apoiado) {
        await api.put(`/projects/${id}`, { supporters })
        popupStatus({ name: 'notify', information: 'Obrigado por apoiar este projeto' })

        const { data } = await api.get('/home')
        projectData({
          project: data
        })

        history.push("/support")
      }


    } catch (error) {
      console.log(error)
      // setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
    }
  }
  return (
    <>
      <Container support={supportable} onClick={() => { supportable && support(children.id, children.supporters) }}>

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
  popup: state.popup,
  user: state.login.user.id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Project);