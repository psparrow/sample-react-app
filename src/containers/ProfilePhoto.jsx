import React, { Component } from 'react'
import { connect } from 'react-redux'

// This is a container component that renders a welcome message for the user.
class ProfilePhoto extends Component {
    render() {
	return (
	    <img src={this.props.user.avatar_url} className="ProfilePhoto-img" alt="ProfilePhoto" />
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

export default connect(mapStateToProps)(ProfilePhoto)
