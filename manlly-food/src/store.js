// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux'
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const saveToLocalStorage = (state) => {
  try {
      const serializedState = JSON.stringify(state.AddCartReducers.cart) ?? [];
      localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.log(state);
    console.log(e);
  }
};

// const loadFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('cart');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// };

const loadFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const LoginFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const middleware = [thunk]
let initSate = {
  AddCartReducers: {
    cart: loadFromLocalStorage
  },
  LoginReducer: {
    userInfo: LoginFromLocalStorage
  }
}


const store =  createStore(rootReducer,initSate,
                            composeWithDevTools(applyMiddleware(...middleware))
                          )
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store