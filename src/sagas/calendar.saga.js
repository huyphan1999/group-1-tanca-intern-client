import { call, put, takeLatest } from 'redux-saga/effects'
import {
    CALENDAR_REQUESTING,
    CALENDAR_SUCCESS,
    CALENDAR_ERROR,
} from '../actionTypes/calendar.actiontypes'

import { getRequest } from '../utils/request'

const calendarUrl = 'https://reqres.in/api/register'

function* getCalendarFlow() {
    try {
        const res = yield call(getRequest, calendarUrl);
        var {data}=res;

        yield put({ type: CALENDAR_SUCCESS,data })
    } catch (error) {
        yield put({ type: CALENDAR_ERROR, error })
    }
}

export function* calendarWatcher() {
    yield takeLatest(CALENDAR_REQUESTING, getCalendarFlow)
}

