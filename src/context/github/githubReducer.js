import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

// Reducer is a default function. Takes parameters state and action
const GithubReducer = (state, action) => {
  // When object is dispatched to reducer from GithubState, it has a type and payload. We want get type and do something with it.
  // Using JS switch statements
  // We cannot directly change the state. We will copy it with < ...state > Spread operator, make changes and dispatch it
  // Setting loading to true for the SET_LOADING passed from github state

  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default GithubReducer;
