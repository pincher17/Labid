import { configureStore } from '@reduxjs/toolkit';
import personalInfoSlice from './personalInfoSlice';
import signUpInfoSlice from './signUpInfoSlice';



const store = configureStore({
  reducer: {
    signUpInfoSlice: signUpInfoSlice,
    personalInfo: personalInfoSlice
  },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store