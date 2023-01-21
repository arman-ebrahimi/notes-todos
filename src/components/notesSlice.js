import {createSlice} from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "note",
    initialState: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
    reducers: {
        addNote(state, action){
            state.splice(0, 0, action.payload)
        },
        deleteNote(state, action){
            state.splice(action.payload, 1)
        },
        editNote(state, action){
            let index = action.payload.index;
            state[index].text = action.payload.newText;
            state[index].subject = action.payload.newSubject;
            state[index].editedDate = action.payload.newDate;
        }
    }
})

export default notesSlice.reducer;