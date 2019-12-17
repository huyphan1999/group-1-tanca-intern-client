import { take, fork, cancel, call, put } from 'redux-saga/effects'
// Our login actiontypes
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actionTypes/login.actiontypes'

// So that we can modify our User piece of state
import {
  setUSER,
  unsetUSER,
} from '../actions/user.action'

import { setToken, unsetToken } from '../utils/request';
import { postRequest } from '../utils/request'
import {
  USER_UNSET,
} from '../actionTypes/user.actiontypes'

const loginUrl = 'http://p1.tanca.vn/api/auth/login';

function* logout() {
  // dispatches the User_UNSET action
  yield put(unsetUSER())
}

function* loginFlow(email, password) {

  try {
    const res = yield call(postRequest, loginUrl, {
      email,
      name: password
    });
    const { json, response } = res;
    var token = json.token
    console.log(token)
    yield put(setUSER(token))
    yield put({ type: LOGIN_SUCCESS })
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error })
  }

  // return the token for health and wealth
  return token
}



export function* loginWatchcer() {
  while (true) {

    console.log('Watching')
    const { email, password } = yield take(LOGIN_REQUESTING)
    console.log('Watched')
    console.log({ email, password })
    yield fork(loginFlow, email, password)
  }
}
