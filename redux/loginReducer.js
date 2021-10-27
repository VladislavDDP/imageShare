import { loginAPI } from "../API/api" 

const RETRIVE_TOKEN = 'auth/RETRIVE_TOKEN'
const LOGIN = 'auth/LOGIN'
const LOGOUT = 'auth/LOGOUT'

const initialState = {
    id: null,
    email: null, 
    first_name: null,
    avatar: null,
    isAuthorized: false,
    userToken: null
}

const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case RETRIVE_TOKEN:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuth
            }
        case LOGIN:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuth
            }
        case LOGOUT:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuth
            }
        default:
            return state
    }
}

export const login = (email, password) => (
    {type: AUTH_USER, data: {userId, email, first_name, avatar, isAuth}}
)

export const logout = () => (
    {type: AUTH_USER, data: {userId, email, first_name, avatar, isAuth}}
)

export const retrieve = (token) => (
    {type: AUTH_USER, data: {userId, email, first_name, avatar, isAuth}}
)


export default loginReducer