import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import './App.css';
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/summary" element={<Summary/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
