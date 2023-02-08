import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user){
        navigate("/CMSLogin")
      }
    });
  }, [navigate]);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="layout">
        <div className="mycard">
          <div className="menu">
            <a href="addphotos" className="blue">
              DODAJ ZDJĘCIA DO GALERII
            </a>
            <div className="red" onClick={handleLogout}>
              WYLOGUJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
