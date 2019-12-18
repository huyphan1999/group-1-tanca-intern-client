import {
  LOGIN_REQUESTING,
} from '../actionTypes/login.actiontypes'


export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
  }
}

export const loginSuccess = () => {}