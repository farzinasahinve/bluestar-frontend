import * as actionTypes from '../constants/actionTypes';
import * as api from '../api';

/**
* function for loadUserProfile
* @param {*} data User data 
* @description get user infromation
* @param {function} loadUserProfile loadUserProfile function
*/
export const getPaymentHistory = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_PAYMENT_HISTORY_REQUEST })
        const  { data }  = await api.getPaymentHistory();
        dispatch({ type: actionTypes.GET_PAYMENT_HISTORY_SUCCESS, payload: data })

    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_PAYMENT_HISTORY_FAIL, payload: err.response.data })
    }
}

export const getAdminDashboardStats = () => async dispatch =>{
    try {
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_REQUEST })
        const { data } = await api.getDashboardStats()
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_SUCCESS, payload: data })  
    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_FAIL, payload: err.response.data.message })
    }
}
export const getAdminDashboardProjects = () => async dispatch =>{
    try {
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_PROJECT_REQUEST })
        const { data } = await api.getDashboardProject()
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_PROJECT_SUCCESS, payload: data })  
    } catch (err) {
        console.log(err)
        dispatch({ type: actionTypes.GET_ADMIN_DASHBOARD_PROJECT_FAIL, payload: err.response.data.message })
    }
}