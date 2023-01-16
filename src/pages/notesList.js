import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export const NotesList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.note);
    const handleDelete = (index) => {
        dispatch({type: "note/deleteNote", payload: index})
    }
    return(
        <>
            <h1>Daily notes</h1>
            <div className="main-menu"><button className="fa fa-plus" onClick={() => navigate("/notation")}></button></div>
            <div className="notes-box mt-4">
                {allNotes.map((item, index) => {
                    return(
                        <div className="single-note" key={index}>
                            <div className="note-head"><span className="date">{item.date}</span>{item.editedDate && <span className="date">Is edited in: {item.editedDate}</span>}<span><button className="fa fa-pen edit-btn" onClick={() => navigate("/edit", {state: {text: item.text, index: index}})}></button><button className="fa fa-trash del-btn" onClick={() => handleDelete(index)}></button></span></div>
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