import {createSlice} from "@reduxjs/toolkit";


const notesSlice = createSlice({
    name: "note",
    initialState: [],
    reducers: {
        addNote(state, action){
            state.push(action.payload)
        }
    }
})

export default notesSlice.reducer;