import { createAction } from "@reduxjs/toolkit"

export const setUser  = createAction<object>('user/setUser');

export const setUserCart = createAction<object>('user/setUserCart');

export const removeFromCart  = createAction<number>('user/removeFromCart');