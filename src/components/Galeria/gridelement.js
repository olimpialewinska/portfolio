import React from "react";

function Gridelement(props) {
  return (
    <div
      className="grid-itemmm"
      onClick={props.showImage(props.image)}
      style={{
        height: "100%",
        borderRadius: props.borderRadius,
        position: "relative",
      }}
    >
      <div
        className="grid-item-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className="grid-item-overlay">
        <div className="grid-item-text">{props.text}</div>
      </div>
      <div className="grid-item-arrow"></div>
    </div>
  );
}

export { Gridelement };
