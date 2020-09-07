export const loginSuccess = ({ token, user }) => ({
	type: 'LOGIN_SUCCESS',
	payload: {
		token,
		user

	}
})

export const logout = () => ({
	type: 'LOGOUT',

})
export const updateUser = (user) => ({
	type: 'UPDATE_USER',
	payload: {
		user,
	}
})

export const popupStatus = ({ name, information }) => ({
	type: 'POPUP_STATUS',
	payload: {
		name,
		information
	}
})

export const redirectPopup = ({ name, information }) => ({
	type: 'REDIRECT_STATUS',
	payload: {
		name,
		information
	}
})