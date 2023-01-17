import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Notation = () => {
    const [state, setState] = useState({subject: "", text: ""});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange1 = (e) => {
        setState({...state, subject: e.target.value})
    }
    const handleChange2 = (e) => {
        setState({...state, text: e.target.value})
    }
    const handleClick = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dispatch({type: "note/addNote", payload: {subject: state.subject,text: state.text, date: new Date().toLocaleString("en-US", options)}})
        navigate("/")
    }

    return(
        <div className="add-page">
            <h2>Add a new note</h2>
            <div className="insert-menu"><button className="fa fa-check text-success" onClick={handleClick}></button></div>
            <div className="subject-box">
                <label className="fw-bold">Subject: </label>
                <input className="subject-input" type="text" onChange={handleChange1} autoFocus={true} />
            </div>
            <textarea className="text-input" onChange={handleChange2}></textarea>
        </div>
    )
}