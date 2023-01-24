import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../components/appSlice";

export const store = configureStore({
    reducer: rootReducer
})