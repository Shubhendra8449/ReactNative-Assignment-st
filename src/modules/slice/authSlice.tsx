
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
    'Authorization': 'Basic cmNjOnJjY0AxMjM='


  }
};
// authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';



const initialState = {
  loading: false,
  data: null,
  error: null,
};



// Thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string, password: string }, thunkAPI) => {
    try {
      
      console.log("cehckModel",email+"  "+password+"  "+loginConfig.headers.Authorization)
      const response = await axios.post(`${BASE_URL}/user/login`, { email, password }, loginConfig);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "An unknown error occurred");
    }
  }
);

// Thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData: any, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "An unknown error occurred");
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        console.log("responsefullfileed  ","pending")

        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
      console.log("responsefullfileed  ","fullf  "  +action.payload)

        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        console.log("responsefullfileed  ","fail  "  +action.payload)
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signupUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;



