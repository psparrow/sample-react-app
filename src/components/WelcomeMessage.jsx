import React, { Component } from 'react';

// This class renders a custom welcome message for a user
class WelcomeMessage extends Component {
    render() {
	return <p>Welcome {this.props.user.name}!</p>
    }
}

export default WelcomeMessage;
