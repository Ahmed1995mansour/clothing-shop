import { USER_ACTIONS_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SING_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTIONS_TYPES.SIGN_UP_FAILD:
    case USER_ACTIONS_TYPES.SIGN_OUT_FAILD:
    case USER_ACTIONS_TYPES.SING_IN_FAILD:
      return { ...state, error: payload };

    default:
      return state;
  }
};
