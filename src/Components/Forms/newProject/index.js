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
			const { data } = await api.post('/projects', info)
			if (data.error) {
				setError(data.error)
				return
			}
			history.push('/')


		} catch (error) {
			setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
		}


	}

	return (
		<Container >
			<Title>Cadastro de Projeto</Title>
			{error && <Error>{error}</Error>}

			<Forms onSubmit={update} ref={formRef}>
				<Input
					name="name"
					placeholder="Nome do Projeto"
					className="login-input"
					required />

				<Input
					name="project"
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