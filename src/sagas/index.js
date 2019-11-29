import {spawn} from 'redux-saga/effects';
import {watchAppInitial} from './app.saga';

function* rootSaga() {
  yield spawn(watchAppInitial);
}
export default rootSaga;
