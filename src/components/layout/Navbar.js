import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Using { Link } with curly brances since react router dom exports are different from default export below

// Styling is pulled from App.css
// {this.props.title} Getting title from App.js - 'this' being used as its getting it from different class

const Navbar = ({ icon, style, title }) => {
  //No Render method for function
  // Using Link tags instead of a tags to maintain the state after loading
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={style}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
