import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES } from './categories.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = categoriesArray =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFaild = error =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFaild(error));
  }
};
