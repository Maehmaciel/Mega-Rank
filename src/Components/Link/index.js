import React from 'react';

import { Container, Text } from './styles';

const Link = ({ size, text, children, to, click }) => (
	<Container size={size} to={to} onClick={click}>
		{text ? <Text>
			{text}
		</Text> : children}
	</Container>
);

export default Link;
