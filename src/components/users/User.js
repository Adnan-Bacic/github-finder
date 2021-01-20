import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

//destructure
const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    //add from the context
    const { getUser, loading, user, repos, getUserRepos} = githubContext;

    //useeffect runs on an update
    useEffect(() => {
        //get user prop and match it with the :login from app.js
        getUser(match.params.login);

        //user repos
        getUserRepos(match.params.login);

        //to stop infinite useEffect loop: []
        //eslint-disable-next-line
    }, []);


    /*
    componentDidMount(){
        //get user prop and match it with the :login from app.js
        this.props.getUser(match.params.login);

        //user repos
        this.props.getUserRepos(match.params.login);
    }
    */

    //render() {
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        //const { loading, repos } = this.props;

        //show spinner while fetching
        if(loading) return <Spinner></Spinner>;

        return(
        <Fragment>
            <Link to='/' className="btn btn-light">Back to search</Link>
            Hireable: {' '}
            {/* if statement */}
            {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{ width: '150px' }} alt={`Github user ${name}`}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {/* if statement /*/}
                    {bio && ( <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark my-1">Visit github profile</a>
                    {/* if statements */}
                    <ul>
                        <li>
                            {login &&
                            <Fragment>
                                Username: {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company &&
                            <Fragment>
                                Company: {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog &&
                            <Fragment>
                                Website: {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public repos: {public_repos}</div>
                <div className="badge badge-dark">Public gists: {public_gists}</div>
            </div>
            {/* repos component and padding the repos */}
            <Repos repos={repos}></Repos>
        </Fragment>
        )
        
    //}
}

export default User;
