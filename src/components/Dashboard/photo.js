import React, {useState} from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { EditModal } from "./EditModal";

function Photo(props) {
  const [show, setShow] = useState(false);
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
        backgroundColor: "rgb(214, 214, 214)",
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
        <div onClick={handleShow}>
          <div className="icon-button edit"></div>
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
      <EditModal visible={show}/>
    </div>
  );
}

export { Photo };
