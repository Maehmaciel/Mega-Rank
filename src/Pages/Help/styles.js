import styled from 'styled-components';
export const Container = styled.div`
	width:100%;
	min-height:100vh;
	background: #F1F3F6;
	display:flex;
	flex-direction:column;

	
`;


export const Content = styled.div`
	flex:1;
	display:flex;
	flex-direction:column;
	flex-wrap:wrap;
	padding:10px;
	@media (max-width: 900px) {
		align-items:center;
		justify-content:center;
	}

`;
export const Links = styled.div`
	display:flex;
	flex-wrap:wrap;
	
	@media (max-width: 900px) {
		align-items:center;
		justify-content:center;
	}
`;
export const Curso = styled.div`

@media (max-width: 900px) {
		align-items:center;
		justify-content:center;
		width:90vw;
	}

`;
export const Category = styled.div`
	display:flex;
	
`;
export const Title = styled.h2`
	font-size: 18px;
	color: #303233;

	
`;
