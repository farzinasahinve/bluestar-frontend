import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const BASEURL = "http://localhost:3000/dev/"
//const BASEURL = "https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/"
var GET_DRIVER_LIST =  BASEURL+'getDriverList?lastkeyfound=start&limit=20'
const ADD_DRIVER = ''
const initialState = {
    drivers:[],
    status:'idle',
    error:null,
    totalRecords:0
}
const token = JSON.stringify(localStorage.getItem('token'))
//console.log(token)

export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers',async(searchKey,searchStatus)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        if(searchKey){
            GET_DRIVER_LIST = GET_DRIVER_LIST+`&search_key=${searchKey}&search_status=${searchStatus}`
        }
        //console.log(GET_DRIVER_LIST)
        const response = await axios.get(GET_DRIVER_LIST,config)
        return response.data
    }catch(err){
        return err.message
    }
})

export const addDriver = createAsyncThunk('drivers/addDriver',async(driverData)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        //console.log(GET_DRIVER_LIST)
        const response = await axios.post(ADD_DRIVER,driverData,config)
        return response.data
    }catch(err){
        return err.message
    }
})

export const editDriver = createAsyncThunk('drivers/editDriver',async(driverData)=>{
    try{
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
        const response = await axios.post(ADD_DRIVER, driverData,config)
        return response.data;
    }catch(err){

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
                console.log(action.payload)
                state.drivers = action.payload.data.drivers
            })
            .addCase(addDriver.rejected,(state,action)=>{
                state.error = action.payload.message
            })
            .addCase(addDriver.fulfilled,(state,action)=>{
                state.driver_created = true
                console.log(action.payload.data)
            })
    }
})

export const getAllDrivers = (state) => state.drivers

export default driversSlice.reducer

