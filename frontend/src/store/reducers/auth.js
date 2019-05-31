import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../actions/action_types";

export default function auth(state = null, action) {
    switch (action.type) {
        case SIGN_IN:
            return action.payload.status === 200 ? { ...action.payload.data } : null
        case SIGN_UP:
            return action.payload.status === 200 ? { ...action.payload.data } : null
        case SIGN_OUT:
            return null;
        default:
            return state;
    }
}
