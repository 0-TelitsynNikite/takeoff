import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./authReducer.ts"
import { usersReducer } from "./usersReducer.ts"

const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))