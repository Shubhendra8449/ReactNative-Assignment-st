

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  IS_LOGIN,
} from './actionTypes';

//initializing axios
const axios = require("axios").default;
const BASE_URL = "https://infiniteviewdevapi.appskeeper.in/api/v1/";


const loginConfig = {
  headers: {
  'device_type': '1',
   'device_token': 'device_token',
    'device_id': '1234',
    'offset': '1',
    'api_key': '1234',
   


  }
};

// Login Action
export const loginUser = (email: string, password: string) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    console.log("response",`${email+"  "+password +"   "+loginConfig+"    "+BASE_URL}`)
    const response = await axios.post(`${BASE_URL}/user/login`, { email, password },loginConfig);
    if (response.data) {
      // console.log('====================================');
      // console.log(response.data);
      // console.log('====================================');
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: "An unknown error occurred" });
    }
  }
};


export const saveLogin = (isLogin:Boolean) => (dispatch: (arg0: { type: string; payload: Boolean; }) => void) => {
  dispatch({
    type: IS_LOGIN,
    payload: isLogin
  });
};