import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUser, showClear, clearUsers, setAlert }) => {
  // A form needs to have a state in react
  // State level is relative to component itself and not App level for Forms
  // useState to add states for text. setText is a method to use the state. The text is set to ''
  const [text, setText] = useState('');

  //Creating a Prop to pass up the text to App.js using this.props.searchUser
  //The searchUser function will be created in App.js
  // Remove this.state from this.state.text in functions
  // Remove this.props from this.props.setAlert, and this.props.searchUser and can use setAlert and searchUser instead
  // Replacing this.setState with setText created above

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter a keyword', 'warning');
    } else {
      searchUser(text);
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
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
