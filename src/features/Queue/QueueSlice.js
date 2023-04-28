import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getQueueStatus} from "../../Services/apiServices"

export const QueueAction = createAsyncThunk(
  "UserQueueReqAction",
  async (body) => {
    const resposne  = await getQueueStatus(body);
    return resposne;
  }
)

const QueueActionSlice = createSlice({
  name : "userQueueReqActionSlice",
  initialState: {
    fetching : false,
    fetched : false,
    data : [],
    error: null
  },
  extraReducers : builder  => {
    builder
    .addCase(QueueAction.pending, (initialState) =>({
      ...initialState,
      fetching: true
    }))
    .addCase(QueueAction.fulfilled, (initialState, action) =>({
      ...initialState,
      fetching: false,
      fetched : true,
      data : action?.payload.data
    }))
    .addCase(QueueAction.rejected, (initialState, action) =>({
      ...initialState,
      fetching: false,
      error : action?.payload
    }))
  }
})

export default QueueActionSlice.reducer;