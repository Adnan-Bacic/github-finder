import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GitgubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

let githubClientID;
let githubClientSecret;
//check if its production mode for the secret variables
if(process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GITHIB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientID = process.env.GITHIB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

//create inital state
const GithubState = props => {
    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(GitgubReducer, initalState);

    //search users
    const searchUsers = async (text) => {
        //console.log(text);
        //call new function
        setLoading(true);
        const apiurl = `https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`;
        const res = await axios.get(apiurl);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      }

    //get user
    const getUser = async (username) => {
        setLoading(true);
        const apiurl = `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`;
        const res = await axios.get(apiurl);
    
        dispatch({
            type: GET_USER,
            payload: res.data
        })
      }

    //get repos
    const getUserRepos = async (username) => {
    setLoading(true);
    const apiurl = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`;
    const res = await axios.get(apiurl);

    dispatch({
        type: GET_REPOS,
        payload: res.data
    })
  }

    //clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS});

    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
    //return the props
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}

    >
    {props.children}
    </GithubContext.Provider>
}

export default GithubState;