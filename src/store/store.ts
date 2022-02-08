import {configureStore, Action, ThunkAction} from "@reduxjs/toolkit";
import {rootReducer, RootState} from "./reducer";

export const store = configureStore({
    reducer: rootReducer
});

export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, Action<string>>;

export type Thunk<R = void> = () => AppThunk<R>;

export type ThunkWithPayload<P = unknown, R = void> = (payload: P) => AppThunk<R>;

export type ThunkWithOptionalPayload<P = unknown, R = void> = (payload?: P) => AppThunk<R>;

export type AppDispatch = typeof store.dispatch;
