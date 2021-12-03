import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  // A form needs to have a state in react
  // State level is relative to component itself and not App level for Forms
  state = {
    text: '',
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
  };

  //Creating a Prop to pass up the text to App.js using this.props.searchUser
  //The searchUser function will be created in App.js

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            onChange={this.onChange}
            type='text'
            name='text'
            placeholder='Search...'
            value={this.state.text}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;