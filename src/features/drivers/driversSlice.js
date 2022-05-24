import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const GET_DRIVER_LIST='https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/getDriverList'
const initialState = {
    drivers:[],
    status:'idle',
    error:null
}

export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers',async()=>{
    try{
        const response = await axios.get(GET_DRIVER_LIST)
        return response.data
    }catch(err){
        return err.message
    }
})

const driversSlice = createSlice({
    name:'drivers',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchDrivers.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchDrivers.rejected,(state,action)=>{
                state.error = action.payload.message
            })
            .addCase(fetchDrivers.fulfilled,(state,action)=>{
                state.status = 'success'
                //console.log(action.payload.data)
                state.drivers = action.payload.data
            })
    }
})

export const getAllDrivers = (state) => state.drivers
export const getDriverStatus = (state) => state.status
export const getDriverError = (state) => state.error

export default driversSlice.reducer

