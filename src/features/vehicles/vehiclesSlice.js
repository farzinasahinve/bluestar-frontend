import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASEURL = "http://localhost:3000/dev/"
//const BASEURL = "https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/"
let GET_LIST = BASEURL+'getVehicles?lastkeyfound=start&limit=20'
// let GET_DETAIL = ''
// let MANAGE_DETAIL = ''

const initialState = {
    vehicles:[],
    status:'idle',
    error:null,
    totalRecords:0
}
const token = JSON.stringify(localStorage.getItem('token'))
console.log(token)

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
        console.log(response.data)
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
                state.status = 'success'
                console.log('success')
                state.vehicles = action.payload.data.vehicles
                state.totalRecords = action.payload.data.TotalRecord
            })
    }
})

export const getAllVehicles = (state) => state.vehicles
export const getStatus = (state) => state.status

export default vehiclesSlice.reducer