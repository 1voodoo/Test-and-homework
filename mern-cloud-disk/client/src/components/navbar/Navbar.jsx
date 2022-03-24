import Logo from '../../assets/img/header.jpg'
import style from './Navbar.module.scss';
 
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={Logo} alt='foto' className={style.logo} />
            <div className={style.header} >MERN CLOUD</div>
            <div className={style.Login}>Войти</div>
            <div className={style.registration}>Регистрация</div>
        </div>
    );
};

export default Navbar;