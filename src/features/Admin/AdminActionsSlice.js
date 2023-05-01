import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {adminActions} from '../../Services/apiServices'; 

export const updateAdminUser = createAsyncThunk(
  "adminAction",
  async (body) => {
    const response = await adminActions(body);
    return response;
  }
) 

const adminActionSlice = createSlice({
  name : "adminManagement",
  initialState:{
    fetching: false,
    fetched: false,
    data: {},
    role: null,
    error: null
  },
  extraReducers: builder => {
    builder
    .addCase(updateAdminUser.pending, (initialState) => ({
      ...initialState,
      fetching : true,
      fetched: false,
      role: null
    }))
    .addCase(updateAdminUser.fulfilled, (initialState, action) => ({
      ...initialState,
      fetching : false,
      fetched : true,
      role: action.payload?.data?.role,
      data : action.payload
    }))
    .addCase(updateAdminUser.rejected, (initialState, action) => ({
      ...initialState,
      fetching : false,
      fetched: false,
      role: null,
      error : action.payload
    }))
  }
})

export default adminActionSlice.reducer;