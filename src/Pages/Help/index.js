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
			id: 1,
			nome: "Empreendedorismo",
			links: ["https://www.youtube.com/embed/im7ct31o35c"]
		}
	])


	return (
		<Container>
			<Header />

			<Content>
				{
					cursos.map(curso => {
						return (
							<div key={curso.id}>
								<p>{curso.nome}</p>
								<Curso>
									{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}{
										curso.links.map((link, i) => {
											return <Cursos key={i}>{link}</Cursos>
										})

									}
								</Curso>
							</div>)
					})

				}
				{
					cursos.map(curso => {
						return (
							<div key={curso.id}>
								<p>{curso.nome}</p>
								{
									curso.links.map((link, i) => {
										return <Cursos key={i}>{link}</Cursos>
									})
								}</div>)
					})

				}
				{
					cursos.map(curso => {
						return (
							<div key={curso.id}>
								<p>{curso.nome}</p>
								{
									curso.links.map((link, i) => {
										return <Cursos key={i}>{link}</Cursos>
									})
								}</div>)
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













