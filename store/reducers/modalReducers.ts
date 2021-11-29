import { createReducer } from "@reduxjs/toolkit";
import {
    setLoginModal,
    setCartModal,
    setRegisterModal
} from '../actions/modalActions'

type UserState = {
    loginModal : boolean;
    cartModal : boolean;
    registerModal : boolean
}

const initialState : UserState = {
    loginModal: false,
    cartModal: false,
    registerModal:false
}

export const modalReducer = createReducer(initialState, builder => {
    builder
        .addCase(setLoginModal, (state, {payload}) => {
            state.loginModal = payload
        })
        .addCase(setCartModal, (state, { payload }) => {
            state.cartModal = payload
        })
        .addCase(setRegisterModal, (state, {payload}) => {
            state.registerModal = payload
        })
})