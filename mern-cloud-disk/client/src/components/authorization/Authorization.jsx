import { useState } from 'react';
import Input from '../input/Input';
import style from './Authorization.module.scss';
import {useDispatch, useSelector} from "react-redux";
import { authorization } from '../../action/user';
import { logout } from '../../reducers/userReducer';

const Authorization = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    console.log(isAuth);

    return <>
        {!isAuth && (
            <div className={style.authorization}>
            <div className={style.authorization__header}>Авторизация</div>
            <Input value={email} setValue={setEmail} type='text' placeholder="Введите email..." />
            <Input value={password} setValue={setPassword}  type='password' placeholder="Введите password..." />
            <button className={style.authorization__btn} onClick={() =>  dispatch(authorization(email, password))}>Войти</button>   
        </div>
                    )
        }
        {isAuth &&<button className={style.authorization__btn} onClick={() => dispatch(logout())}>Выйти</button>}     
        </>   
};

export default Authorization;

