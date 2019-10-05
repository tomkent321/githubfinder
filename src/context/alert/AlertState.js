import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import * as type from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, desc) => {
    dispatch({
      type: type.SET_ALERT,
      payload: { msg, desc }
    });
    // setAlerts(msg, type);

    setTimeout(() =>
      dispatch({
        type: type.REMOVE_ALERT
      }),
      3000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
