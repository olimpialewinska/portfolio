import React from "react";
import "react-slideshow-image/dist/styles.css";

import { Gridelement } from "./gridelement";
import { MyModal } from "./Modal";
import { useState, useEffect } from "react";

import { db } from "../../firebase";
import { CATEGORIES } from "../../constants";
import { where } from "firebase/firestore";
import { getDocs, collection, query} from "firebase/firestore";


const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (image) => () => {
    setCurrentImage(image);
    setShow(true);
  };

  useEffect(() => {
    const load = async () => {
      const citiesRef = collection(db, "Photos");

      let q;
      if (currentCategory !== "") {
        q = query(citiesRef, where("category", "==", currentCategory));
      } else {
        q = query(citiesRef);
      }

      const response = await getDocs(q);
      const urls = await Promise.all(
        response.docs.map((item) => {
          const data = item.data();
          return {
            url: data.url,
            description: data.description,
          };
        })
      );

      setImageUrls(urls);
    };

    load();
  }, [currentCategory]);


  return (
    <div>
      <div className="buttons2">
        <div
          className={`button2 ${currentCategory === "" ? "selected" : ""}`}
          onClick={() => setCurrentCategory("")}
        >
          Wszystko
        </div>
        {CATEGORIES.map((category, i) => {
          return (
            <div
              className={`button2 ${
                currentCategory === category.name ? "selected" : ""
              }`}
              key={i}
              onClick={() => setCurrentCategory(category.name)}
            >
              {category.name}
            </div>
          );
        })}
      </div>
      <div
        className="grid-containerrr"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "24px",
          padding: "20px 100px",
        }}
      >
        {imageUrls.map((image, i) => {
          return (
            <Gridelement
              key={i}
              image={image.url}
              text={image.description}
              showImage={handleShow}
            />
          );
        })}
      </div>

      <MyModal visible={show} hide={handleClose} image={currentImage} />
    </div>
  );
};

export default Gallery;
