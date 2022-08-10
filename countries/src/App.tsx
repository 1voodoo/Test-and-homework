import React, { FC } from 'react';
import style from './App.module.scss';
import Home from './components/page/Home/Home';

const App:FC = () => {
  return (
    <div className={style.app}>
      <Home/>
    </div>
  );
};

export default App;
