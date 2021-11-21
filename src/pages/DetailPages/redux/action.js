import { GET_DETAIL, RESET_DETAIL, SET_DETAIL, SET_SELECTED_DETAIL } from './constant';

export const getDetail = (payload, getType, callback) => ({ type: GET_DETAIL, payload, getType, callback });
export const setDetail = (payload) => ({ type: SET_DETAIL, payload });
export const setSelectedDetail = (payload) => ({ type: SET_SELECTED_DETAIL, payload });

export const resetDetail = () => ({ type: RESET_DETAIL });
