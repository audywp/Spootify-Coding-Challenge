import {
  GET_CATEGORIES,
  GET_FEATURED_PLAYLIST,
  GET_NEW_RELEASE,
  SET_CATEGORIES,
  SET_FEATURED_PLAYLIST,
  SET_NEW_RELEASE,
} from './constant';

export const getNewRelease = (payload) => ({ type: GET_NEW_RELEASE, payload });
export const getCategories = (payload) => ({ type: GET_CATEGORIES, payload });
export const getFeaturedPlaylist = (payload) => ({ type: GET_FEATURED_PLAYLIST, payload });

export const setNewRelease = (payload) => ({ type: SET_NEW_RELEASE, payload });
export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const setFeaturedPlaylist = (payload) => ({ type: SET_FEATURED_PLAYLIST, payload });
