import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/project';

import { Container, Links, Content, Title, Curso } from './styles';


import Cursos from '../../Components/Cursos';
import Header from '../../Components/Header';

function Help() {
	const [cursos, setCursos] = useState([
		{
			nome: "Empreendedorismo",
			links: ["https://www.youtube.com/embed/im7ct31o35c", "https://www.youtube.com/embed/4Y-tjhZvCQg", "https://www.youtube.com/embed/OZxxhT6WnwU"]
		},
		{
			nome: "Como montar uma Startup",
			links: ["https://www.youtube.com/embed/UU3G_JC_Y8s"]
		},
		{
			nome: "Programação",
			links: ["https://www.youtube.com/embed/2kSrMCQxhOI",
				"https://www.youtube.com/embed/Q1iPPkAk_Ho",
				"https://www.youtube.com/embed/jyjdXFsQoYw", "https://www.youtube.com/embed/Ptbk2af68e8"]
		}
	])


	return (
		<Container>
			<Header title="cursos" />

			<Content>
				{
					cursos.map((curso, index) => {
						return (
							<Curso key={index}>
								<Title>{curso.nome}</Title>
								<Links>
									{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}
								</Links>
							</Curso>)
					})

				}

			</Content>


		</Container>
	);
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
	bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Help);













