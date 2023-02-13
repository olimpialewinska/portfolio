import React, { useState } from "react";
import { db } from "../../firebase";
import { ref } from "firebase/storage";
import { runTransaction } from "firebase/firestore";
import { updateDoc, collection, doc } from "firebase/firestore";

function EditModal(props) {
  const [text, setText] = useState(props.text);

  const edit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "Photos", props.id), {
        description: text,
      });
    } catch (error) {
      console.log(error);
    }

    props.hide();
    window.location.reload();
  };

  return (
    <>
      <div
        className="modal-bg"
        style={{
          opacity: props.visible ? 1 : 0,
          pointerEvents: props.visible ? "inherit" : "none",
        }}
      >
        <div
          className="image-modal"
          style={{
            transform: `translateY(${props.visible ? 0 : -16}px)`,
          }}
        >
          <div
            style={{
              maxWidth: 340,
              height: 400,
              backgroundColor: "white",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "0 40px",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: 30 }}>Edytuj opis</h1>
            <form className="form-group" onSubmit={edit}>
              <textarea
                className="form-group"
                cols="40"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              <div
                style={{
                  marginTop: 16,
                }}
              >
                <div className="blue" onClick={props.hide}>
                  Anuluj
                </div>
                <button type="submit" className="green">
                  Zapisz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { EditModal };
