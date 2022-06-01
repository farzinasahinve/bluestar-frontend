import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "http://localhost:3000/dev/"
//const BASEURL = "https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/"
var GET_LIST = BASEURL+'getELDs?lastkeyfound=start&limit=20'
var ADD_RECORD_URL = BASEURL+'addELD'

const initialState = {
    elds:[],
    status:'idle',
    error:null,
    totalRecords:0,
    responseMessage:'',
    is_added:false
}
const token = JSON.stringify(localStorage.getItem('token'))
export const getELDS = createAsyncThunk('elds/getELDS',async(searchKey,searchStatus)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        if(searchKey){
            GET_LIST = GET_LIST+`&search_key=${searchKey}&search_status=${searchStatus}`
        }
        //console.log(GET_LIST)
        const response = await axios.get(GET_LIST,config)
        console.log(response)
        return response.data
    }catch(err){
        return err.message
    }
})

export const manageELD = createAsyncThunk('elds/manageELD',async(eldData)=>{
    try{
        const config = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.post(ADD_RECORD_URL,eldData,config)
        return response.data
    }catch(err){
        return err.message
    }
})

export const eldsSlice = createSlice({
    name:'elds',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getELDS.fulfilled,(state,action)=>{
                console.log(action.payload.data)
                state.elds = action.payload.data.elds
                state.totalRecords = action.payload.data.TotalRecord
                state.is_added = false
            })
            .addCase(manageELD.fulfilled,(state,action)=>{
                console.log(action.payload)
                state.is_added = (action.payload.success === true) ? true : false
            })
    }
})

export const getAllELDs = (state) => state.elds

export default eldsSlice.reducer