import axios from "axios";
import { setRepos } from "../reducers/reposReduser";

export const getRepos = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        console.log(response.data);
        dispatch(setRepos(response.data))
        console.log(response.data);
    }
}