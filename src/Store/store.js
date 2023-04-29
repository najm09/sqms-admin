import {configureStore} from '@reduxjs/toolkit';
import adminActionReducer from '../features/Admin/AdminActionsSlice';
import loginActionReducer from '../features/Login/loginSlice'
import QueueActionReducer from "../features/Queue/QueueSlice"
import UsersListActionReducer from "../features/Users/usersSlice"
import PatinetsListActionReducer from "../features/Patients/patientsSlice"


export const store = configureStore({
  reducer : {
    adminActionReducer,
    loginActionReducer,
    QueueActionReducer,
    UsersListActionReducer,
    PatinetsListActionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false
  })
})