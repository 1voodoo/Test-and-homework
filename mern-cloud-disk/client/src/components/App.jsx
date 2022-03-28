import Navbar from "./navbar/Navbar";
import style from './App.module.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./registration/Registration";
import Authorization from "./authorization/Authorization";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../action/user";


const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, []);

  return (
    <BrowserRouter>
      <div className={style.app}>
        <Routes>  
          <Route path="/" element={ <Navbar/>}/>
          <Route path="/registration" element={ <Registration/>}/>
          <Route path="/authorization" element={<Authorization/>}/>          
        </Routes>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
