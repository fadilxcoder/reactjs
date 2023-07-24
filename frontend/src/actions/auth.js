import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL 
} from './types';


// Register User

export const register = ({ name, email, phone_number, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, phone_number, password});

    try {
        const res = await axios.post('/', body, config);
        // console.log(res, res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert(res.data.statusText, 'success'));

    } catch (err) {
        console.error(err);

        const errors = err;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(err.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
}
