import { call, put, takeLatest } from 'redux-saga/effects'
import {
    IN_REQUESTING,
    IN_SUCCESS,
    IN_ERROR,
} from '../actionTypes/in.actiontypes'

import { USER_IN,USER_OUT} from '../actionTypes/user.actiontypes';

import { getRequest } from '../utils/request'

const inOutUrl = 'https://reqres.in/api/register'

function* inFlow() {
    try {

        yield call(getRequest, inOutUrl);
        yield put({ type: IN_SUCCESS })
        yield put({type:USER_IN})
        
    } catch (error) {
        yield put({ type: IN_ERROR, error })
        yield put({USER_OUT})
    }
}


export function* inWatcher() {
    yield takeLatest(IN_REQUESTING, inFlow)
}

