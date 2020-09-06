import React from 'react';

import SideMenu from './SideMenu'
import Popup from './PopUp'

const Components = ({ history }) => (
	<div>
		<SideMenu history={history} />
		<Popup />
	</div>
);

export default Components;
