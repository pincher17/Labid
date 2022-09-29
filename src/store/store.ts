import { configureStore } from '@reduxjs/toolkit';
import signUpInfoSlice from './signUpInfoSlice';



const store = configureStore({
  reducer: {
    signUpInfoSlice: signUpInfoSlice
  },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store