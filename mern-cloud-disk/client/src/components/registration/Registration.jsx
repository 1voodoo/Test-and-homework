
import { useState } from 'react';
import { registrtation } from '../../action/user';
import Input from '../input/Input';
import style from './Registration.module.scss';

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={style.registration}>
            <div className={style.registration__header}>Регистрация</div>
            <Input value={email} setValue={setEmail} type='text' placeholder="Введите email..." />
            <Input value={password} setValue={setPassword}  type='password' placeholder="Введите password..." />
            <button className={style.registration__btn} onClick={() => registrtation(email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;