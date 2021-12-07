import { all } from 'redux-saga/effects';
import { DetailSagaWorker } from '../pages/DetailPages/redux/saga';
import { DiscoverSaga } from '../pages/Discover/redux/saga';
import { SearchSaga } from '../pages/Search/redux/saga';
import { Auth } from './authSaga';

export function* sagaWatcher() {
  yield all([DiscoverSaga(), SearchSaga(), Auth(), DetailSagaWorker()]);
}
