import { call, put, takeLatest, all } from 'redux-saga/effects';
import { request } from '../../../helpers/Api';
import { setLoading } from '../../../store/globalAction';
import { setDetail } from './action';
import { GET_DETAIL } from './constant';

function* getDetailSaga({ payload, getType, callback = () => {} }) {
  try {
    yield put(setLoading(true));
    let res;
    let method = 'GET';
    if (getType !== 'categories') {
      const url = getType === 'artists' ? `/${getType}/${payload}/albums` : `/${getType}/${payload}`;
      res = yield call(request, url, method);
    } else {
      const detailBrowse = yield call(request, `/browse/${getType}/${payload}/`, method);
      const getPlaylist = yield call(request, `/browse/${getType}/${payload}/playlists`, method);
      res = { status: 200, data: { ...detailBrowse.data, ...getPlaylist.data } };
    }

    if (res.status === 200) {
      console.log({ res });
      yield put(setDetail(res.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* DetailSagaWorker() {
  yield all([yield takeLatest(GET_DETAIL, getDetailSaga)]);
}
