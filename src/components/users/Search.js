import React, { useState, useContext } from 'react'
//import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

//destructure
const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    //destructure
    const [text, setText] = useState('');

    //we must set an onchange event to the input or else we cant type in it
    //when the input changes, the state.text gets set to the value of the input
    const inputOnChange = (e) => {
        //e.target.name means that we target the targeted input
        //else we have to define the name of the input, for every input
        //this.setState({ [e.target.name]: e.target.value })
        //now we pass the the setText function
        setText(e.target.value);
    };

    const formOnSubmit = (e) => {
        //prevent default submit behavior
        e.preventDefault();
        //console.log(this.state.text);
        if(text === ''){
            //here we set the values which will be given to the alert.
            alertContext.setAlert('Please enter something', 'light');
        } else {
            //make the search a prop and set the input to empty
            githubContext.searchUsers(text);
            setText('');
        }
    };

    //render() {
        //destructuring
        //const { showClearProp, clearUsersProp } = this.props;

        return (
            <div>
                <form onSubmit={formOnSubmit} className="form">
                    <input type="text" value={text} onChange={inputOnChange} name="text" placeholder="Search users"/>
                    <button type="submit" className="btn btn-dark btn-block">Search</button>
                </form>
                {/* only show if users have been searched for successfuly */}
                {githubContext.users.length > 0 && (
                    <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear search</button>
                )}
                
            </div>
        )
    //}
}

export default Search
