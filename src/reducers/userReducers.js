import * as actionTypes from '../constants/actionTypes';

const defaultState = {
    users: [],
    user: {},
    loading: false,
    errors:{}
  }
  
  export const userReducers = (state=defaultState, action={}) => {
    switch (action.type) {

        case actionTypes.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.data.users,
            }
        case actionTypes.GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.CLEAR_GET_USERS:
            return {
                ...state,
                error: null,
                message: null
            }
        // LOAD user
        case actionTypes.LOAD_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.data,
            }
        case actionTypes.LOAD_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        // CREATE ACTION
        case actionTypes.CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_USER_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                errors: {},
                users: [...state.users, action.payload.data],
            }
        case actionTypes.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                error: null,
                message: null
            }
        // // DELETE ACTION
        case actionTypes.DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(item => item.id !== action.payload),
                message: action.payload.message

            }
        case actionTypes.DELETE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        case actionTypes.DELETE_USER_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
        // UPDATE 
        case actionTypes.UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.map(item => item.id === action.payload.data.id ? action.payload.data : item),
                message: action.payload.message,
                status: action.payload.success
            }
        case actionTypes.UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.UPDATE_USER_RESET:
            return {
                ...state,
                error: null,
                message: null
            }
  
      default:
        return state;
    }
  }