import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  //State is an object
  //https://api.github.com/users

  // getting the users as props from App.js
  // replacing this.state.users > this.props.users
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.proptypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '0.5rem',
};

export default Users;
