import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/header.jpg'
import style from './Navbar.module.scss';
 
const Navbar = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/registration')
    }
    const handleOnClick1 = () => {
        navigate('/authorization')
    }
    return (
        <div className={style.navbar}>
            <div className={style.container}>
            <img src={Logo} alt='foto' className={style.navbar__logo} />
            <div className={style.header} >MERN CLOUD</div>
            <div className={style.login} onClick={handleOnClick1}>Войти</div>
            <div className={style.registration} onClick={handleOnClick}>Регистрация</div>
            </div>
            
        </div>
    );
};

export default Navbar;