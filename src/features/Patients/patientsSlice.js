import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    rows: 5,
  },
  reducers: {
    changePage: (state, action) => ({
      ...state,
      page: action.payload,
      rows: 5,
    }),
    changeRow: (state, action) => ({
      ...state,
      rows: action.payload,
    })
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
        paginatedData: action?.payload?.data
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