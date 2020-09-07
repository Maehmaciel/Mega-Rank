import styled from 'styled-components';

export const Container = styled.div`
	margin:10px;
	font-size: 18px;
	border: 2px solid #0995C6;
	border-radius: 4px;
	width:600px;
	height:350px;
	box-shadow: 0px 12px 20px -15px black;
	display:flex;
	justify-content:center;
	align-items:center;
	overflow:scroll;
	 &:hover {
    box-shadow:none;
  }
`;


