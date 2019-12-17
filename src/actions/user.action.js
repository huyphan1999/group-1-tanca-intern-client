import { USER_SET, USER_UNSET } from '../actionTypes/user.actiontypes'


export function setUSER (token) {
  return {
    type: USER_SET,
    token,
  }
}

export function unsetUSER () {
  return {
    type: USER_UNSET,
  }
}
