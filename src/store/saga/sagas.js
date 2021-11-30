import React from 'react';
import {
  NEWS_LIST,
  NEWS_LIST_DATA
} from '../action';
import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../api';

function* fetchNewsTitle(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getNewsList, action.payload);
    yield put({type: NEWS_LIST_DATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
   // console.log('FetchListSaga', e.response.data);
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

export function* rootSaga() {
  yield takeLatest(NEWS_LIST, fetchNewsTitle);
}
