// The user reducer handles state changes for the user.
const user = (state = {}, action) => {
    switch (action.type) {
    case 'GET_USER_DATA_RECEIVED':
	return action.data
    default:
	return state
    }
}

export default user
