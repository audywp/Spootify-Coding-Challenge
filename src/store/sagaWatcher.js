import { all } from 'redux-saga/effects';
import { DiscoverSaga } from '../pages/Discover/redux/saga';
import { SearchSaga } from '../pages/Search/redux/saga';

export function* sagaWatcher() {
  yield all([DiscoverSaga(), SearchSaga()]);
}
