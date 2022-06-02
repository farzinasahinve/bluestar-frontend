import * as actionTypes from '../constants/actionTypes';

const defaultState = {
    drivers: [],
    driver: {},
    loading: false,
    errors:{}
  }
  
  export const driverReducers = (state=defaultState, action={}) => {
    switch (action.type) {

        case actionTypes.GET_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_DRIVER_SUCCESS:
            return {
                ...state,
                loading: false,
                drivers: action.payload?.data,
            }
        case actionTypes.GET_DRIVER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.CLEAR_GET_DRIVERS:
            return {
                ...state,
                error: null,
                message: null
            }
    
        // CREATE ACTION
        case actionTypes.CREATE_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_DRIVER_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                errors: {},
                drivers: [...state.drivers, action.payload.data],
            }
        case actionTypes.CREATE_DRIVER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CLEAR_DRIVER:
            return {
                ...state,
                error: null,
                message: null
            }
        // // DELETE ACTION
        case actionTypes.DELETE_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_DRIVER_SUCCESS:
            return {
                ...state,
                loading: false,
                drivers: state.drivers.filter(item => item.id !== action.payload),
                message: action.payload.message

            }
        case actionTypes.DELETE_DRIVER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        case actionTypes.DELETE_DRIVER_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
         // LOAD driver
         case actionTypes.LOAD_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_DRIVER_SUCCESS:
            return {
                ...state,
                loading: false,
                driver: action.payload.data,
            }
        case actionTypes.LOAD_DRIVER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        // UPDATE 
        case actionTypes.UPDATE_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_DRIVER_SUCCESS:
            return {
                ...state,
                loading: false,
                drivers: state.drivers.map(item => item.id === action.payload.data.id ? action.payload.data : item),
                message: action.payload.message,
                status: action.payload.success
            }
        case actionTypes.UPDATE_DRIVER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.UPDATE_DRIVER_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
  
      default:
        return state;
    }
  }