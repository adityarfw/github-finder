import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Using Routes instead of Switch  in Router v6
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// Changing class to functional component

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar
              title='Github Finder'
              icon='fab fa-github'
              style={{ paddingRight: `5px` }}
            />
            <div className='container'>
              <Alert />
              <Routes>
                <Route
                  path='/' // Using path instead of exact path in Router v6
                  element={
                    // In react-router-dom v6 the Route components no longer have render or component props, all routes render their components, as JSX, on the element prop. There is also no longer an exact prop as all routes are now always exactly matched.
                    <Fragment>
                      <Search
                      // Can remove SearchUser, clearUsers, showClear, setAlert from App js since its moved to githubState. No need to pass props
                      />
                      <Users />
                    </Fragment>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route
                  path='/user/:userlogin'
                  // Do not need to add props as its automatically imported
                  element={<User />}
                />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
