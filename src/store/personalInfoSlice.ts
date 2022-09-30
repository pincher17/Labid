import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type initialStateType ={
    firstName: string
    lastName: string
    date: number
    gender: string
    ocean: string
    hobby: Array<string>
}

const initialState: initialStateType ={
    firstName: '',
    lastName: '',
    date: 0,
    gender: '',
    ocean: '',
    hobby: []
}

const personalInfo = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        
        setPersonalInfo(state, action:PayloadAction<any>) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.date = action.payload.date
            state.gender = action.payload.gender;
            state.ocean = action.payload.ocean;
            state.hobby = action.payload.hobby;
            const ageDifMs = Date.now() - action.payload.date;
            const ageDate = new Date(ageDifMs); 
            state.date = Math.abs(ageDate.getUTCFullYear() - 1970); 
        }
    },
});

export const {setPersonalInfo} = personalInfo.actions;



export default personalInfo.reducer;