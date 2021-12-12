import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Using Routes instead of Switch  in Router v6
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';

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
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:userlogin' element={<User />} />
                <Route path='*' element={<Notfound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
