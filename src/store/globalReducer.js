import { SET_LOADING, SET_SELECTED_SIDEBAR, RESET_SIDE_BAR } from './globalAction';
import { faHeadphonesAlt, faHeart, faPlayCircle, faSearch, faStream } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  playedSong: '',
  loading: false,
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
      path: '/favourites',
      icon: faHeart,
      name: 'Favourites',
      isSelected: { selected: false },
    },
    {
      path: '/playlists',
      icon: faPlayCircle,
      name: 'Playlists',
      isSelected: { selected: false },
    },
    {
      path: '/charts',
      icon: faStream,
      name: 'Charts',
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
    case SET_SELECTED_SIDEBAR:
      const newSideBar = state.sidebar.map((val) => ({ ...val, isSelected: { selected: false } }));
      newSideBar[action.index].isSelected = { selected: true };
      return {
        ...state,
        sidebar: newSideBar,
      };

    default:
      return state;
  }
};

export default GlobalReducer;
