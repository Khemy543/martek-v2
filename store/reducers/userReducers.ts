import { createReducer } from "@reduxjs/toolkit";
import {
    setUser,
    setUserCart,
    removeFromCart
} from '../actions/userActions'

type UserState = {
    user : Object;
    cart : any,
    cartTotal:number
}

const initialState : UserState = {
    user: null,
    cart: [],
    cartTotal:0
}

export const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUser, (state, {payload}) => {
            state.user = payload
        })
        .addCase(setUserCart, (state, { payload }) => {
            console.log('payload', payload)
            state.cart = [...state.cart, ...payload['value']];
            state.cartTotal = Number(state.cartTotal) +  Number(payload['amount'])
        })
        .addCase(removeFromCart, (state, { payload }) => {
            state.cart = state.cart.filter((item:object) => item['id'] !== payload);
            let total = 0;
            for(const item of state.cart){
                total = total +  item.price;
            }
            state.cartTotal = total;
        })
})