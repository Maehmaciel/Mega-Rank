export const loginSuccess = ({ token, user }) => ({
	type: 'LOGIN_SUCCESS',
	payload: {
		token,
		user

	}
})

export const logout = ({ user, token }) => ({
	type: 'LOGOUT',
	payload: {
		user,
		token,

	}
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