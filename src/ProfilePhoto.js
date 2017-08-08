import React, { Component } from 'react';

// This class renders a user's profile photo
class ProfilePhoto extends Component {
  render() {
    return (
      <img src={this.props.user.avatar_url} className="ProfilePhoto-img" alt="ProfilePhoto" />
    );
  }
}

export default ProfilePhoto;
