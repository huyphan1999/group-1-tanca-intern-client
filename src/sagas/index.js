import { all } from 'redux-saga/effects';
import { watchAppInitial } from './app.saga';
import { loginWatchcer } from './login.saga';
import { signupWatcher } from './signup.saga';

function* rootSaga() {
  yield all([
    loginWatchcer(),
    watchAppInitial(),
    signupWatcher()
  ])
}
export default rootSaga;
