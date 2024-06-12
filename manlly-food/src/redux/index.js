import { combineReducers } from "redux"
import AddCartReducers from "./reducers/AddCart"
import ProductReducer from "./reducers/Product"
import LoginReducer from "./reducers/User"
import OrderReducer from "./reducers/Order"

const rootReducer = combineReducers ({AddCartReducers, ProductReducer, LoginReducer, OrderReducer})

export default rootReducer;