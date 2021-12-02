import React, { Component } from 'react';

export class UserItem extends Component {
  render() {
    //Removing this.state from this.state.avatar_url to clean up
    //change to this.props since its getting as a prop from 'user' array in Users component
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt={'Image of ' + login}
          className='round-img'
          style={{ width: '80px' }}
        />
        <h1>{login}</h1>
        <a href={html_url} className='btn btn-dark btn-sm my-1 '>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
