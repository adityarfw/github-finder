import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <p>{repo}</p>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.array.isRequired,
};

export default RepoItem;
