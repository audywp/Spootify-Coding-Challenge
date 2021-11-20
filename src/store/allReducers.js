import { combineReducers } from 'redux';
import Discover from '../pages/Discover/redux/reducer';
import Search from '../pages/Search/redux/reducer';
import Global from './globalReducer';

export const allReducers = combineReducers({
  Global,
  Discover,
  Search,
});
