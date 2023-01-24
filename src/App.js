import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import './App.sass';
import {NotesList, Notation, Edit} from "./pages";
import {Todos} from "./components";

function App() {
    const [homeClick, setHomeClick] = useState(true)
    const allNotes = useSelector(state => state.note);
    const allTodos = useSelector(state => state.todo);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(allNotes));
        localStorage.setItem("dd", JSON.stringify(allTodos));
    }, [allNotes, allTodos])

  return (
    <div className="App">
      <Router>
          <div className="app-menu">
              <Link className={`app-menu-item ${homeClick && "home"}`} to="/" onClick={() => setHomeClick(true)}>Notes</Link>
              <Link className={`app-menu-item ${!homeClick && "home"}`} to="todos" onClick={() => setHomeClick(false)}>Todos</Link>
          </div>
          <Routes>
              <Route path="/" element={<NotesList />} />
              <Route path="notation" element={<Notation />} />
              <Route path="editNote" element={<Edit />} />
              <Route path="todos" element={<Todos />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
