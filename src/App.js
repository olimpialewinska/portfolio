import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Mynavbar from "./navbar";

function App() {
  return (
    <Router>
      <div>
        <Mynavbar />
        <section>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    
    </Router>
  );
}

export default App;


