import { all } from 'redux-saga/effects';
import { watchAppInitial } from './app.saga';
import { loginWatchcer } from './login.saga';
import { signupWatcher } from './signup.saga';
import { postCompanyWatchcer, getCompanyWatchcer } from './company.saga';
import { timekeepWatcher } from './timekeep.saga';
import { getShiftWatchcer, postShiftWatchcer } from './shift.saga';
import {postEmpWatchcer,getEmpWatchcer} from './emp.saga';
import {inWatcher} from './in.saga';

function* rootSaga() {
  yield all([
    loginWatchcer(),
    watchAppInitial(),
    signupWatcher(),
    getCompanyWatchcer(), postCompanyWatchcer(),
    timekeepWatcher(),
    getShiftWatchcer(), postShiftWatchcer(),
    postEmpWatchcer(),getEmpWatchcer(),
    inWatcher()
  ])
}
export default rootSaga;
