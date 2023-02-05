import './App.css';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Mynavbar from "./navbar";
import CMSLogin from "./components/CMSLogin/CMSLogin";
import Dashboard from "./components/Dashboard/dashboard";
import Kontakt from "./components/Kontakt/kontakt";
import Blog from "./components/Blog/blog";
import Galeria from "./components/Galeria/galeria";
import {AddPost} from "./components/AddPost/addpost"


function App() {
  return (
    <Router>
      <div>
        <Mynavbar />
        <section>
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/CmsLogin" element={<CMSLogin />} />
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/addpost" element={<AddPost />} />

          </Routes>
        </section>
      </div>
    
    </Router>
  );
}

export default App;


