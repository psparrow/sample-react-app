import React, { Component } from 'react'
import { connect } from 'react-redux'

// This is a container component that displays a welcome message to the user.
class WelcomeMessage extends Component {
    render() {
	return (
	    <div className="alert alert-success" role="alert">
	      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	      </button>
	      <strong>Welcome {this.props.user.name}!</strong>
	    </div>
	)
    }
}

// Mapping the user state to this component's props to trigger an automatic
// re-render if the user state is changed.
const mapStateToProps = function(state) {
    return {
	user: state.user
    }
}

export default connect(mapStateToProps)(WelcomeMessage)
