import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import Saga from 'redux-saga';
import { allReducers } from './allReducers';
import storage from 'redux-persist/lib/storage';
import { sagaWatcher } from './sagaWatcher';

const persistConfig = {
  key: 'spotify',
  storage,
  timeout: null,
};

const SagaMiddleware = Saga();

const middleware = applyMiddleware(logger, SagaMiddleware);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const Store = createStore(persistedReducer, {}, middleware);
export const Persistor = persistStore(Store);

SagaMiddleware.run(sagaWatcher);
