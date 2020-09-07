export const projectData = ({ project }) => ({

	type: 'PROJECT_DATA',
	payload: {
		project,
	}
})

export const popupStatus = ({ name, information }) => ({
	type: 'POPUP_STATUS',
	payload: {
		name,
		information
	}
})