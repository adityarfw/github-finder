import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Adding Props to cleanup in the function argument
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //No Render method for function
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={'Image of ' + login}
        className='round-img'
        style={{ width: '80px' }}
      />
      <h1>{login}</h1>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1 '>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
