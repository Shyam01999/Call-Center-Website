// src/redux/themeActions.js
// export const TOGGLE_THEME = 'TOGGLE_THEME';
// export const SET_THEME = 'SET_THEME';

import { SET_THEME, TOGGLE_THEME } from "../actionTypes";

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});