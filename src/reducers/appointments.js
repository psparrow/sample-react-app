// The appointments reducer handles state changes for the appointment list.
const appointments = (state = [], action) => {
    switch (action.type) {
    case 'GET_APPOINTMENT_DATA_RECEIVED':
	return action.data
    case 'CREATE_APPOINTMENT_SUCCESS':
	return state.concat([action.data])
    default:
	return state
    }
}

export default appointments
