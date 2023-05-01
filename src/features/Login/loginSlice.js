import { createAsyncThunk,  createSlice} from "@reduxjs/toolkit";
import {login} from "../../Services/apiServices"

export const loginAction = createAsyncThunk(
  "userLoginAction",
  async (body, {rejectWithValue}) => {
    try{
      const response = await login(body);
      return response;
    }
    catch({response}){
      return rejectWithValue(response)
    }
  }
)

const loginActionSlice = createSlice({
  "name" : "userLoginManagement",
  initialState:{
    fetching: false,
    fetched: false,
    data: {},
    error: null,
    isAdmin: null,
    loginMessage: "",
    accessToken: ""
  },
  extraReducers : builder => {
    builder
    .addCase(loginAction.pending, (initialState) => ({
      ...initialState,
      error: null,
      fetching : true,
      loginMessage: ""
    }))
    .addCase(loginAction.fulfilled, (initialState, action) => {
      localStorage.setItem("access-token", action?.payload?.data?.accessToken);
      return {
        ...initialState,
        fetching : false,
        fetched : true,
        data : action?.payload,
        error: null,
        isAdmin: action?.payload?.data?.role === "admin",
        accessToken: action?.payload?.data?.accessToken,
        loginMessage: action.payload.status === 200 && 
        (action?.payload?.data?.role !== "admin" 
        ? "Sorry You're not an admin !"
        : ""),
      }
    })
    .addCase(loginAction.rejected, (initialState, action) => ({
      ...initialState,
      fetching : false,
      error: action?.payload.data.message,
      loginMessage: action?.payload,

    }))
  }
})

export default loginActionSlice.reducer;