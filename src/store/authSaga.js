import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../helpers/Api';
import { DO_LOGIN, setAccessToken, setIsLogged, GET_PROFILE, setUserProfile, getProfile } from './globalAction';
import Config from '../config';
import QueryString from 'qs';
import axios from 'axios';

const { REACT_APP_REDIRECT_URI } = process.env;
const { clientId, clientSecret, authUrl } = Config.api;

function* sagaLogin({ payload, callback = () => {} }) {
  try {
    const body = QueryString.stringify({
      grant_type: 'authorization_code',
      code: payload,
      redirect_uri: REACT_APP_REDIRECT_URI,
    });
    const res = yield call(request, authUrl, 'POST', body, {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64'),
    });

    if (res.status === 200) {
      yield put(setIsLogged(true));
      yield put(setAccessToken({ access_token: res.data.access_token, refresh_token: res.data.refresh_token }));
      yield put(getProfile());
      callback();
    } else {
      yield put(setIsLogged(false));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getProfileSaga() {
  try {
    const res = yield call(request, '/me', 'GET');
    if (res.status === 200) {
      yield put(setUserProfile(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getAuth() {
  try {
    const authToken = new Buffer(Config.api.clientId + ':' + Config.api.clientSecret).toString('base64');
    const auth = yield call(axios, {
      url: Config.api.authUrl,
      method: 'POST',
      data: QueryString.stringify({ grant_type: 'client_credentials' }),
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      validateStatus: (status) => status < 500,
    });
    if (auth.status === 200) {
      yield put(setAccessToken({ access_token: auth.data.access_token, refresh_token: '' }));
      yield put(setIsLogged(true));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* Auth() {
  yield takeLatest(DO_LOGIN, sagaLogin);
  yield takeLatest(GET_PROFILE, getProfileSaga);
}
