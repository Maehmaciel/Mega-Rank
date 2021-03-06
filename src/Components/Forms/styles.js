import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	font-size: 28px;
	color: #0466B9;
	max-width:25vw;
	padding: 20px;
	@media (max-width: 1200px) {
		max-width:35vw;
		
		
	}
	@media (max-width: 1000px) {
		max-width:50vw;
		
		
	}
	@media (max-width: 800px) {
		max-width:80vw;
		
		
	}
`;

export const Forms = styled(Form)`

	display: flex;
	flex-direction: column;
	width:100%;
`;
export const Button = styled.div`
	background: #0466B9;
	padding: 11px 20px 11px 20px;
	color: #fff;
	font-size: 18px;
	font-weight: 400 !important;
	border-radius: 6px;
	margin-top: 41px;
`

export const Title = styled.span`
	font-weight: 700;
	font-size: 18px;
	color: #303233;
	align-self: start;
`

export const Error = styled.span`
	font-weight: 300;
	color: #F63E3E;
	font-sizE: 18px;
	margin-top: 10px;
`

export const Input = styled.input`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;
	margin-top: 20px;

`

export const TextButton = styled(Link)`
	font-size: 14px;
	color: #0466B9;
	margin-top: 12px;
	margin-bottom: 10px;
	align-self: start;

`

export const FormButton = styled.button`
	padding: 16px 32px;
	border-radius: 6px;
	margin-top: 20px;
	background:#0995C6;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 150%;
	color: #FFFFFF;
	display: flex;
	justify-content:center;
	align-items:center;

	:hover{
		opacity:0.8;
	}
`


