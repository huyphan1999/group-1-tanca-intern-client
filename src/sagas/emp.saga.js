import { take, fork, call, put } from 'redux-saga/effects'

// Our EMP actiontypes
import * as EMP from '../actionTypes/emp.actiontypes'

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
        console.log('Get in EMP  ' + target)
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


export function* getEmpWatchcer() {
    while (true) {

        console.log('Watching GET on EMP')

        const action = yield take([EMP.EMP_REQUESTING, EMP.EMP_DEL]);

        console.log('Watched  GET on EMP')

        yield fork(getFlow, action.target, action.url, action.id)

    }
}

export function* postEmpWatchcer() {
    while (true) {
        console.log('Watching POST on EMP')

        const action = yield take([EMP.EMP_ADD, EMP.EMP_EDIT])

        console.log('Watched  POST on EMP')

        yield fork(postFlow, action.newdata, action.target, action.url)

    }
}
