import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Using Routes instead of Switch  in Router v6
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

//Class needs to extend component from React
//Class cannot directly return, hence needs a render method and return is placed within it.
// After adding myCity = () => 'Toronto' above render() method
// from {this.myCity()} > using this because the method is outside the current method and part of the class
//

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  //get lifecycle method, this is a method that will run as soon as the App opens up
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: response.data, loading: false });
  // }

  // Do not need to display generated users from above as all users are searchable
  // Creating a function for the prop and using async/await to retrive users by text
  // The response is in array items within data.
  searchUser = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, loading: false });
  };

  // Get a single user info when clicked on More
  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: response.data, loading: false });
  };

  getUsersRepos = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: response.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    //Add time to Alert to disappear
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const { loading, users, user, repos } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar
            title='Github Finder'
            icon='fab fa-github'
            style={{ paddingRight: `5px` }}
          />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                path='/' // Using path instead of exact path in Router v6
                element={
                  // In react-router-dom v6 the Route components no longer have render or component props, all routes render their components, as JSX, on the element prop. There is also no longer an exact prop as all routes are now always exactly matched.
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:login'
                // Do not need to add props as its automatically imported
                element={
                  <Fragment>
                    <User
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
                      user={user}
                      repos={repos}
                      loading={loading}
                    />
                  </Fragment>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
