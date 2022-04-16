import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PageError: FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/');
    };
    return (<>
            <button onClick={handleOnClick}>Home</button>
            <div>Error</div>
        </>);
};

export default PageError;