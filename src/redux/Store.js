import { configureStore } from '@reduxjs/toolkit'
import RootReducer from "./reducers/RootReducer";

const initialState = {}

export const Store = configureStore({
    reducer: RootReducer,
    preloadedState: initialState,
});