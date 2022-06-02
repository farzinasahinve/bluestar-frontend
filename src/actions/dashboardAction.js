import * as actionTypes from '../constants/userActionTypes';
import * as api from '../api';
import { toast } from "react-toastify";
import { refreshToken } from './authAction'
/**
* function for loadUserProfile
* @param {*} data User data 
* @description get user infromation
* @param {function} loadUserProfile loadUserProfile function
*/
export const getuserDashboardData = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_FETCH_ALL_REQUEST })
        const { data } = await api.getUserDashboardList();
        dispatch({ type: actionTypes.GET_FETCH_ALL_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_FETCH_ALL_FAIL, payload: err.response.data })
    }
}

export const updateProjectShortCuts = (formData) => async dispatch => {
    try {
        dispatch({ type: actionTypes.UPDATE_PROJECT_REQUEST })
        const { data } = await api.updateProjectShortCut(formData);
        dispatch({ type: actionTypes.UPDATE_PROJECT_SUCCESS, payload: data })
        toast.success(data.message)
    } catch (err) {
        dispatch({ type: actionTypes.UPDATE_PROJECT_FAIL, payload: err.response.data })
    }
    // return api.updateProjectShortCut(projectData)
    //     .then((response) => toast.success(response?.data?.message))
    //     .catch((error) => {
    //         console.log(error)
    //     })
}

export const updateProjectShortCut = (formData) => {
    
    return api.updateProjectShortCut(formData)
        .then((response) => toast.success(response?.data?.message))
        .catch((error) => {
            console.log(error)
        })
}
/**
* function for loadUserProfile
* @param {*} data User data 
* @description get user infromation
* @param {function} loadUserProfile loadUserProfile function
*/
export const makePayment = (formData, history) => async dispatch => {
    try {
       // dispatch({ type: actionTypes.MAKE_PAYMENT_PARTNER_REQUEST })
        const { data } = await api.makePaymentPartner(formData);
        toast.success(data.message);
        history.push('/dashboard')
        dispatch(refreshToken());
        //dispatch({ type: actionTypes.MAKE_PAYMENT_PARTNER_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        //dispatch({ type: actionTypes.MAKE_PAYMENT_PARTNER_FAIL, payload: err.response.data })
    }
}

/**
* function for loadUserProfile
* @param {*} data User data 
* @description get user infromation
* @param {function} loadUserProfile loadUserProfile function
*/
export const subscriptionPlans = () => async dispatch => {
    try {
       dispatch({ type: actionTypes.GET_SUBSCRIPTION_REQUEST })
        const { data } = await api.indexSubscriptions();
        dispatch({ type: actionTypes.GET_SUBSCRIPTION_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_SUBSCRIPTION_FAIL, payload: err.response.data })
    }
}

/**
* function for loadUserProfile
* @param {*} data User data 
* @description get user infromation
* @param {function} loadUserProfile loadUserProfile function
*/
export const clientBudgetOverview = () => async dispatch => {
    // try {
    //     // dispatch({ type: actionTypes.GET_SUBSCRIPTION_REQUEST })
    //     // const { data } = await api.indexSubscriptions();
    //     // dispatch({ type: actionTypes.GET_SUBSCRIPTION_SUCCESS, payload: data })

    // } catch (err) {
    //     console.log(err)
    //     dispatch({ type: actionTypes.GET_SUBSCRIPTION_FAIL, payload: err.response.data })
    // }
}