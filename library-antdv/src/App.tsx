import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageError from './components/Pages/PageError/PageError';
import TitlePage from './components/Pages/TitlePage/TitlePage';


const App: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<TitlePage/>}/>
      <Route path={"*"} element={<PageError/>}/>
    </Routes>
  );
};

export default App;
