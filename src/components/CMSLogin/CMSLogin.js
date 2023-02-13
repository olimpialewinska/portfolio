import React, { useState } from "react";


import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function CMSLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("Zaloguj się");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        setPass("Niepoprawne dane");
      });
  };
  return (
    <div>
      
      <div className="login-card"
      style={{
        marginTop:30,
        marginBottom:30,
      }}>
        <div className="login-card-body">
          <h1 className="login-card-title">{pass}</h1>
          <form className="login-card-form" onSubmit={onLogin}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Hasło"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="login-btn" style={{
                marginTop:16,
              }}>
                Zaloguj
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CMSLogin;
