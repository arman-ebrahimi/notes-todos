import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.sass';
import {NotesList, Notation} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<NotesList />} />
              <Route path="/notation" element={<Notation />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
