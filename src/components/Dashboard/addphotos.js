import React from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { CATEGORIES } from "../../constants";
import { storage, db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function AddPhotos() {
  const [text, setText] = useState(null);
  const [imagesUpload, setImagesUpload] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Inne");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user){
        navigate("/CMSLogin")
      }
    });
  }, [navigate]);

  const uploadImages = React.useCallback(async () => {
    if (imagesUpload == null) return;
    await Promise.all(
      imagesUpload.map(async (image) => {
        const imageRef = ref(storage, `${selectedOption}/${image.name}`);
        await uploadBytesResumable(imageRef, image).then(async (ref) => {
          const downloadURL = await getDownloadURL(imageRef);
          await addDoc(collection(db, "Photos"), {
            category: selectedOption,
            url: downloadURL,
            description: text,
            date: Date.now(),
          });
        });
      })
    );

    window.location.reload();
  }, [imagesUpload, selectedOption, text]);

  return (
    <div>
      <div className="layout">
        <div className="mycard">
          <div className="menuadd">
            <div>
              <a href="dashboard" className="blue">
                ← Powrót
              </a>
            </div>
            <div>
              <button className="green" onClick={uploadImages}>
                Opublikuj
              </button>
            </div>
          </div>
          <div className="center">
            <div className="containerform">
              <form>
                <div className="form-group">
                  <label>Kategoria</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={(event) => {
                      setSelectedOption(event.target.value);
                    }}
                  >
                    {CATEGORIES.map((category, i) => (
                      <option key={i}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Opis:</label>
                  <input
                    className="form-control"
                    type="text"
                    multiple={true}
                    onChange={(event) => {
                      const text = event.target.value;
                      setText(text);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Pliki:</label>
                  <input
                    className="form-control"
                    type="file"
                    multiple={true}
                    onChange={(event) => {
                      const files = event.target.files;
                      setImagesUpload(Array.from(files));
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddPhotos };
