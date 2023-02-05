import React from "react";

function MyModal(props) {
  return (
    <>
      <div
        className="modal-bg"
        style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}
        onClick={props.hide}
      >
        <div className="image-modal" style={{
          transform: `translateY(${props.visible ? 0 : -16}px)`,
        }}>
          <img
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            src={props.image}
          ></img>
        </div>
      </div>
    </>
  );
}

export { MyModal };
