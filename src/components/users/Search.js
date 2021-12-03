import React, { Component } from 'react';

export class Search extends Component {
  // A form needs to have a state in react
  // State level is relative to component itself and not App level for Forms
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
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
