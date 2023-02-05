import React from "react";

function Gridelement(props){
    return(
        <div className="grid-itemmm" onClick={props.showImage(props.image)} 
        style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            borderRadius: "8px",
        }}
        />
    )
}

export { Gridelement };