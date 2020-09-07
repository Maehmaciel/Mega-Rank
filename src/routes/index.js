
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import RegisterProject from '../Pages/RegisterProject'
import Projects from '../Pages/ShowProjects'
import Support from '../Pages/Support'
import Help from '../Pages/Help'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

const Routes = () => (
	<BrowserRouter history={history}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/newProject" component={RegisterProject} />
			<Route path="/projects" component={Projects} />
			<Route path="/help" component={Help} />
			<Route path="/support" component={Support} />
		</Switch>

	</BrowserRouter>
);

export default Routes