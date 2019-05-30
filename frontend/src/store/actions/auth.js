import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./action_types";
import { save, login } from '../../services/users'

export const signIn = (form) => async (dispatch) => {
    let response = await login(form);
    dispatch({
        type: SIGN_IN,
        auth: response
    });
}

export const signUp = (form) => async (dispatch) => {
    let response = await save(form);
    dispatch({
        type: SIGN_UP,
        auth: response.data
    });
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}