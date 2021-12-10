import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // Dispatch a type to the reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Moving functions from App JS and making use of Reducer and dispatch
  // setLoading is called it dispatches SET_LOADING to githubReducer.js file
  // Sending SEARCH_USER as the type, and response.data.items as the payload for users
  // Search User
  const searchUser = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // Get User

  // Get Repos

  // Clear Users

  // This function is called above and this dispatches SET_LOADING to githubReducer.js where state changes are made
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;