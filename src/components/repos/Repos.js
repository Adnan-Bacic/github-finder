import React from 'react'
import PropTopes from 'prop-types'
import RepoItem from './RepoItem'

export const Repos = ({ repos }) => {
    //loop through the repos and display the component and pass the individual repo
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />) 
}

//define props
Repos.propTopes = {
    repos: PropTopes.array.isRequired
}

export default Repos