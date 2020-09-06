import React from 'react';

import { Container, ButtonClose, Text, Content } from './styles';

import icClose from '../../../assets/ic_cancel.svg';
const Notify = ({ info, close }) => (
	<Container>
		<ButtonClose onClick={close} src={icClose} />
		<Content>
			<Text>{info}</Text>
		</Content>

	</Container>
);

export default Notify;
