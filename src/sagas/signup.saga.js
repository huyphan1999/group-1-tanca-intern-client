import { call, put, takeLatest } from 'redux-saga/effects'
import {
    SIGNUP_REQUESTING,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../actionTypes/signup.actiontypes'

import { postRequest } from '../utils/request'

const signupUrl = 'https://reqres.in/api/register'

function* signupFlow(action) {
    try {
        const { email, password } = action

        const res = yield call(postRequest, loginUrl, {
            email,
            password
        });
        const { token } = res;
        yield put(setUSER(token))
        yield put({ type: SIGNUP_SUCCESS })
    } catch (error) {
        yield put({ type: SIGNUP_ERROR, error })
    }
}

export function* signupWatcher() {
    yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

