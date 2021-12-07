import { combineReducers } from 'redux';
import Discover from '../pages/Discover/redux/reducer';
import Search from '../pages/Search/redux/reducer';
import Global from './globalReducer';
import Detail from '../pages/DetailPages/redux/reducer';
const newVariable = 'asd';
export const allReducers = combineReducers({
  Global,
  Discover,
  Search,
  Detail,
});
