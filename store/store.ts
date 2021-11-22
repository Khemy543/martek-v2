import {
    Action,
    configureStore,
    ThunkAction
} from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducers';
import { modalReducer } from './reducers/modalReducers';

export const store = configureStore({
    reducer : {
        user : userReducer ,
        modal : modalReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<RetutnType = void> = ThunkAction<
    RetutnType,
    RootState,
    unknown,
    Action<string>
>;