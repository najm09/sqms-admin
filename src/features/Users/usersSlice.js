import { createAsyncThunk,  createSlice} from "@reduxjs/toolkit";
import {getAllUsers} from "../../Services/apiServices"

export const usersList = createAsyncThunk(
  "renderUsersList",
  async () => {
    const response = await getAllUsers();
    return response;
  }
)



const usersListSlice = createSlice({
  "name" : "usersListActionSlice",
  initialState:{
    fetching: false,
    fetched: false,
    data: [],
    error: null,
    isAdmin: null
  },
  extraReducers : builder => {
    builder
    .addCase(usersList.pending, (initialState) => ({
      ...initialState,
      fetching: true
    }))
    .addCase(usersList.fulfilled, (initialState, action) => ({
      ...initialState,
      fetching: false,
      fetched: true,
      data: action?.payload?.data,
      isAdmin: action.payload.role === "admin"
    }))
    .addCase(usersList.rejected, (initialState, action) => ({
      ...initialState,
      fetching: false,
      error: action?.payload
    }))
  }
})

export default usersListSlice.reducer
