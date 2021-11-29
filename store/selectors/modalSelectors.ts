import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectModal = (state : RootState) => state.modal.loginModal;

export const selectCartModal = (state: RootState) => state.modal.cartModal;

export const selectRegisterModal = (state : RootState) => state.modal.registerModal;

export const modalSelector = createSelector(selectModal, state => state);