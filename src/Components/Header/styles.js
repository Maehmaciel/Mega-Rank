import styled from 'styled-components';

export const Container = styled.header`
	display:flex;
	width:100%;
	height:80px;
	box-shadow: 0px 3px 30px #C4D3EBFD;
	align-items:center;
	justify-content:space-between;
	padding:0px 20px;
	background-color: #24292e;
	
`;
export const Logo = styled.img`
	height:80%;	
`;
export const User = styled.button`
	color:#FFF;
	cursor:pointer;
	background:transparent;
`;
export const Title = styled.h1`
	color:#FFF;
	@media (max-width: 660px) {

		font-size:15px;
		
	}
`;


