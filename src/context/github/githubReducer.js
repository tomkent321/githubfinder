import * as type from '../types';

export default (state, action) => {
  switch (action.type) {
    case type.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case type.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };

    case type.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case type.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case type.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };

    default:
      return state;
  }
};
