import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUser = (state : RootState) => state.user.user;

export const selectUserCart = (state : RootState) => state.user.cart;

export const selectCartAmount = (state:RootState) => state.user.cartTotal

export const userSelector = createSelector(selectUser, state => state);