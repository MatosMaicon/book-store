import api, { setToken } from './base'
import { getDecodedToken } from './token'

// Sends a POST request to /auth/sign-up on the server, with first name, last name, email & password registering the user and returning the JWT
export function signUp({ name, email, password }) {
  return api.post('/users', { name, email, password })
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
}

// Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials
export function signIn({ email, password }) {
  return api.post('/authenticate', { email, password })
    .then(res => {
      const token = res.data.token
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        alert("There was an error with your email or password. Please try again.")
      }
    })
}

export function signOut() {
  setToken(null)
}
