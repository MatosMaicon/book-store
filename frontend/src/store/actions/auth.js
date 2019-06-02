import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./action_types";
import { save, login } from '../../services/users'

export const signIn = (form) => async (dispatch) => {
    await login(form)
        .then(res => {
            dispatch({
                type: SIGN_IN,
                payload: res.data
            })

            return Promise.resolve()
        })
        .catch(err => {
            dispatch({
                type: SIGN_OUT
            })

            return Promise.reject(err)
        });
}

export const signUp = (form) => async (dispatch) => {
    await save(form)
        .then(res => {
            dispatch({
                type: SIGN_UP,
                payload: res.data
            })

            return Promise.resolve()
        })
        .catch(err => {
            return Promise.reject(err)
        });
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}