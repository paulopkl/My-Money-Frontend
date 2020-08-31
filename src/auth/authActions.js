import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../main/consts';

const login = values => {
    return submit(values, `${consts.OAPI_URL}/login`)
}

const signup = values => {
    return submit(values, `${consts.OAPI_URL}/signup`);
}

const logout = () => {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

const validateToken = token => {
    return dispatch => {
        if (token) {
            axios.post(`${consts.OAPI_URL}/validatetoken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid });
                })
                .catch(err => dispatch({ type: 'TOKEN_VALIDATED', payload: false }));
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false });
        }
    }
}

const submit = (values, url) => {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ]);
            })
            .catch(error => {
                error.response.data.errors.forEach(err => {
                    return toastr.error('Error', err);
                });
            })
    }
}

export { login, signup, logout, submit, validateToken }