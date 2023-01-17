import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Edit = () => {
    const location = useLocation();
    const [state, setState] = useState({newText: location.state.text, newSubject: location.state.subject});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange1 = (e) => {
        setState({...state, newSubject: e.target.value})
    }
    const handleChange2 = (e) => {
        setState({...state, newText: e.target.value})
    }
    const handleClick = (index) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dispatch({type: "note/editNote", payload: {newText: state.newText, newSubject: state.newSubject, newDate: new Date().toLocaleString("en-US", options), index: index}})
        navigate("/")
    }
    return(
        <div className="add-page">
            <h2>Edit your note</h2>
            <div className="insert-menu"><button className="fa fa-check text-success" onClick={() => handleClick(location.state.index)}></button></div>
            <div className="subject-box">
                <label className="fw-bold">Subject: </label>
                <input className="subject-input" type="text" value={state.newSubject} onChange={handleChange1} autoFocus={true} />
            </div>
            <textarea className="text-input" value={state.newText} onChange={handleChange2}></textarea>
        </div>
    )
}