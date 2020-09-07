import styled from 'styled-components';

export const Container = styled.div`
	min-height:100vh;
	display:flex;
	flex-direction:column;
	background:#FFF;

			@media (max-width: 660px) {

		align-items:center;
	justify-content:center;
		
	}
`;

export const Content = styled.div`
	flex:1;
`;




export const Name = styled.span`
	color: #383D40;
	font-weight: 500;
	font-size: 20px;
	margin-left: 130px;
	margin-top: 50px;
	display: flex;

	@media (max-width: 950px) {
		margin-left: 45px;
	}

	@media (max-width: 350px) {
		margin-left: 25px;
	}
`


