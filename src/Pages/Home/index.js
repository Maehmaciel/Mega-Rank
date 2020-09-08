import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';

import { Container, Category, Content } from './styles';

import Option from '../../Components/Option'
import Header from '../../Components/Header'

import api from '../../services/api';


import community from '../../assets/svg/002-community.svg'
import conversation from '../../assets/svg/003-conversation.svg'
import registration from '../../assets/svg/004-registration.svg'
import question from '../../assets/svg/005-question.svg'



function Home({ projectData }) {
	useEffect(() => {
		async function getProjects() {
			try {
				const { data } = await api.get('/home')
				projectData({
					project: data
				})
			} catch (error) {
			}
		}

		getProjects()


	}, []);



	return (
		<Container>
			<Header />
			<Content>
				<Category>
					<Option name="Apoie" popup="Escolha um projeto para apoiar (Nescessário Login)" to="/support" image={community}></Option>

					<Option name="Conheça os projetos" popup="Conheça os projetos Cadastrados" to="/projects" image={conversation}></Option>
				</Category>
				<Category>
					<Option name="Cadastre um projeto" popup="Faça seu cadastro e nos conte seu projeto" to="/newProject" image={registration}></Option>
					<Option name="Quero uma ajuda para começar" popup="Quer empreender e não sabe por onde começar? Vem com a gente!" to="/help" image={question}></Option>
				</Category>
			</Content>





		</Container>
	);

}

const mapStateToProps = state => ({
	project: state.project
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);