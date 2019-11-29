import {put, takeEvery} from 'redux-saga/effects';
import {INITIALIZE_APP} from '../actionTypes/app.actiontypes';

function* initializeApp() {
  console.log('Hello Sagas!');
}

export function* watchAppInitial() {
  yield takeEvery(INITIALIZE_APP, initializeApp);
}
