import React from 'react';
import {
  LOGIN,
  USER_LOGIN,
  USER_SIGNUP,
  SIGNUP,
  DASHBOARD,
  LOADING,
  NOTIFY,
  DASHBOARD_DATA,
  ROI_REVENUE,
  ROI_REVENUE_DATA,
  BINARY_REVENUE,
  BINARY_REVENUE_DATA,
  USER_ACCOUNT,
  USER_ACCOUNTDATA,
} from '../action';
import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../api';

function* login(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getLogin, action.payload);
    yield put({type: USER_LOGIN, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    console.log('else saga Login', e.response.data);
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
    yield put({type: USER_LOGIN, payload: e.response.data});
  }
}

function* signup(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getSignup, action.payload);
    yield put({type: USER_SIGNUP, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

function* getRoiRevnue(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getRoiRevenueApi, action.payload);
    yield put({type: ROI_REVENUE_DATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

function* getBinaryRevnue(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getBinaryRevenueApi, action.payload);
    yield put({type: BINARY_REVENUE_DATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

function* fetchDashboardData(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getDashboardData, action.payload);
    yield put({type: DASHBOARD_DATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

function* getUserData(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getUserData, action.payload);
    yield put({type: USER_ACCOUNTDATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

export function* rootSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(DASHBOARD, fetchDashboardData);
  yield takeLatest(ROI_REVENUE, getRoiRevnue);
  yield takeLatest(BINARY_REVENUE, getBinaryRevnue);
  yield takeLatest(USER_ACCOUNT, getUserData);
}
