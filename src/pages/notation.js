import {useState} from "react";
import {useDispatch} from "react-redux";


export const Notation = () => {
    const [note, setNote] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNote(e.target.value)
    }
    const handleClick = () => {
        dispatch({type: "note/addNote", payload: note})
    }

    return(
        <div className="add-page">
            <h2>Add a new note</h2>
            <div className="insert-menu"><button className="fa fa-check text-success" onClick={handleClick}></button></div>
            <textarea className="text-input" onChange={handleChange}></textarea>
        </div>
    )
}