import { SET_SEARCH_SONGS } from './constant';

const initialState = {
  search: { artists: { items: [] }, tracks: { items: [] } },
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_SONGS:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};

export default SearchReducer;
