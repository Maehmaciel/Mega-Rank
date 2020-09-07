import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
export const Container = styled(Link)`
	
	${(props) =>
		props.size === 'xsmall' &&
		css`
		padding: 8px 16px;
		border-radius: 4px;
		background: #0995C6;
		margin:5px;
	&:active{
	opacity:0.8;
	}

	&:hover{
	opacity:0.8;
	}

	`}
	${(props) =>
		props.size === 'image' &&
		css`
		height:80px;
		display:flex;
		align-items:center;
	`}

	

	
`;

export const Text = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
	color: #FFFFFF;
	align-self: center;
	margin: 0px 0px;



	
`;
