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
    error: null
  },
  extraReducers: builder => {
    builder
    .addCase(updateAdminUser.pending, (initialState) => ({
      ...initialState,
      fetching : true,
    }))
    .addCase(updateAdminUser.fulfilled, (initialState, action) => ({
      ...initialState,
      fetching : false,
      fetched : true,
      data : action.payload
    }))
    .addCase(updateAdminUser.rejected, (initialState, action) => ({
      ...initialState,
      fetching : false,
      error : action.payload
    }))
  }
})

export default adminActionSlice.reducer;