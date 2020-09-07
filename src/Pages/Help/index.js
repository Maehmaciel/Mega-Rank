import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';

import { Container, Curso, Content } from './styles';


import Cursos from '../../Components/Cursos';
import Header from '../../Components/Header';

function Help() {
	const [cursos, setCursos] = useState([
		{
			nome: "Empreendedorismo",
			links: ["https://www.youtube.com/embed/im7ct31o35c", "https://www.youtube.com/embed/4Y-tjhZvCQg"]
		},
		{
			nome: "Como montar uma Startup",
			links: ["https://www.youtube.com/embed/UU3G_JC_Y8s"]
		}
	])


	return (
		<Container>
			<Header />

			<Content>
				{
					cursos.map((curso, index) => {
						return (
							<div key={index}>
								<h2>{curso.nome}</h2>
								<Curso>
									{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}
								</Curso>
							</div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Help);













