import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    is_account_created:false
};
var BASE_URL  = 'https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/register';

// typically used to make async requests.
export const createAccountAsync = createAsyncThunk(
    'register',
    async (companyData) => {
        const response = await axios.post(BASE_URL, companyData)
        return response.data;
    }
);

export const registerSlice = createSlice({
    name:'createAccount',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAccountAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAccountAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.is_account_created = true
                console.log(action.payload)
                //localStorage.setItem('token',action.payload.token)
            });
    },
})

export const createAccountStatus = (state) => state.createAccount;
export default registerSlice.reducer