import {configureStore} from "@reduxjs/toolkit";
import noteReducer from "../components/notesSlice";


export const store = configureStore({
    reducer: {
        note: noteReducer
    }
})