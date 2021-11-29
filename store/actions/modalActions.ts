import { createAction } from "@reduxjs/toolkit"

export const setLoginModal  = createAction<boolean>('modal/setLoginModal');
export const setCartModal = createAction<boolean>('modal/setCartModal');
export const setRegisterModal = createAction<boolean>('modal/setRegisterModal')