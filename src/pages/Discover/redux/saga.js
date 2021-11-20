import { call, all, put, takeLatest } from 'redux-saga/effects';
import { request } from '../../../helpers/Api';
import { DiscoverEndpoint } from '../endpoint';
import { setCategories, setFeaturedPlaylist, setNewRelease } from './action';
import {
  GET_CATEGORIES,
  GET_NEW_RELEASE,
  GET_FEATURED_PLAYLIST,
  SET_LOADING_NEW_RELEASE,
  SET_LOADING_FEATURED_PLAYLIST,
  SET_LOADING_CATEGORIES,
} from './constant';

function* getCategories({ payload = 20 }) {
  try {
    yield put({ type: SET_LOADING_CATEGORIES, payload: true });
    const categories = yield call(request, `${DiscoverEndpoint.categories}?limit=${payload}`, 'get');
    if (categories.status === 200) {
      yield put(setCategories(categories.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: SET_LOADING_CATEGORIES, payload: false });
  }
}

function* getNewRelease() {
  try {
    yield put({ type: SET_LOADING_NEW_RELEASE, payload: true });
    const newRelease = yield call(request, DiscoverEndpoint.newRelease, 'get');
    if (newRelease.status === 200) {
      yield put(setNewRelease(newRelease.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: SET_LOADING_NEW_RELEASE, payload: false });
  }
}

function* getFeaturedPlaylist() {
  try {
    yield put({ type: SET_LOADING_FEATURED_PLAYLIST, payload: true });
    const playlist = yield call(request, DiscoverEndpoint.featuredPlaylist, 'get');
    if (playlist.status === 200) {
      yield put(setFeaturedPlaylist(playlist.data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put({ type: SET_LOADING_FEATURED_PLAYLIST, payload: false });
  }
}

export function* DiscoverSaga() {
  yield all([
    yield takeLatest(GET_CATEGORIES, getCategories),
    yield takeLatest(GET_NEW_RELEASE, getNewRelease),
    yield takeLatest(GET_FEATURED_PLAYLIST, getFeaturedPlaylist),
  ]);
}
