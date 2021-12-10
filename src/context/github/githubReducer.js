import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

// Reducer is a default function. Takes parameters state and action
export default (state, action) => {
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
