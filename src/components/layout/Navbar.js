import React from 'react';
import PropTypes from 'prop-types';

// Styling is pulled from App.css
// {this.props.title} Getting title from App.js - 'this' being used as its getting it from different class

const Navbar = ({ icon, style, title }) => {
  //No Render method for function
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={style}></i>
        {title}
      </h1>
    </nav>
  );
};

//set default title incase props are not passed
Navbar.defaultProps = {
  title: 'Sample Title',
  icon: 'fab fa-github-alt',
  style: { paddingRight: '2px' },
};

//type checker for props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
