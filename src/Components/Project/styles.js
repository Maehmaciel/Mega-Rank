import styled, { css } from 'styled-components';

export const Container = styled.button`
	padding: 15px;
	margin:10px;
	font-size: 18px;
	line-height: 150%;
	color: #090C00;
	background: #FFFFFF;
	border: 2px solid #0995C6;
	border-radius: 4px;
	width:400px;
	height:400px;
	display:flex;
	flex-direction:column;
	
	overflow:scroll;
	${(props) =>
		props.support &&
		css`
		box-shadow: 0px 12px 20px -15px black;
		 &:hover {
    box-shadow:none;
  }
	`}
	
`;


export const ItemTitle = styled.h2`
	font-weight: 500;
	font-size: 20px;
	line-height: 150%;
	color: #545454;

`;

export const SupportText = styled.h3`
	font-weight: 300;
	font-size: 15px;
	line-height: 150%;
	color: #545454;

`;

export const ItemText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 150%;
	color: #545454;
	@media (max-width: 1160px) {
		font-size: 14px;
		
	}

`;
