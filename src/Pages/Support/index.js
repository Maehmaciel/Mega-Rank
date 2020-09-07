import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';

import { Container, Content } from './styles';


import Project from '../../Components/Project';
import Header from '../../Components/Header';
import { Redirect } from 'react-router-dom';

function Support({ history, project, login }) {



	return (
		<>{login.user.email ? (<Container>
			<Header title="Apoie" />

			<Content>
				{project &&
					project.project.map(p => {
						return <Project history={history} supportable={true} key={p.id}>{p}</Project>
					})

				}
			</Content>
		</Container>) : (<Redirect to="/login" />)}</>

	);
}


const mapStateToProps = state => ({
	project: state.project,
	login: state.login
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Support);













