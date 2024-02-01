import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import "./App.css";
import Summary from "./components/Summary";
import SummaryDetails from "./components/SummaryDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/summary_details" element={<SummaryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
