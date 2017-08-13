import React, { Component } from 'react'
import ProfilePhoto from '../components/ProfilePhoto.jsx'
import WelcomeMessage from '../components/WelcomeMessage.jsx'
import AppointmentTable from '../components/AppointmentTable.jsx'

class App extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    user: this.loadUser(),
	    appointments: this.loadAppointments()
	}
    }

    // This returns the current user info. In a real-world application,
    // we would load this data via an API call.
    loadUser() {
	return {
	    name: 'Nayan',
	    avatar_url: 'http://via.placeholder.com/150x150?text=Nayan'
	}
    }

    // This is returns an array of appointments. In a real-world application,
    // we would load this data via an API call.
    loadAppointments() {
	return [
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
	];
    }

    // This renders the main app structure and all of the sub-components
    // used in the app.
    render() {
	return (
	    <div className="App">
	      <div className="row">
		<div className="col-sm-3">
		  <ProfilePhoto user={this.state.user} />
		</div>
		<div className="col-sm-9">
		  <WelcomeMessage user={this.state.user} />
		  <AppointmentTable appointments={this.state.appointments } />
		</div>
	      </div>
	    </div>
	);
    }
}

export default App;
