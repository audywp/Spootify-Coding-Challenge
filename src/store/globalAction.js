export const SET_LOADING = 'SET_LOADING';
export const SET_SELECTED_SIDEBAR = 'SET_SELECTED_SIDEBAR';

export const setLoading = (payload) => ({ type: SET_LOADING, payload });

export const setSelectedSidebar = (index) => ({ type: SET_SELECTED_SIDEBAR, index });
