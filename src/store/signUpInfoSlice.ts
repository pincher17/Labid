import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type initialStateType ={
    mobilePhone: string
    email: string
    password: string
    passwordRepeat: string
}

const initialState: initialStateType ={
    mobilePhone: '+375',
    email: '',
    password: '',
    passwordRepeat: '',
}

const signUpInfoSlice = createSlice({
    name: 'signUpInfoSlice',
    initialState,
    reducers: {
        
        setMobilePhone(state, action:PayloadAction<string>) {
            state.mobilePhone = action.payload;
        },
        setEmail(state, action:PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action:PayloadAction<string>) {
            state.password = action.payload;
        },
        setPasswordRepeat(state, action:PayloadAction<string>) {
            state.passwordRepeat = action.payload
        },
    },
});

export const {setEmail, setMobilePhone, setPassword, setPasswordRepeat} = signUpInfoSlice.actions;



export default signUpInfoSlice.reducer;