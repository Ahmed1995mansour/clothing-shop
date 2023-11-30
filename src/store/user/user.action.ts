import { User } from 'firebase/auth';
import { AdditionalInformation, UserData } from '../../utils/firebase/firebase.utils';
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS_TYPES } from './user.types';

export type CheckUserSession = Action<USER_ACTIONS_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<USER_ACTIONS_TYPES.SET_CURRENT_USER, UserData>;

export type GoogleSignInStart = Action<USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<USER_ACTIONS_TYPES.SING_IN_SUCCESS, UserData>;

export type SignInFaild = ActionWithPayload<USER_ACTIONS_TYPES.SING_IN_FAILD, Error>;

export type SignUpStart = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTIONS_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_UP_FAILD, Error>;

export type SignOutStart = Action<USER_ACTIONS_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFaild = ActionWithPayload<USER_ACTIONS_TYPES.SIGN_OUT_FAILD, Error>;

export const checkUSerSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser => createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTIONS_TYPES.SING_IN_SUCCESS, user)
);

export const signInFaild = withMatcher(
  (error: Error): SignInFaild => createAction(USER_ACTIONS_TYPES.SING_IN_FAILD, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_START, { email, password, displayName })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILD, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTIONS_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFaild = withMatcher(
  (error: Error): SignOutFaild => createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILD, error)
);
