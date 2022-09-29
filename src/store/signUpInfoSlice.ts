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
        
        setSignUpInfo(state, action:PayloadAction<any>) {
            state.mobilePhone = action.payload.phone;
            state.email = action.payload.email;
            state.password = action.payload.password
            state.passwordRepeat = action.payload.repeatPassword;
        }
    },
});

export const {setSignUpInfo} = signUpInfoSlice.actions;



export default signUpInfoSlice.reducer;