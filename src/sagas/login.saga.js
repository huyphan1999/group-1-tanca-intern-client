import { take, fork, cancel, call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import { SwitchActions } from 'react-navigation';
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

//Utils
import { setToken, unsetToken } from '../utils/token';
import { postRequest } from '../utils/request'
import { USER_UNSET } from '../actionTypes/user.actiontypes'
import {navigate} from '../utils/navigate';

const loginUrl = 'https://reqres.in/api/login';

function* logout() {
  // dispatches the User_UNSET action
  yield put(unsetUSER())
}

function* loginFlow(email, password) {

  try {
    const res = yield call(postRequest, loginUrl, {
      name:email,
      phone_number:password
    });
    yield console.log(`Reponse:${res}`);

    const { data } = res;

    yield console.log(`Token:${token}`);

    yield put(setUSER(data));

    setToken(data.token);

    yield put({ type: LOGIN_SUCCESS});

    navigate('Home')

  } catch (error) {
console.log(error)

    yield put({ type: LOGIN_ERROR, error })

  }

  // return the token 
  return token
}


export function* loginWatchcer() {
  while (true) {
    console.log('Watching LOGIN')
    const { email, password } = yield take(LOGIN_REQUESTING)
    console.log('Watched LOGIN')
    console.log({ email, password })
    yield fork(loginFlow, email, password)
  }
}
