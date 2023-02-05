import React from "react";
import { NavDropdown } from "react-bootstrap";

function Dashboard() {
  return (
    <div>
      <div className="layout">
        <div className="mycard">
          <div className="menu">
            <a href="addpost" className="green">
              DODAJ POST
            </a>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="head">
                <tr>
                  <th>Tytuł</th>
                  <th>Podgląd</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Loremsakjasxjksa nasxkjsansajkxa jsxnjasnxkjasnx
                    bkasjnxkajsxaskn jbxsanxsaxkjsabas
                  </td>
                  <td>a</td>
                  <td>
                    a
                  </td>
                  <td>
                  <NavDropdown id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Edytuj
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Opublikuj
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Usuń
                      </NavDropdown.Item>
                    </NavDropdown>
                  </td>
                </tr>
                <tr>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td><NavDropdown id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Edytuj
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Opublikuj
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Usuń
                      </NavDropdown.Item>
                    </NavDropdown></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
