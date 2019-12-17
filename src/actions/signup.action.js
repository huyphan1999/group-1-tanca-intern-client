import { SIGNUP_REQUESTING } from '../actionTypes/signup.actiontypes'

const signupRequest = function signupRequest ({ email, password }) {
  return {
    type: SIGNUP_REQUESTING,
    email,
    password,
  }
}

export default signupRequest
