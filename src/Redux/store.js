import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from 'redux-thunk'
import { loginreducer } from "./Login/loginreducer";
import { proReducer } from "./Product/productReducer"


let combine = combineReducers({
    loginreducer: loginreducer,
    proReducer,
})


export const store = legacy_createStore(combine,applyMiddleware(thunk))