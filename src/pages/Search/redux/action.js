import { SEARCH_SONGS, SET_SEARCH_SONGS } from './constant';

export const searchSongs = (payload) => ({ type: SEARCH_SONGS, payload });
export const setSearchSongs = (payload) => ({ type: SET_SEARCH_SONGS, payload });
