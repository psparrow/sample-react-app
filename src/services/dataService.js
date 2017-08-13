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
		"start" : "2015-04-24T07:00:00-06:00",
		"patient_name" :"Mike Ross",
		"physician_name" : "Gregory House"
	    },
	    {
		"id" : 696,
		"start" : "2015-04-22T08:00:00-06:00",
		"patient_name" :"Ted Nugent",
		"physician_name" : "Oz"
	    }
	]

	next({
	    type: 'GET_APPOINTMENT_DATA_RECEIVED',
	    data: apptData
	})

	break
    case 'ADD_APPOINTMENT':
	// In a real-world application, the API call to persist the new
	// appointment data would go here.

	// Build the new appointment JSON to add to the appointment list.
	// This would likely be returned from the API call, confiring the
	// action was a success.
	var appt = {
	    "id" : Math.random() * 1000,
	    "start" : action.data.datetime,
	    "patient_name" : action.data.patient,
	    "physician_name" : action.data.doctor
	}

	next({
	    type: 'CREATE_APPOINTMENT_SUCCESS',
	    data: appt
	})

	break
    default:
	break
    }
}

export default dataService
