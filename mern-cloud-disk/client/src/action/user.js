import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registrtation = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registartion', {
            email,
            password
        })
        alert(response.data.massage)
    } catch (e) {
        alert(e.response.data.massage);
    }
 
}
export const authorization =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.massage);
        }
    }  
}
export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth',
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.massage);
            localStorage.removeItem('token')
        }
    }  
}
