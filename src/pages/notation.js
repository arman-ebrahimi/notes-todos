import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Notation = () => {
    const [note, setNote] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNote(e.target.value)
    }
    const handleClick = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dispatch({type: "note/addNote", payload: {text: note, date: new Date().toLocaleString("en-US", options)}})
        navigate("/")
    }

    return(
        <div className="add-page">
            <h2>Add a new note</h2>
            <div className="insert-menu"><button className="fa fa-check text-success" onClick={handleClick}></button></div>
            <textarea className="text-input" onChange={handleChange} autoFocus={true}></textarea>
        </div>
    )
}