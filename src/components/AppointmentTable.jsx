import React, { Component } from 'react';
import AppointmentRow from './AppointmentRow.jsx'

// This class renders the entire appointment table
class AppointmentTable extends Component {
    render() {
	return (
	    <div>
	      <h3>Appointments</h3>
	      <table className="table table-striped">
		<thead>
		  <tr>
		    <th>Date</th>
		    <th>Time</th>
		    <th>Doctor</th>
		    <th>Patient</th>
		  </tr>
		</thead>
		<tbody>
		  {
		      this.props.appointments.map((appt) => (
			  <AppointmentRow appointment={appt} key={appt.id} />
		      ))
		}
	    </tbody>
		</table>
		</div>
	);
    }
}

export default AppointmentTable;
