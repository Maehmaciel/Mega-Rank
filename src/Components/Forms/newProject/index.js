import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../../store/actions/login'

import {
	Container,
	Title,
	FormButton,
	Error,
	Forms
} from '../styles';

import Input from '../../Input'
import api from '../../../services/api'

function Register({ history, loginSuccess, popupStatus }) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const formRef = useRef(null)



	const update = async (info) => {
		setLoading(true)
		try {
			const response = await api.post('/user', info)
			if (response.data.error) {
				setError(response.data.error)
				return
			}
			const { data } = await api.post('/auth', { email: info.email, password: info.password })
			if (data.error) {
				setError(data.error)
				return
			}
			popupStatus({ name: 'notify', information: 'Bem vindo' })
			loginSuccess(data)
			history.push('/')


		} catch (error) {
			setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
		}


	}

	return (
		<Container >
			<Title>Cadastro</Title>
			{error && <Error>{error}</Error>}

			<Forms onSubmit={update} ref={formRef}>
				<Input
					name="name"
					placeholder="Nome do Projeto"
					className="login-input"
					required />

				<Input
					name="info"
					placeholder="Fale de seu projeto para nós e possivéis apoiadores"
					type="text"
					required />


				<FormButton type="submit" className="login-input" bg="#0466B9">{!loading ? 'Criar projeto' : 'Carregando...'}</FormButton>
			</Forms>


		</Container>
	);
}

const mapStateToProps = state => ({
	user: state.login.user
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);