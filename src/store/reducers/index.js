import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../../routes/history'
import login from './login';
import popup from './popup';
import project from './project';

export default combineReducers({
	login,
	popup,
	project,
	router: connectRouter(history),
});



