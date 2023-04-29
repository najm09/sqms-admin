import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getQueueStatus} from "../../Services/apiServices"

export const QueueAction = createAsyncThunk(
  "UserQueueReqAction",
  async (body, {rejectWithValue}) => {
    try {
      const response  = await getQueueStatus(body);
      return response
    } catch ({response}) {
      return rejectWithValue(response)
    }
  }
)

const QueueActionSlice = createSlice({
  name : "userQueueReqActionSlice",
  initialState: {
    fetching : false,
    fetched : false,
    date: "",
    data : [],
    error: null
  },
  extraReducers : builder  => {
    builder
    .addCase(QueueAction.pending, (initialState) =>({
      ...initialState,
      fetching: true,
      error: null,
    }))
    .addCase(QueueAction.fulfilled, (initialState, action) =>({
      ...initialState,
      fetching: false,
      fetched : true,
      data : action?.payload.data,
      date : action?.payload.data[0]?.date,
      error: null,
    }))
    .addCase(QueueAction.rejected, (initialState, action) =>{
      console.log("QueueAction", action);
      return {
        ...initialState,
        fetching: false,
        fetched: false,
        error : action?.payload?.data?.message,
        data : []
      }
    })
  }
})

export default QueueActionSlice.reducer;