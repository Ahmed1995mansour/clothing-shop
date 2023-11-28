import { CATEGORIES_ACTIONS_TYPES } from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return { ...state, categoriesArray: payload };

    default:
      return state;
  }
};
