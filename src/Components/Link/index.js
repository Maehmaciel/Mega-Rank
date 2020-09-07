import React from 'react';

import { Container, Text } from './styles';

const Link = ({ size, children, to, click }) => (
	<Container size={size} to={to} onClick={click}>
		<Text>
			{children}
		</Text>
	</Container>
);

export default Link;
