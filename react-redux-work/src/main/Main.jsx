import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';

const Main = () => {
    
    const nuvigate = useNavigate();
    const handlerOnClick = () => {
        nuvigate('/repo')
    };
    const [user, setUser] = useState()
    console.log(user);
    const repos = useSelector(state => state.repos.items);

    useEffect(() => {
        setUser(getRepos())
    }, [])

    return (
        <div>
            {repos.map(repo => 
                <Repo repo={repo}/>
                )}
            <button onClick={handlerOnClick}>get</button>
        </div>
    );
};

export default Main;