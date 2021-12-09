import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repo }) => {
  return repo.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repo: PropTypes.array.isRequired,
};

export default RepoItem;
