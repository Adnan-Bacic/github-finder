import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
//import UserItem from './components/users/UserItem';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
//import axios from 'axios';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
//creating a state within a functional component and useState

//create a state as an object
/*
state = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  alert: null,
}
  */


  //lifecycle hook. right when the component loads
  /*
  async componentDidMount(){
    //changing state, must refer to the object. set loading to true before we get the users
    this.setState({ loading: true });

    const apiurl = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHIB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(apiurl);
    //console.log(res.data);

    //insert the res.data into the users array after we have gotten the data and set loading to false after we get users
    this.setState({ users: res.data, loading: false });

    /*
    fetch way of getting users
    const apiurl = 'https://api.github.com/users';
    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }
  */  


  

  //this is a method as part of the class
  //foo = () => 'Bar';

  //render() {
    /*
    const name = 'Adnan Bacic';
    const loading = false;
    const showName = false;
    */

    //if loading is set to true, we see the return content and nothing outside
    /*
    if(loading){
      return <h3>Loading</h3>
    }
    */
    //const { users, user, repos, loading } = this.state;
    return(
      //wrap around router
      <GithubState>
      <AlertState>
      {/* //wrap all content in router */}
      <Router basename="/folders/react/github-finder/">
        
      <div className="App">
        <Navbar title="Github finder" icon="fab fa-github"></Navbar>
        <div className="container">
          <Alert></Alert>
          {/* we want all routes in a switch */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* link to about page */}
            <Route exact path="/about" component={About}></Route>

            {/* link with param */}
            <Route exact path="/user/:login" component={User}></Route>

            <Route component={NotFound}></Route>

          </Switch>
        </div>
        {/*
        {ternary operators}
        {loading ? <h3>Loading</h3> : <h3>Hello { showName ? name : 'No name'}</h3>}

        {calling a method}
        <p>{ this.foo() }</p>
        */}
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  //}
}

export default App;
