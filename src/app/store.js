import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice';
import registerReducer from '../features/register/registerSlice';

export const store = configureStore({
    reducer: {
        auth: loginReducer,
        register: registerReducer
    }
})