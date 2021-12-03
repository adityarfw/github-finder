import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  //State is an object
  //https://api.github.com/users

  // getting the users as props from App.js
  // replacing this.state.users > this.props.users

  render() {
    return (
      <div style={userStyles}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '0.5rem',
};

export default Users;
