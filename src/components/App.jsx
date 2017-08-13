import React, { Component } from 'react'
import AppointmentTable from '../containers/AppointmentTable.jsx'
import ProfilePhoto from '../containers/ProfilePhoto.jsx'
import WelcomeMessage from '../containers/WelcomeMessage.jsx'

// This is the top-level app component that renders a basic HTML
// structure and subcomponents for the user profile, welcome message,
// and appointment table.
class App extends Component {
    render() {
	return (
	    <div className="App">
	      <div className="row">
		<div className="col-sm-3">
		  <ProfilePhoto />
		</div>
		<div className="col-sm-9">
		  <WelcomeMessage />
		  <AppointmentTable />
		</div>
	      </div>
	    </div>
	)
    }
}

export default App
