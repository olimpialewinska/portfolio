import React from "react";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-bootstrap";
import { Element } from "./element";
import { Gridelement } from "./gridelement";
import { MyModal } from "./Modal";

const Galeria = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (image) => () => {
    setCurrentImage(image);
    setShow(true);
  }
  return (
    <div>
      <div className="container" id="container">
        <div className="row align-items-center">
          <Carousel
            style={{
              marginTop: 20,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Carousel.Item>
              <Element image="1.jpeg" />
            </Carousel.Item>
            <Carousel.Item>
              <Element image="2.jpeg" />
            </Carousel.Item>
            <Carousel.Item>
              <Element image="3.jpeg" />
            </Carousel.Item>
            <Carousel.Item>
              <Element image="4.jpeg" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div
        className="grid-containerrr"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
          padding: "20px 100px",
          marginTop: 40,
        }}
      >
        <Gridelement image="1.jpeg" showImage={handleShow} />
        <Gridelement image="2.jpeg" showImage={handleShow} />
        <Gridelement image="3.jpeg" showImage={handleShow} />
        <Gridelement image="4.jpeg" showImage={handleShow} />
        <Gridelement image="1.jpeg" showImage={handleShow} />
        <Gridelement image="2.jpeg" showImage={handleShow} />
        <Gridelement image="3.jpeg" showImage={handleShow} />
        <Gridelement image="4.jpeg" showImage={handleShow} />
      </div>

      <MyModal visible={show} hide={handleClose} image={currentImage} />
    </div>
  );
};

export default Galeria;
