import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {//these are the defaults if nothing is put inside of the contact data
        name: "Name",
        email:"email",
        phone_number: "Phone Number",
        address: "Address",

    },
    reducers:{
        // Action is submitted elsewhere - written to state.name
        chooseName: (state, action) => {state.name = action.payload }, //Setting the input to the state.name
        chooseEmail: (state, action) => {state.email = action.payload },
        choosePhone: (state, action) => {state.phone_number = action.payload },
        chooseAddress: (state, action) => {state.address = action.payload },


    }
})

export const reducer = rootSlice.reducer; //all of this is redux syntax
export const {chooseName, chooseEmail, choosePhone, chooseAddress } = rootSlice.actions