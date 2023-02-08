import React from "react";

function Element(props){
    return(
        <div className="element" style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "76vh",
            borderRadius: "10px",
        }}
        />
    )
}

export { Element };