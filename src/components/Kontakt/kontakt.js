import React from "react";
import { Card } from "../Home/animatedcard";



function Kontakt() {
  return (
    <div className="container">
         <div className="header">
        Kontakt
      </div>
      <div className="home-wrapper" style={{ marginTop: 0}}>
        <div className="home-wrapper-content" style={{ marginTop: 0}}>
          <div className="home-wrapper-main-about">
            <Card height="400px" image="10.jpeg"  borderRadius="50%"/>
            <div className="home-about">
              <h1>O mnie</h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </p>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
            </div>
          </div>
          </div>
          </div>

    </div>
  );
}

export default Kontakt;
