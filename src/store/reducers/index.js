import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../../routes/history'
import login from './login';
import popup from './popup';

export default combineReducers({
	login,
	popup,
	router: connectRouter(history),
});



