import { combineReducers, createStore } from "redux"
import profileReducer from "./profileReducer"
import feedsReducer from "./feedsReduces"
import loginReducer from "./loginReducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    feedPage: feedsReducer,
    loginPage: loginReducer
})

const store = createStore(reducers)

export default store