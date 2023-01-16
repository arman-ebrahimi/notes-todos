import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const NotesList = () => {
    const navigate = useNavigate();
    const allNotes = useSelector(state => state.note);
    return(
        <>
            <h1>Daily notes</h1>
            <div className="main-menu"><button className="fa fa-plus" onClick={() => navigate("/notation")}></button></div>
            <div className="notes-box mt-4">
                {allNotes.map((item, index) => {
                    return(
                        <pre className="single-note" key={index}>{item}</pre>//pre, for keeping the extra spaces in the text.
                    )
                })}
            </div>
        </>
    )
}