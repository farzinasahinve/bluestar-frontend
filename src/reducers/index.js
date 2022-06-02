import { combineReducers } from "@reduxjs/toolkit";
import {authReducer, getUserByEmailReducer, 
        verifyEmailReducer,
        getUserReducer,
        resendVerifyEmailReducer,
        resetPasswordReducer,
        registerReducer,
        updatePassword,
        avatarPreviewReducer,
        updateProfileReducer,
    } from './authReducers'
import { driverReducers } from './driverReducers'
import { vehicleReducers } from './vehicleReducers'
import { userReducers } from './userReducers'
import { eldDeviceReducers } from './eldDeviceReducers'

export default combineReducers({
    auth: authReducer,
    register: registerReducer,
    getUserByEmail: getUserByEmailReducer,
    verifyEmail: verifyEmailReducer,
    updatePassword: updatePassword,
    resendVerifyEmail: resendVerifyEmailReducer,
    resetPassword: resetPasswordReducer,
    getUser: getUserReducer,
    updateProfile: updateProfileReducer,
    avatarPreview: avatarPreviewReducer,
    drivers: driverReducers,
    vehicles: vehicleReducers,
    user: userReducers,
    elddevice: eldDeviceReducers,
});