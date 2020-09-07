import styled from 'styled-components';
export const Container = styled.div`
	max-width:100vw;
	min-height:100vh;
	background: #F1F3F6;
	display:flex;
	flex-direction:column;
	
	
`;


export const Content = styled.div`
	flex:1;
	display:flex;
	max-width:100vw;
	justify-content:center;
	align-items:center;
	flex-wrap:wrap;
	
`;
export const Category = styled.div`
	display:flex;
	flex-wrap:wrap;
	

		@media (max-width: 660px) {
		justify-content:center;
	align-items:center;
	}
	
`;