import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL  = 'https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/login';

const initialState = []

export const login = createAsyncThunk('login', async (loginData) => {
    const response = await axios.post(BASE_URL, loginData)
    console.log(response)
    return response.data
})


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            // console.log(action.payload)
            state.status = 'loading';
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state, error) => {
            console.log(error.error.message)
            state.error = error.error;
        })
    }
})

export const selectUser = (state) => state.login
export default loginSlice.reducer