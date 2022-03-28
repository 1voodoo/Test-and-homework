import style from "./Input.module.scss";


const Input = (props) => {
    return (
        <input onChange={(event) => props.setValue(event.target.value)}
            value={props.value}
            className={style.input}
            type={props.type} 
            placeholder={props.placeholder}
        />
    );
};

export default Input;