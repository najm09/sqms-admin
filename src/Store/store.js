import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import adminActionReducer from '../features/Admin/AdminActionsSlice';
import loginActionReducer from '../features/Login/loginSlice'

export const store = configureStore({
  reducer : {
    adminActionReducer,
    loginActionReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false
  })
})