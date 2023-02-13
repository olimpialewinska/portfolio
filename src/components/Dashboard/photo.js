import React, { useState } from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { EditModal } from "./EditModal";

function Photo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (image) => () => {
    setShow(true);
  };
  return (
    <div
      className="roww"
      style={{
        color: "black",
        margin: 20,
        borderRadius: 8,
        display: "flex",
        backgroundColor: "#E6E6FA",
        alignItems: "center",
        paddingRight: 32,
      }}
    >
      <div
        className="dashboard-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 120,
          width: 120,
          margin: 16,
          borderRadius: 6,
        }}
        alt="zdjęcie"
      />
      <div style={{ flex: 1 }}>{props.text}</div>
      <div className="action-buttons">
        <div>
          <div
            className="icon-button edit"
            onClick={handleShow(props.text)}
          ></div>
        </div>
        <div>
          <div
            className="icon-button delete"
            onClick={async () => {
              const storage = getStorage();

              const storageRef = ref(
                storage,
                `${props.category}/${props.name}`
              );
              try {
                await deleteObject(storageRef);
                await deleteDoc(doc(db, "Photos", `${props.id}`));
                window.location.reload();
              } catch (error) {
                alert("Wystąpił jakiś błąd");
              }
            }}
          ></div>
        </div>
      </div>
      <EditModal
        visible={show}
        hide={handleClose}
        text={props.text}
        id={props.id}
      />
    </div>
  );
}

export { Photo };
