import React from 'react';
import Navigate from './navigate';

const AuthContext = React.createContext();

const App = () => {
  const RETRIVE_TOKEN = 'auth/RETRIVE_TOKEN'
  const LOGIN = 'auth/LOGIN'
  const LOGOUT = 'auth/LOGOUT'

  const initialState = {
    email: null,
    userToken: null
  }

  const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case RETRIVE_TOKEN:
            return {
                ...state,
                userToken: action.token
            }
        case LOGIN:
            return {
                ...state,
                email: action.email,
                userToken: action.token
            }
        case LOGOUT:
            return {
                ...state,
                userToken: null
            }
        default:
            return state
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialState)

  const authContext = React.useMemo(() => ({
    signIn: async(email, token) => {
      dispatch({ type: 'LOGIN', email, token });
    },
    signOut: async() => {
      dispatch({ type: 'LOGOUT' });
    }
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <Navigate />
    </AuthContext.Provider>
  );
}

export default App