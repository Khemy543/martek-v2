import { createReducer } from "@reduxjs/toolkit";
import {
    setLoginModal,
    setCartModal
} from '../actions/modalActions'

type UserState = {
    loginModal : boolean;
    cartModal : boolean;
}

const initialState : UserState = {
    loginModal: false,
    cartModal: false
}

export const modalReducer = createReducer(initialState, builder => {
    builder
        .addCase(setLoginModal, (state, {payload}) => {
            state.loginModal = payload
        })
        .addCase(setCartModal, (state, { payload }) => {
            state.cartModal = payload
        })
})