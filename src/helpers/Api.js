import axios from 'axios';
import config from '../config';
import cogoToast from 'cogo-toast';
import { call, select, put } from 'redux-saga/effects';
import { setIsLogged } from '../store/globalAction';
import { getAuth } from '../store/authSaga';

export function* request(endpoint = '', method, body, options) {
  try {
    const access_token = yield select((state) => state.Global.access_token);
    const isLogged = yield select((state) => state.Global.isLogged);
    let headers = {};

    if (access_token.length) {
      headers = {
        Authorization: `Bearer ${access_token}`,
        ...options,
      };
    } else {
      headers = {
        ...options,
      };
    }

    const endpointGenerator = () => {
      if (endpoint.includes('http') || endpoint.includes('https')) {
        return endpoint;
      } else {
        return `${config.api.baseUrl}${endpoint}`;
      }
    };
    let endpointUrl = endpointGenerator();

    const res = yield call(axios, {
      method,
      url: endpointUrl,
      data: body,
      headers,
      validateStatus: (status) => status < 500,
    });

    console.log({ res });
    if (res.status === 200) {
      return { status: res.status, data: res.data };
    }

    if (res.status === 403) {
      yield getAuth();
      window.location.reload();
    }

    if (res.status === 401) {
      if (isLogged) {
        cogoToast.warn(res.data.error.message);
      }
      yield put(setIsLogged(false));
      return { status: res.status, data: res };
    }

    if (res.status === 400) {
      cogoToast.error(res.data.error.message);

      return { status: res.status, data: res };
    }
  } catch (error) {
    console.log(error);
  }
}
