import { getValidToken } from './authUser'

export default function authHeader() {
    // return authorization header with jwt token
    let token = getValidToken()

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}