import {
  SET_LOADING,
  SET_SELECTED_SIDEBAR,
  SET_ACCESS_TOKEN,
  SET_ISLOGGED,
  SET_AUTHORIZATION_CODE,
  SET_USER_PROFILE,
  LOGOUT,
  PLAY_SONG,
  SET_IS_PLAYING,
} from './globalAction';
import { faHeadphonesAlt, faPlayCircle, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  playedSong: {},
  isPlaying: false,
  loading: false,
  isLogged: false,
  access_token: '',
  refresh_token: '',
  authorizationCode: '',
  userProfile: {},
  sidebar: [
    {
      path: '/',
      icon: faHeadphonesAlt,
      name: 'Discover',
      isSelected: { selected: true },
    },
    {
      path: '/search',
      icon: faSearch,
      name: 'Search',
      isSelected: { selected: false },
    },
    {
      path: '/playlists',
      icon: faPlayCircle,
      name: 'Playlists',
      isSelected: { selected: false },
    },
    {
      path: '/',
      icon: faSignOutAlt,
      name: 'Logout',
      isLogout: true,
      isSelected: { selected: false },
    },
  ],
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case PLAY_SONG:
      return {
        ...state,
        playedSong: action.payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_AUTHORIZATION_CODE:
      return {
        ...state,
        authorizationCode: action.payload,
      };
    case SET_SELECTED_SIDEBAR:
      const newSideBar = state.sidebar.map((val) => ({ ...val, isSelected: { selected: false } }));
      newSideBar[action.index].isSelected = { selected: true };
      return {
        ...state,
        sidebar: newSideBar,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
      };
    case SET_ISLOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default GlobalReducer;
