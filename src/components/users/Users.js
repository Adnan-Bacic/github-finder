import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
//import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);

    //destructure
    const { loading, users } = githubContext;

    if(loading){
        return <Spinner></Spinner>;
    } else {
        return (
            <div style={ userStyle }>
                {/* map() is a array ordering method.
                    each arrayindex will be represented by the user paramater

                    we have a console error telling us we need a unique key prop, so we use the user.id

                    because we use another file to display content we must have a prop, which is also the user
                */}
                {users.map(user => (
                    <UserItem key={user.id} userProp={user}></UserItem>
                ))}
            </div>
        )
    }
    
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
