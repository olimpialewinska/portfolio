import React from "react";

function Card(props) {

    return (
        <div className="grid-item">
            <div id="pudelko">
        <div id="karta">
          <div id="przod"></div>
          <div id="tyl" style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}></div>
        </div>
          </div></div>
       
    );
};

export{ Card };
