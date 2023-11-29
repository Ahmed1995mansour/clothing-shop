import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS_TYPES } from './user.types';

export const setCurrentUser = user => createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);

export const checkUSerSession = () => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = user => createAction(USER_ACTIONS_TYPES.SING_IN_SUCCESS, user);

export const signInFaild = error => createAction(USER_ACTIONS_TYPES.SING_IN_FAILD, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = error => createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILD, error);

export const SignOutStart = () => createAction(USER_ACTIONS_TYPES.SIGN_OUT_START);

export const SignOutSuccess = () => createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS);

export const SignOutFaild = error => createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILD, error);
