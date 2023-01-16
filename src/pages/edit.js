import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Edit = () => {
    const [newText, setNewText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewText(e.target.value)
    }
    const handleClick = (index) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dispatch({type: "note/editNote", payload: {text: newText, newDate: new Date().toLocaleString("en-US", options), index: index}})
        navigate("/")
    }
    useEffect(() => {
        let input = document.getElementById("txt");
        let end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
    })
    return(
        <div className="add-page">
            <h2>Edit your note</h2>
            <div className="insert-menu"><button className="fa fa-check text-success" onClick={() => handleClick(location.state.index)}></button></div>
            <textarea id="txt" className="text-input" defaultValue={location.state.text} onChange={handleChange}></textarea>
        </div>
    )
}