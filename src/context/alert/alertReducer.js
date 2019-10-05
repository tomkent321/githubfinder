import * as type from '../types';

export default (state, action) => {
  switch (action.type) {
    case type.SET_ALERT:
      return action.payload;

    case type.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
