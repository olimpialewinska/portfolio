import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Carousel } from "react-bootstrap";
import { Element } from "./element";

function Post(props) {
  return (
    <>
      <div className="post">
        <div className="post__image">
          <Carousel interval={null}
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
    </>
  );
}

export { Post };
