import { loginAPI } from "../API/api" 

const AUTH_USER = 'auth/AUTH_USER'

const initialState = {
    id: null,
    email: null, 
    first_name: null,
    avatar: null,
    isAuthorized: false
}

const authReducer = (state=initialState, action) => {

    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuth
            }
        default:
            return state
    }
}

export const authUserProfile = (userId, email, first_name, avatar, isAuth) => (
    {type: AUTH_USER, data: {userId, email, first_name, avatar, isAuth}}
)

export const authAccount = (id) => {
    return async (dispatch) => {
        const response = await loginAPI.authMe(id)
        const {id, email, first_name, avatar} = response.data
        dispatch(authUserProfile(id, email, first_name, avatar, true))
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        const response = await loginAPI.login(email, password)
        dispatch(authAccount(response))
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(authUserProfile(null, null, null, null, false))
    }
}

export default authReducer