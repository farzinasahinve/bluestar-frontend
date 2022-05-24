import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice';
import registerReducer from '../features/register/registerSlice';
import driverReducer from '../features/drivers/driversSlice'

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        register: registerReducer,
        drivers: driverReducer
    }
})