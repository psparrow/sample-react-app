// The data service middleware is used to load the user and appointment data.
// In a real-world application, it would make JSON API calls to obtain the data
// and be expanded to handle API calls for CRUD operations on user and appointments.
const dataService = store => next => action => {
    next(action)

    switch (action.type) {
    case 'GET_USER_DATA':
	var userData = {
	    name: 'Nayan',
	    avatar_url: 'http://via.placeholder.com/150x150?text=Nayan'
	}

	next({
	    type: 'GET_USER_DATA_RECEIVED',
	    data: userData
	})

	break
    case 'GET_APPOINTMENT_DATA':
	var apptData = [
	    {
		"id" : 695,
		"patient_id" : 16,
		"physician_id" : 14,
		"start" : "2015-04-24T07:00:00-06:00",
		"end" : "2015-04-24T07:30:00-06:00",
		"patient_name" :"Mike Ross",
		"physician_name" : "Gregory House"
	    },
	    {
		"id" : 696,
		"patient_id" : 17,
		"physician_id" : 12,
		"start" : "2015-04-22T08:00:00-06:00",
		"end" : "2015-04-22T07:45:00-06:00",
		"patient_name" :"Ted Nugent",
		"physician_name" : "Oz"
	    }
	]

	next({
	    type: 'GET_APPOINTMENT_DATA_RECEIVED',
	    data: apptData
	})

	break
    default:
	break
    }
}

export default dataService
