import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../actions/action_types";

export default function auth(state = {}, action) {
    switch (action.type) {
        case SIGN_IN:
            return { ...action.auth };
        case SIGN_UP:
            return { ...action.auth };
        case SIGN_OUT:
            return {};
        default:
            return state;
    }
}
