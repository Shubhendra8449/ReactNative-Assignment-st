import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  IS_LOGIN,
} from './actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
  isLogin: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case IS_LOGIN:
      return { ...state, isLogin: action.payload };

    default:
      return state;
  }
};

export default authReducer;
