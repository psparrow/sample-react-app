import React, { Component } from 'react';
import Moment from 'react-moment';

// This is a sub-component for rendering an individual row of the appointment table
class AppointmentRow extends Component {
    render() {
	return (
	    <tr id={`Appointment-${this.props.appointment.id}`}>
	      <td className="Appointment-date">
		<Moment format="YYYY/MM/DD">{this.props.appointment.start}</Moment>
	      </td>
	      <td className="Appointment-time">
		<Moment format="h:mm a">{this.props.appointment.start}</Moment>
	      </td>
	      <td className="Appointment-doctor">{this.props.appointment.physician_name}</td>
	      <td className="Appointment-patient">{this.props.appointment.patient_name}</td>
	    </tr>
	);
    }
}

export default AppointmentRow;
