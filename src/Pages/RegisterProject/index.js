/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/login';

import { Container, Content } from './styles';



import Register from '../../Components/Forms/newProject'
import Header from '../../Components/Header';
import { Redirect } from 'react-router-dom';

function RegisterProjects({ history, login }) {


	return (
		<>{login.user.email ? (<Container>
			<Header title="Receba Apoio" />

			<Content>
				<Register history={history} />
			</Content>


		</Container>) : (<Redirect to="/login" />)}</>

	);

}

const mapStateToProps = state => ({
	login: state.login,

});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterProjects);