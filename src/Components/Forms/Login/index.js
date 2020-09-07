import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../../store/actions/login'

import {
	Container,
	Forms,
	Title,
	TextButton,
	FormButton,
	Error
} from '../styles';

import Input from '../../Input'

import api from '../../../services/api'

const Login = ({ loginSuccess, popupStatus, history }) => {
	const [error, setError] = useState('')

	const signin = async (credentials) => {
		try {
			console.log(credentials)
			const { data } = await api.post('/login', credentials)
			if (data.error) {
				setError(data.error)
				return
			}
			console.log(data)
			const config = {
				headers: { Authorization: `Bearer ${data.token}` }
			};
			const request = await api.get('/users', config)
			const user = request.data
			console.log(user)
			popupStatus({ name: 'notify', information: 'Bem vindo' })
			loginSuccess({ token, user })
			history.push('/')
		} catch (error) {
			console.log(error)
			setError("Opa, ocorreu um erro na requisiçao, tente novamente mais tarde")
		}

	}

	return (
		<Container>

			<Title>Acesse sua conta</Title>
			{error && <Error>{error}</Error>}

			<Forms onSubmit={signin}>
				<Input
					name="email"
					placeholder="Email"
					required />
				<Input
					name="password"
					placeholder="Senha"
					type="password"
					required />
				<TextButton to="/register" >Esqueceu sua senha?</TextButton>

				<FormButton type="submit" bg="#0995C6">Acessar</FormButton>

			</Forms>


			<TextButton to="/register">Não tem uma conta?</TextButton>
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Login);