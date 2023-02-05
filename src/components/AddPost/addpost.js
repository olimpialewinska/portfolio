import React from "react";


function AddPost() {
  return (
    <div>
      <div className="layout">
        <div className="mycard">
          <div className="menuadd">
            <div>
              <a href="dashboard" className="blue">
                ← Powrót
              </a>
            </div>
            <div>
              <a href="dashboard" className="blue">
                Zapisz
              </a>
              <a href="dashboard" className="green">
                Opublikuj
              </a>
            </div>
          </div>
          <div className="center">
            <div className="containerform">
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddPost };
