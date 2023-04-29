import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getAllPatients } from "../../Services/apiServices"

export const patientsList = createAsyncThunk(
  "patientDetailsList",
  async () => {
    const response = await getAllPatients();
    return response
  }
)

const patientsListSlice = createSlice({
  "name": "PatientsListsActionSlice",
  initialState: {
    fetched: false,
    fetching: false,
    data: [],
    error: null,
    paginatedData: [],
    page: 0,
    rows: 10,
  },
  reducers: {
    changePage: (initialState, action) => {
      console.log("changesPage", current(initialState), action)
      const page = action.payload;
      return {
        ...initialState,
        page,
        paginatedData: initialState.data.slice(page*initialState.rows, (page+1)*initialState.rows)
      }
    },
    changeRow: (initialState, action) => {
      console.log("changeRow", initialState, action)
      const rows = action.payload;
      return {
        ...initialState,
        rows,
        page: 0,
        paginatedData:  initialState.data.slice(0, rows),
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(patientsList.pending, (initialState) => ({
        ...initialState,
        fetching: true
      }))
      .addCase(patientsList.fulfilled, (initialState, action) => ({
        ...initialState,
        fetching: false,
        fetched: true,
        data: action?.payload?.data,
        paginatedData: action?.payload?.data?.slice(0,initialState.rows)
      }))
      .addCase(patientsList.rejected, (initialState, action) => ({
        ...initialState,
        fetching: false,
        error: action?.payload
      }))
  }
})

export const {changePage, changeRow} = patientsListSlice.actions;
export default patientsListSlice.reducer;