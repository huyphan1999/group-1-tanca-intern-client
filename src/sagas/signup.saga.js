import { call, put, takeLatest } from 'redux-saga/effects'
import {
    SIGNUP_REQUESTING,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../actionTypes/signup.actiontypes'

import { LOGIN_SUCCESS } from '../actionTypes/login.actiontypes'

const signupUrl = 'https://reqres.in/api/register'

function signupApi(email, password) {
    return fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(json => json)
        .catch((error) => { throw error })
}

function* signupFlow(action) {
    try {
        const { email, password } = action

        const response = yield call(signupApi, email, password)
        yield put(setUser(response.token))
        yield put({ type: SIGNUP_SUCCESS })
        yield put({ type: LOGIN_SUCCESS })
    } catch (error) {
        yield put({ type: SIGNUP_ERROR, error })
    }
}

export function* signupWatcher() {
    yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

