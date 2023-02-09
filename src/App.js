import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Mynavbar from "./navbar";
import CMSLogin from "./components/CMSLogin/CMSLogin";
import Dashboard from "./components/Dashboard/dashboard";
import Kontakt from "./components/Kontakt/kontakt";
import Gallery from "./components/Galeria/gallery";
import { AddPhotos } from "./components/Dashboard/addphotos";
import { CATEGORIES } from "./constants";

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
            <Route path="/addphotos" element={<AddPhotos />} />
            <Route path="/gallery" element={<Gallery />} />
            {CATEGORIES.map((category, i) => (
              <Route
                key={i}
                path={`/${category.name.toLowerCase()}`}
                element={<Gallery category={category.name} />}
              />
            ))}
          </Routes>
        </section>
        <footer>
        <hr className="hr"></hr>
      <div align="center" className="socialbtns">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/oskarlewinskifotografia"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fa fa-lg fa-facebook"></div>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/oskarlewinski/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fa fa-lg fa-instagram"></div>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/lewinskiphotografia"
              target="_blank"
              rel="noreferrer"
            >
              <div className="fa fa-lg fa-facebook"></div>
            </a>
          </li>
        </ul>
      </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
