

/* eslint-disable no-unreachable */
const INITIAL_STATE = {
	project: []
};

// Reducer
export default function product(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'PROJECT_DATA':
			return { ...state, project: action.payload.project };
			break;
		default:
			return state;
	}
}