import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.sass';
import {NotesList, Notation, Edit} from "./pages";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
    const allNotes = useSelector(state => state.note);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(allNotes));
    }, [allNotes])
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<NotesList />} />
              <Route path="/notation" element={<Notation />} />
              <Route path="/edit" element={<Edit />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
