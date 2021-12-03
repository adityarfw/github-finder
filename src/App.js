import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

//Class needs to extend component from React
//Class cannot directly return, hence needs a render method and return is placed within it.
// After adding myCity = () => 'Toronto' above render() method
// from {this.myCity()} > using this because the method is outside the current method and part of the class
//

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  //get lifecycle method
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get('https://api.github.com/users');
    this.setState({ users: response.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar
          title='Github Finder'
          icon='fab fa-github'
          style={{ paddingRight: `5px` }}
        />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
