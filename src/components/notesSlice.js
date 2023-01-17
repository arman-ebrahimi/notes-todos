import {createSlice} from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "note",
    initialState: [],
    reducers: {
        addNote(state, action){
            state.splice(0, 0, action.payload)
        },
        deleteNote(state, action){
            state.splice(action.payload, 1)
        },
        editNote(state, action){
            state[action.payload.index].text = action.payload.newText;
            state[action.payload.index].subject = action.payload.newSubject;
            state[action.payload.index].editedDate = action.payload.newDate;
        }
    }
})

export default notesSlice.reducer;