import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Using Routes instead of Switch  in Router v6
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
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

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    //Add time to Alert to disappear
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const { loading, users } = this.state;

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
                  // All are elements instead of render and component
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
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
