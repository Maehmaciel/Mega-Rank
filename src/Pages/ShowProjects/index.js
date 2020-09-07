import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/popup';

import { Container, Category, Header, Content } from './styles';

import Option from '../../Components/Option'
import api from '../../services/api';
import community from '../../assets/svg/002-community.svg'
import conversation from '../../assets/svg/003-conversation.svg'
import registration from '../../assets/svg/004-registration.svg'
import question from '../../assets/svg/005-question.svg'

class ShowProjects extends Component {
	state = {
		loading: true
	}
	componentDidMount = async () => {
		try {
			const { data } = await api.get('/home')
			const { all, categories } = data.products

			this.setState({
				loading: false
			})
			console.log(data)
			if (data.popup.popUp) this.props.popupStatus({ name: 'notify', information: data.popup.message })
		} catch (error) {
			console.log('error')
		}

	}

	render() {
		return (
			<Container>
				<Header>a</Header>
				<Content>
					<Category>
						<Option name="Apoie" image={community}></Option>

						<Option name="Conheça os projetos" image={conversation}></Option>
					</Category>
					<Category>
						<Option name="Cadastre um projeto" image={registration}></Option>
						<Option name="Quero uma ajuda para começar" image={question}></Option>
					</Category>
				</Content>


			</Container>
		);
	}
}

const mapStateToProps = state => ({
	popup: state.popup
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowProjects);