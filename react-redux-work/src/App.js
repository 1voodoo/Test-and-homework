import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import Main from './main/Main';
import Repo from './main/repo/Repo';


const  App = () => {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/repo' element={<Repo/>} />
      <Route path='*' element={<Main/>} />
    </Routes>
  );
}

export default App;
