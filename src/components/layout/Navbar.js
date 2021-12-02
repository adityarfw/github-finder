import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styling is pulled from App.css
// {this.props.title} Getting title from App.js - 'this' being used as its getting it from different class

export class Navbar extends Component {
  //set default title incase props are not passed
  static defaultProps = {
    title: 'Sample Title',
    icon: 'fab fa-github-alt',
    style: { paddingRight: '2px' },
  };

  //type checker for props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} style={this.props.style}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
