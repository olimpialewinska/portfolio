import React from "react";

function EditModal(props) {
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
          <div
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            
          >
            <h1>aaaaaaaaaaaa</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export { EditModal };
