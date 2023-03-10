import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {TodoList, FooterMenu, useNowDate} from "../components";

export const Todos = () => {
    const [newTodo, setNewTodo] = useState("");
    const [showedList, setShowedList] = useState("all");
    const [todosList, setTodos] = useState([]);
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todo);
    const numberOfActives = allTodos.filter(item => item.completed === false).length;
    const nowDate = useNowDate();

    useEffect(() => {
        listCheck(showedList);
        // eslint-disable-next-line
    },[allTodos])

    const addTodo = (e) => {
        if(e.key === "Enter" || e.detail === 1){
            if(newTodo === ""){
                alert("Please add some todos");
            }
            else {
                let date = new Date().toLocaleString();
                dispatch({type: "todos/addToTodos", payload: {id: Math.random(), date: date, text: newTodo, completed: false}})
                setNewTodo("");
            }
        }
        if(showedList !== "all"){
            setShowedList("all");
        }
    }
    const selectAllItems = () => {
        dispatch({type: "todos/selectAllItems", payload: ""})
    }
    const changeTodosList = (e) => {
        let target = e.target.name;
        setShowedList(target);
        listCheck(target);
    }

    function listCheck(target){
        if(target === "all"){
            setTodos(allTodos);
        }
        else if(target === "completed"){
            setTodos(allTodos.filter(item => item.completed === true));
        }
        else{
            setTodos(allTodos.filter(item => item.completed === false));
        }
    }

    return(
        <>
            <h1 className="display-1 mb-3">Todos</h1>
            <div className="date-box">{nowDate} - {new Date().toLocaleString('en-us', {  weekday: 'long' })}</div>
            <div className="border bg-white todos">
                <div className="d-flex">
                    <button onClick={selectAllItems} title="select all items" className="bg-white border-0 px-2 text-secondary btn-arrow"><span className="fa fa-chevron-down"></span></button>
                    <input onChange={(e) => setNewTodo(e.target.value)} type="text" value={newTodo} autoFocus
                           placeholder="What should be done? Press Enter or Add" className="flex-grow-1 py-4 border-0" onKeyUp={addTodo} />
                    <button className="border-0 text-white rounded my-3 me-2 add-btn" onClick={addTodo}>Add</button>
                </div>
                {allTodos.length > 0 &&
                    <>
                        <TodoList list={todosList} showedList={showedList} />
                        <hr />
                        <FooterMenu number={numberOfActives} changeList={changeTodosList} list={showedList} />
                    </>
                }
            </div>
        </>
    )
}