/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/popup';

import { Container, Content } from './styles';


import Login from '../../Components/Forms/Login'

function LoginPage({ history }) {


	return (
		<Container>

			<Content>
				<Login history={history} />
			</Content>

		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);