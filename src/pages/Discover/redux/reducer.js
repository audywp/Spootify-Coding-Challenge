import {
  SET_NEW_RELEASE,
  SET_FEATURED_PLAYLIST,
  SET_CATEGORIES,
  SET_LOADING_CATEGORIES,
  SET_LOADING_FEATURED_PLAYLIST,
  SET_LOADING_NEW_RELEASE,
} from './constant';

import { LOGOUT } from '../../../store/globalAction';

const initialState = {
  newReleases: { albums: { items: [] } },
  newReleaseLoading: false,
  playlists: { playlists: { items: [] } },
  playlistsLoading: false,
  categories: { categories: { items: [] } },
  categoriesLoading: false,
};

const DiscoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_RELEASE:
      return { ...state, newReleases: action.payload };

    case SET_FEATURED_PLAYLIST:
      return { ...state, playlists: action.payload };

    case SET_CATEGORIES:
      return { ...state, categories: action.payload };

    case SET_LOADING_CATEGORIES:
      return { ...state, categoriesLoading: action.payload };

    case SET_LOADING_FEATURED_PLAYLIST:
      return { ...state, playlistsLoading: action.payload };

    case SET_LOADING_NEW_RELEASE:
      return { ...state, newReleaseLoading: action.payload };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default DiscoverReducer;
