export const SET_LOADING = 'SET_LOADING';
export const SET_SELECTED_SIDEBAR = 'SET_SELECTED_SIDEBAR';
export const SET_ISLOGGED = 'SET_ISLOGGED';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_AUTHORIZATION_CODE = 'SET_AUTHORIZATION_CODE';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const DO_LOGIN = 'DO_LOGIN';
export const PLAY_SONG = 'PLAY_SONG';
export const GET_PROFILE = 'GET_PROFILE';

export const LOGOUT = 'LOGOUT';

export const setLoading = (payload) => ({ type: SET_LOADING, payload });

export const setSelectedSidebar = (index) => ({ type: SET_SELECTED_SIDEBAR, index });

export const setIsLogged = (payload) => ({ type: SET_ISLOGGED, payload });

export const setAuthorizationCode = (payload) => ({ type: SET_AUTHORIZATION_CODE, payload });

export const setAccessToken = (payload) => ({ type: SET_ACCESS_TOKEN, payload });

export const setUserProfile = (payload) => ({ type: SET_USER_PROFILE, payload });

export const doLogin = (payload, callback) => ({ type: DO_LOGIN, payload, callback });

export const getProfile = (payload) => ({ type: GET_PROFILE, payload });

export const playSong = (payload) => ({ type: PLAY_SONG, payload });

export const logout = () => ({ type: LOGOUT });
