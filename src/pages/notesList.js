import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useNowDate} from "../components";

export const NotesList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.note);
    const nowDate = useNowDate();
    const handleDelete = (index) => {
        dispatch({type: "note/deleteNote", payload: index})
    }

    return(
        <>
            <h1>Daily notes</h1>
            <div className="notes-menu"><span>{nowDate} - {new Date().toLocaleString('en-us', {  weekday: 'long' })}</span><button className="fa fa-plus" onClick={() => navigate("/notation")}></button></div>
            <div className="notes-box mt-4">
                {allNotes.map((item, index) => {
                    return(
                        <div className="single-note" key={index}>
                            <div className="note-head"><div className="date date1">{item.date}</div>{item.editedDate && <div className="date date2">Is edited in: {item.editedDate}</div>}<span><button className="fa fa-pen edit-btn" onClick={() => navigate("/editNote", {state: {text: item.text, subject: item.subject, index: index}})}></button><button className="fa fa-trash del-btn" onClick={() => handleDelete(index)}></button></span></div>
                            <span className="subject">{item.subject}</span><hr />
                            <pre>{item.text}</pre>
                        </div>
                    )
                })}
                {allNotes.length === 0 &&
                    <div className="text-white text-center">There's not any notes</div>
                }
            </div>
        </>
    )
}