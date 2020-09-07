import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';

import { Container, Content } from './styles';


import Project from '../../Components/Project';
import Header from '../../Components/Header';

function ShowProjects({ project }) {



	return (
		<Container>
			<Header />

			<Content>
				{project &&
					project.project.map(p => {
						return <Project key={p.id}>{p}</Project>
					})

				}



			</Content>


		</Container>
	);
}


const mapStateToProps = state => ({
	project: state.project
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowProjects);













