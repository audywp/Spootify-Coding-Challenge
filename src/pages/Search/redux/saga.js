import { call, all, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { request } from '../../../helpers/Api';
import { setLoading } from '../../../store/globalAction';
import { setSearchSongs } from './action';
import { SEARCH_SONGS } from './constant';

function* searchSongs({ payload }) {
  try {
    yield put(setLoading(true));
    if (payload.length) {
      const searchResult = { artists: {}, tracks: {} };
      const artist = yield call(request, `/search?q=${payload}&type=artist`);
      const track = yield call(request, `/search?q=${payload}&type=track`);
      console.log(track);
      if (artist.status === 200 && track.status === 200) {
        searchResult.artists = artist.data.artists;
        searchResult.tracks = track.data.tracks;
        yield put(setSearchSongs(searchResult));
      }
    } else {
      yield put(setSearchSongs({ artists: { items: [] }, tracks: { items: [] } }));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* SearchSaga() {
  yield all([yield takeEvery(SEARCH_SONGS, searchSongs)]);
}
