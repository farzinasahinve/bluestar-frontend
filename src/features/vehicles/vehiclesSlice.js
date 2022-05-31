import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASEURL = "http://localhost:3000/dev/"
//const BASEURL = "https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/"
let GET_LIST = BASEURL+'getVehicles?lastkeyfound=start&limit=20'
let GET_DETAIL = BASEURL+'getVehicleInfo'
let MANAGE_DETAIL = BASEURL+'addVehicle'

const initialState = {
    vehicles:[],
    status:'idle',
    error:null,
    totalRecords:0,
    responseMessage:'',
    is_updated:false,
    detail:{}
}
const token = JSON.stringify(localStorage.getItem('token'))

export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles',async(searchKey,searchStatus)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        if(searchKey){
            GET_LIST = GET_LIST+`&search_key=${searchKey}&search_status=${searchStatus}`
        }
        if(searchStatus){
            GET_LIST = GET_LIST+`&search_status=${searchStatus}`
        }
        //console.log(GET_DRIVER_LIST)
        const response = await axios.get(GET_LIST,config)
        //console.log(response.data)
        return response.data
    }catch(err){
        return err.message
    }
})

export const getVehicleDetail = createAsyncThunk('vehicles/getVehicleDetail',async(itemId)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.get(GET_DETAIL+`?id=${itemId}`,config)
        //console.log(response.data)
        return response.data
    }catch(err){
        return err.message
    }
})

export const manageVehicle = createAsyncThunk('vehicles/manageVehicles',async(vehicleData)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.post(MANAGE_DETAIL,vehicleData,config)
        return response.data
    }catch(err){
        return err.message
    }
})

const vehiclesSlice = createSlice({
    name:'vehicles',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchVehicles.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchVehicles.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.payload.message
            })
            .addCase(fetchVehicles.fulfilled,(state,action)=>{
                state.is_updated = false
                state.status = (action.payload.success === true) ? 'success' : 'idle'
                state.vehicles = action.payload.data.vehicles
                state.totalRecords = action.payload.data.TotalRecord
                state.responseMessage = (action.payload.success === false) ? action.payload.message: ''
            })
            .addCase(manageVehicle.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(manageVehicle.fulfilled,(state,action)=>{
                console.log(action.payload)
                state.is_updated = (action.payload.success === true) ? true : false
                state.responseMessage = (action.payload.success === false) ? action.payload.message: ''
            })
            .addCase(getVehicleDetail.fulfilled,(state,action)=>{
                state.is_updated = false
                state.detail = action.payload.data
                state.responseMessage = (action.payload.success === false) ? action.payload.message: ''
            })
    }
})

export const getAllVehicles = (state) => state.vehicles

export default vehiclesSlice.reducer