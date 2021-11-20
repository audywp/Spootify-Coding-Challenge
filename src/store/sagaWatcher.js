import { all, takeLatest } from 'redux-saga/effects';
import { DiscoverSaga } from '../pages/Discover/redux/saga';
import { SearchSaga } from '../pages/Search/redux/saga';
import { Auth } from './authSaga';

export function* sagaWatcher() {
  yield all([DiscoverSaga(), SearchSaga(), Auth()]);
}
