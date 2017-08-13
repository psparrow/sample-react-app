import React, { Component } from 'react';
import Moment from 'react-moment';

// This class renders an individual row in an appointment table
class AppointmentRow extends Component {
    formatStartDate() {
	return <Moment format="YYYY/MM/DD">{this.props.appointment.start}</Moment>;
    }

    formatStartTime() {
	return <Moment format="h:mm a">{this.props.appointment.start}</Moment>;
    }

    render() {
	return (
	    <tr id={`Appointment-${this.props.appointment.id}`}>
	      <td className="Appointment-date">{this.formatStartDate()}</td>
	      <td className="Appointment-time">{this.formatStartTime()}</td>
	      <td className="Appointment-doctor">{this.props.appointment.physician_name}</td>
	      <td className="Appointment-patient">{this.props.appointment.patient_name}</td>
	    </tr>
	);
    }
}

export default AppointmentRow;
