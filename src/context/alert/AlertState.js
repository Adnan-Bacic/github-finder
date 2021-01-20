import React, { useReducer } from 'react';
//import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT,
    
} from '../types'

//create inital state
const AlertState = props => {
    const initalState = null;

    const [state, dispatch] = useReducer(AlertReducer, initalState);

    //set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type}
        })

        //remove alert after some time
        setTimeout(() => dispatch({ type: REMOVE_ALERT}), 2000);
    }


    return <AlertContext.Provider
    //return the props
    value={{
        alert: state,
        setAlert
    }}

    >
    {props.children}
    </AlertContext.Provider>
}

export default AlertState;