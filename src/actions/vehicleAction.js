import * as actionTypes from '../constants/actionTypes';
import * as api from '../api';
import { toast } from "react-toastify";

/**
* function for get user
* @param {*} data User id 
* @description get user by id
* @param {function} getUser getUser function
*/
export const getVehicles = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_VEHICLE_REQUEST })
        const { data } = await api.getAllVehicle()
        dispatch({ type: actionTypes.GET_VEHICLE_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_VEHICLE_FAIL, payload: err.response.data.message })
    }
}

/**
* function for user saveVehicle
* @param {*} data form data and navigate
* @description user saveVehicle
* @param {function} saveVehicle saveVehicle function
*/
export const saveVehicle = (formData, navigate) => async dispatch => {
    try {
        dispatch({ type: actionTypes.CREATE_VEHICLE_REQUEST })
        const { data } = await api.storeVehicle(formData);
        toast.success(data.message);
        // dispatch({ type: actionTypes.CREATE_VEHICLE_SUCCESS, payload: data })
        navigate('/settings/vehicles')

    } catch (err) {
        console.log('error is: ', err?.response?.data)
        toast.error(err.response?.data?.message);
        dispatch({ type: actionTypes.CREATE_VEHICLE_FAIL, payload: err.response.data.message })
    }
}

/**
* function for loadDriver
* @param {*} data User data 
* @description get user infromation
* @param {function} loadDriver loadDriver function
*/
export const loadVehicle = id => async dispatch => {
    try {
        dispatch({ type: actionTypes.LOAD_VEHICLE_REQUEST })
        const { data } = await api.editVehicle(id);
        dispatch({ type: actionTypes.LOAD_VEHICLE_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.LOAD_VEHICLE_FAIL, payload: err.response.data })
    }
}

/**
* function for user vehicleUpdate
* @param {*} data User data 
* @description update user infromation
* @param {function} vehicleUpdate vehicleUpdate function
*/
export const vehicleUpdate = userData => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTypes.UPDATE_VEHICLE_REQUEST })
        const { data } = await api.updateVehicle(userData)
        dispatch({ type: actionTypes.UPDATE_VEHICLE_SUCCESS, payload: data })
        dispatch({ type: actionTypes.UPDATE_VEHICLE_RESET })
        toast.success(data.message);
    } catch (err) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
        dispatch({ type: actionTypes.UPDATE_VEHICLE_FAIL, payload: err.response.data.message })
    }
}

export const destroyVehicle = (userId) => async dispatch => {
    try {
        dispatch({ type: actionTypes.DELETE_VEHICLE_REQUEST })
        const { data } = await api.deleteVehicle(userId)
        dispatch({ type: actionTypes.DELETE_VEHICLE_SUCCESS, payload: userId })
        toast.success(data.message);
    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message);
        dispatch({ type: actionTypes.DELETE_VEHICLE_FAIL, payload: err.response.data.message })
    }
}