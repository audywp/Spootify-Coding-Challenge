import { LOGOUT } from '../../../store/globalAction';
import { SET_DETAIL, SET_SELECTED_DETAIL, RESET_DETAIL } from './constant';

const initialState = {
  detail: {},
  selectedDetail: {},
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;

    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SET_SELECTED_DETAIL:
      return {
        ...state,
        selectedDetail: action.payload,
      };
    case RESET_DETAIL:
      return {
        detail: {},
      };
    default:
      return state;
  }
};

export default DetailReducer;
