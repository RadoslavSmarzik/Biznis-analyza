import { configureStore } from '@reduxjs/toolkit'
import businessDataReducer from '../features/businessData/businessDataSlice'


export const store = configureStore({
  reducer: {
    businessData: businessDataReducer,
  },
})