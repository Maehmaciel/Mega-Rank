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

class Home extends Component {
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


				{this.state.loading && <div className="loader"></div>}

				<Content>
					<div className="timeline">
						<div className="container left">
							<div className="content">
								<h2>2017</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
						<div className="container right">
							<div className="content">
								<h2>2016</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
						<div className="container left">
							<div className="content">
								<h2>2015</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
						<div className="container right">
							<div className="content">
								<h2>2012</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
						<div className="container left">
							<div className="content">
								<h2>2011</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
						<div className="container right">
							<div className="content">
								<h2>2007</h2>
								<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
							</div>
						</div>
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);