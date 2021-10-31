import { combineReducers, createStore, applyMiddleware } from "redux"
import feedsReducer from "./feedsReduces"
import loginReducer from "./loginReducer"
import thunkMiddleWare from "redux-thunk"

const reducers = combineReducers({
    feedPage: feedsReducer,
    loginPage: loginReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store