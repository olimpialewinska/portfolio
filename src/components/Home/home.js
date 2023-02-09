import React from "react";
import { Card } from "./animatedcard";
import "react-slideshow-image/dist/styles.css";

import { Gridelement } from "../Galeria/gridelement";
import { MyModal } from "../Galeria/Modal";
import { useState, useEffect } from "react";

import { db } from "../../firebase";
import { limit, orderBy } from "firebase/firestore";
import { getDocs, collection, query } from "firebase/firestore";

function Home() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (image) => () => {
    setCurrentImage(image);
    setShow(true);
  };

  useEffect(() => {
    const load = async () => {
      const citiesRef = collection(db, "Photos");

      let q = query(citiesRef, orderBy("date", "desc"), limit(6));

      const response = await getDocs(q);
      const urls = await Promise.all(
        response.docs.map((item) => {
          const data = item.data();
          return {
            url: data.url,
            description: data.description,
            category: data.category,
          };
        })
      );

      setImageUrls(urls);
    };

    load();
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <div className="home-wrapper-content">
          <div className="home-wrapper-main">
            <div className="home-content">
              <h1>Oskar Lewiński</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </p>
              <a className="button3" href="/gallery">
                Galeria
                <div className="button3-icon"></div>
              </a>
            </div>
            <Card height="650px" image="5.jpeg"/>
          </div>
        </div>
      </div>

      <div className="content">
        <div
          className="home-grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "24px",
            textAlign: "center",
            flex: 1,
          }}
        >
          {imageUrls.map((image, i) => {
            return (
              <Gridelement
                key={i}
                image={image.url}
                text={image.category}
                showImage={handleShow}
                borderRadius="0"
              />
            );
          })}
        </div>
      </div>

      <MyModal visible={show} hide={handleClose} image={currentImage} />

      <div className="home-wrapper" style={{ marginTop: 0}}>
        <div className="home-wrapper-content" style={{ marginTop: 0}}>
          <div className="home-wrapper-main-about">
            <Card height="400px" image="10.jpeg"  borderRadius="50%"/>
            <div className="home-about">
              <h1>O mnie</h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </p>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptate quae quidem
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
