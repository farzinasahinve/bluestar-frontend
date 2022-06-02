import * as actionTypes from '../constants/actionTypes';

const defaultState = {
    vehicles: [],
    vehicle: {},
    loading: false,
    errors:{}
  }
  
  export const vehicleReducers = (state=defaultState, action={}) => {
    switch (action.type) {

        case actionTypes.GET_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: action.payload?.data,
            }
        case actionTypes.GET_VEHICLE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.CLEAR_GET_VEHICLES:
            return {
                ...state,
                error: null,
                message: null
            }
        // CREATE ACTION
        case actionTypes.CREATE_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_VEHICLE_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                errors: {},
                vehicles: [...state.vehicles, action.payload.data],
            }
        case actionTypes.CREATE_VEHICLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CLEAR_VEHICLE:
            return {
                ...state,
                error: null,
                message: null
            }
        // // DELETE ACTION
        case actionTypes.DELETE_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: state.vehicles.filter(item => item.id !== action.payload),
                message: action.payload.message

            }
        case actionTypes.DELETE_VEHICLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        case actionTypes.DELETE_VEHICLE_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
        // LOAD Vehicle
        case actionTypes.LOAD_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicle: action.payload.data,
            }
        case actionTypes.LOAD_VEHICLE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        // UPDATE 
        case actionTypes.UPDATE_VEHICLE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: state.vehicles.map(item => item.id === action.payload.data.id ? action.payload.data : item),
                message: action.payload.message,
                status: action.payload.success
            }
        case actionTypes.UPDATE_VEHICLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.UPDATE_VEHICLE_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
  
      default:
        return state;
    }
  }