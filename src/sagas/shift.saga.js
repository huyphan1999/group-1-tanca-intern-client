import { take, fork, call, put } from 'redux-saga/effects'

// Our SHIFT actiontypes
import * as SHIFT from '../actionTypes/shift.actiontypes'

// So that we can modify our User piece of state

//Utils
import { postRequest, getRequest } from '../utils/request'
import { navigate } from '../utils/navigate';


function* postFlow(newdata, target, url) {

    try {
        const res = yield call(postRequest, url, newdata);
        yield put({ type: target + '_REQUESTING' })
    } catch (error) {
        console.log(target)
        yield put({ type: target + '_ERROR', error })

    }
    // return the token 
    return true
}


function* getFlow(target, url, id) {

    try {
        console.log('Get in SHIFT  ' + target)
        const res = yield call(getRequest, url, id);
        if (id) {
            var { data } = res
            yield put({ type: target + '_SUCCESS', data });

        } else {
            yield put({ type: target + '_REQUESTING' })
        }

    } catch (error) {

        console.log(target)
        yield put({ type: target + '_ERROR', error })

    }

    return true

}


export function* getShiftWatchcer() {
    while (true) {

        console.log('Watching GET on SHIFT')

        const action = yield take([SHIFT.SHIFT_REQUESTING, SHIFT.SHIFT_DEL]);

        console.log('Watched  GET on SHIFT')

        yield fork(getFlow, action.target, action.url, action.id)

    }
}

export function* postShiftWatchcer() {
    while (true) {
        console.log('Watching POST on SHIFT')

        const action = yield take([SHIFT.SHIFT_ADD, SHIFT.SHIFT_EDIT])

        console.log('Watched  POST on SHIFT')

        yield fork(postFlow, action.newdata, action.target, action.url)

    }
}
