import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppointmentRow from '../components/AppointmentRow.jsx'

// This is a container component that renders the entire appointment table.
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
		  {this.props.appointments.map((appt) => (
		      <AppointmentRow appointment={appt} key={appt.id} />
		  ))}
		</tbody>
	      </table>
	    </div>
	)
    }
}

// Mapping the appointment state to this component's props to trigger an automatic
// re-render if the appointment state is changed.
const mapStateToProps = function(state) {
    return {
	appointments: state.appointments
    }
}

export default connect(mapStateToProps)(AppointmentTable)
