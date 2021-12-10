import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// Removing searchUser as a Prop since its not passed in from App js and more
const Search = ({ showClear, clearUsers, setAlert }) => {
  // Initialize Github Context
  const githubContext = useContext(GithubContext);
  // A form needs to have a state in react
  // State level is relative to component itself and not App level for Forms
  // useState to add states for text. setText is a method to use the state. The text is set to ''
  const [text, setText] = useState('');

  // since we brought in githubContent, we can add context to searchUser githubContext.searchUser(text); instead of sending props
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter a keyword', 'warning');
    } else {
      githubContext.searchUser(text);
      setText('');
    }
  };

  // Replacing this.setState with setText created above, and pass in the value
  const onChange = (e) => setText(e.target.value);

  // Remove this from this.onSubmit, this.onChange,
  // Remove this.state from this.state.text

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          onChange={onChange}
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
