import api from './base'

import { toastr } from 'react-redux-toastr'

// Sends a POST request to /auth/sign-up on the server, with first name, last name, email & password registering the user and returning the JWT
export function save({ name, email, password }) {
  return api.post('/users', { name, email, password })
    .then(res => {
      return res
    })
    .catch(res => {
      toastr.error('Error', "Internal error.")
      return Promise.reject(res);
    })
}

// Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials
export function login({ email, password }) {
  return api.post('/authenticate', { email, password })
    .then(res => {
      return res
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        toastr.error('Error', "There was an error with your email or password. Please try again.")
        return Promise.reject(res);
      }
    })
}
