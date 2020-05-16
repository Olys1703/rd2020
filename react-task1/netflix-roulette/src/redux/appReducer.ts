import { SHOW_LOADER, HIDE_LOADER } from './types';
const initialState = {
  loading: false,
};
const initAction = {
  type: '__INIT__',
  payload: {},
};
export const appReducer = (state = initialState, action: any = initAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
