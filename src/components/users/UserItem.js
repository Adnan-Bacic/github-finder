import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

 //destructure
 const UserItem = ({ userProp: { login, avatar_url, html_url }}) => {

        //destructure - pulls out values
        //we dont use this.state anymore
        //now we use this.props.userProp - this is the name of the prop from Users.js
        //const {login, avatar_url, html_url} = props.userProp;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}></img>
                <h3>{login}</h3>

                <div>
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm my-1">Github profile</a>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                        More info
                    </Link>
                </div>
            </div>
        )
    
}

//define proptypes
UserItem.propTypes = {
    userProp: PropTypes.object.isRequired,
}

export default UserItem
