const LOGIN_ME = 'feeds/LOGIN_ME'
const LOGOUT_ME = 'feeds/LOGOUT_ME'

const initialState = {
    email: null,
    password: null,
    token: null
}

const loginReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case LOGIN_ME:
            return {
                ...state,
                email: action.email,
                password: action.password,
                token: action.token
            }
        case LOGOUT_ME:
            return {
                ...state,
                email: null,
                password: null,
                token: null
            }
        default:
            return state
    }
}
const loginAC = (email, password, token) => ({type: LOGIN_ME, email, password, token})
const logoutAC = () => ({type: LOGOUT_ME})

export const login = (email, password, token) => {
    return dispatch => dispatch(loginAC(email, password, token))
}

export const logout = () => {
    return dispatch => dispatch(logoutAC())
}

export default loginReducer