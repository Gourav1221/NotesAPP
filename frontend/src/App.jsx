
import { Routes, Route, Link } from "react-router-dom";
import {Regstr} from "./components/Regstr"
import { Login } from './components/Login';
import { Notes } from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Regstr />} />
      <Route path="/login" element={<Login />} />
      <Route path="/note" element={<Notes />} />
      </Routes>
    </div>
  )
}

export default App
