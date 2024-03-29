import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALL_REQUEST } from '../actions/asyncActions'

// Watcher Saga
// Listens the API_CALL_REQUEST actions
export function* watcherSaga() {
    // Listens the asctions and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// WORKER SAGA
// Is Colled for Watcher Saga, does the login and dispatch an action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request))
        // We obtain the token from response
        const token = response.data.token
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request) {
    return function() {
        return (axios(request))
    }
}