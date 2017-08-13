import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions'

class AddAppointment extends Component {
    constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
	e.preventDefault();

	// Form validation should occur here.

	this.props.dispatch(addAppointment({
	    doctor: this.doctor.value.trim(),
	    patient: this.patient.value.trim(),
	    datetime: this.datetime.value.trim()
	}));

	this.form.reset();
    }

    render() {
	return (
	    <div>
	      <h4>Add New Appointment</h4>
	      <form onSubmit={this.handleSubmit}
		    ref={node => { this.form = node }}>
		<div className="form-group">
		  <label htmlFor="doctor">Doctor</label>
		  <input type="text" className="form-control" id="doctor"
			 ref={node => { this.doctor = node }}
		    placeholder="Enter full name" />
		</div>
		<div className="form-group">
		  <label htmlFor="doctor">Patient</label>
		  <input type="text" className="form-control" id="patient"
			 ref={node => { this.patient = node }}
		    placeholder="Enter full name" />
		</div>
		<div className="form-group">
		  <label htmlFor="doctor">Date and Time</label>
		  <input type="datetime-local" className="form-control"
			 id="datetime" ref={node => { this.datetime = node }}
		    placeholder="Enter date and time" />
		</div>
		<div className="form-group">
		  <input type="submit" className="btn btn-primary"
			 value="Create Appointment" />
		</div>
	      </form>
	    </div>
	)
    }
}

export default connect()(AddAppointment)
