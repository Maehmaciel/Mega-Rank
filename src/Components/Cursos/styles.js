import styled from 'styled-components';

export const Container = styled.div`
	margin:10px;
	font-size: 18px;
	border: 2px solid #0995C6;
	border-radius: 4px;
	width:400px;
	height:250px;
	box-shadow: 0px 12px 20px -15px black;
	display:flex;
	overflow:scroll;
	 &:hover {
    box-shadow:none;
  }
`;

export const Frame = styled.iframe`
	
	width:100%;
	height:100%;
	
`;



