import { take, fork, call, put } from 'redux-saga/effects'

// Our COMPANY actiontypes
import * as COMPANY from '../actionTypes/company.actiontypes'

// So that we can modify our User piece of state

//Utils
import { postRequest, getRequest } from '../utils/request'
import { navigate } from '../utils/navigate';


function* postFlow(newdata, target, url) {

    try {
        const res = yield call(postRequest, url, newdata);
        yield put({ type: target + '_SUCCESS', newdata });

    } catch (error) {
        console.log(target)
        yield put({ type: target + '_ERROR', error })

    }
    // return the token 
    return true
}


function* getFlow(target, url, id) {

    try {
        console.log('Get in Company'+target)
        const res = yield call(getRequest, url, id);
        if (id) {
            var { data } = res
            yield put({ type: target + '_SUCCESS', data });

        } else {
            yield put({ type: target + '_REQUESTING', data })
        }

    } catch (error) {

        console.log(target)
        yield put({ type: target + '_ERROR', error })

    }

    return true
}


export function* getCompanyWatchcer() {
    while (true) {

        console.log('Watching GET on COMPANY')
        
        const action = yield take([COMPANY.BRANCH_REQUESTING,COMPANY.BRANCH_DEL,COMPANY.DEPT_DEL,COMPANY.DEPT_REQUESTING,COMPANY.POS_DEL,COMPANY.POS_REQUESTING]);
        
        console.log('Watched  GET on COMPANY')
        
        yield fork(getFlow, action.target, action.url, action.id)

    }
}

export function* postCompanyWatchcer() {
    while (true) {
        console.log('Watching POST on COMPANY')
       
        const action = yield take([COMPANY.BRANCH_ADD, COMPANY.BRANCH_EDIT, COMPANY.DEPT_ADD, COMPANY.DEPT_EDIT, COMPANY.POS_ADD, COMPANY.POS_EDIT])
      
        console.log('Watched  POST on COMPANY')
      
        yield fork(postFlow, action.newdata, action.target, action.url)
  
    }
}
