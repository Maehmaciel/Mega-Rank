import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	padding: 15px;
	margin:10px;
	font-size: 18px;
	line-height: 150%;
	color: #090C00;
	background: #FFFFFF;
	border: 2px solid #0995C6;
	border-radius: 4px;
	width:200px;
	height:200px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	box-shadow: 0px 12px 20px -15px black;
	 &:hover {
    box-shadow:none;
  }
`;

export const Image = styled.img`
	width:70%;
	height:70%;
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
