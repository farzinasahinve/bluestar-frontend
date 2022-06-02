import * as actionTypes from '../constants/actionTypes';
import * as api from '../api';
import { toast } from "react-toastify";

/**
* function for get user
* @param {*} data User id 
* @description get user by id
* @param {function} getUser getUser function
*/
export const getELDDevices = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_ELD_DEVICES_REQUEST })
        const { data } = await api.getAllELDDevice()
        dispatch({ type: actionTypes.GET_ELD_DEVICES_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_ELD_DEVICES_FAIL, payload: err.response.data.message })
    }
}

/**
* function for user saveELDDevice
* @param {*} data form data and navigate
* @description user saveELDDevice
* @param {function} saveELDDevice saveELDDevice function
*/
export const saveELDDevice = (formData, navigate) => async dispatch => {
    try {
        dispatch({ type: actionTypes.CREATE_ELD_DEVICES_REQUEST })
        const { data } = await api.storeELDDevice(formData);
        toast.success(data.message);
        // dispatch({ type: actionTypes.CREATE_ELD_DEVICES_SUCCESS, payload: data })
        navigate('/settings/elds')

    } catch (err) {
        console.log('error is: ', err?.response?.data)
        toast.error(err.response?.data?.message);
        dispatch({ type: actionTypes.CREATE_ELD_DEVICES_FAIL, payload: err.response.data.message })
    }
}

/**
* function for loadDriver
* @param {*} data User data 
* @description get user infromation
* @param {function} loadDriver loadDriver function
*/
export const loadELDDevice = id => async dispatch => {
    try {
        dispatch({ type: actionTypes.LOAD_ELD_DEVICES_REQUEST })
        const { data } = await api.editELDDevice(id);
        dispatch({ type: actionTypes.LOAD_ELD_DEVICES_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.LOAD_ELD_DEVICES_FAIL, payload: err.response.data })
    }
}

/**
* function for user ELDDeviceUpdate
* @param {*} data User data 
* @description update user infromation
* @param {function} ELDDeviceUpdate ELDDeviceUpdate function
*/
export const ELDDeviceUpdate = userData => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTypes.UPDATE_ELD_DEVICES_REQUEST })
        const { data } = await api.updateELDDevice(userData)
        dispatch({ type: actionTypes.UPDATE_ELD_DEVICES_SUCCESS, payload: data })
        dispatch({ type: actionTypes.UPDATE_ELD_DEVICES_RESET })
        toast.success(data.message);
    } catch (err) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
        dispatch({ type: actionTypes.UPDATE_ELD_DEVICES_FAIL, payload: err.response.data.message })
    }
}

export const destroyELDDevice = (userId) => async dispatch => {
    try {
        dispatch({ type: actionTypes.DELETE_ELD_DEVICES_REQUEST })
        const { data } = await api.deleteELDDevice(userId)
        dispatch({ type: actionTypes.DELETE_ELD_DEVICES_SUCCESS, payload: userId })
        toast.success(data.message);
    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message);
        dispatch({ type: actionTypes.DELETE_ELD_DEVICES_FAIL, payload: err.response.data.message })
    }
}