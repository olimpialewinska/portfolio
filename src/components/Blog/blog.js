import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Post } from "./post"



function Blog() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="row text-center">
          <h1 style={{ marginTop: 20 }}>Kategorie</h1>
        </div>

        <div
          className="grid-containerr"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "20px",
            padding: 40,
          }}
        >
          <div className="grid-itemm">
            <h2>Portret</h2>
          </div>
          <div className="grid-itemm">
            <h2>Krajobraz</h2>
          </div>
          <div className="grid-itemm">
            <h2>Architektura</h2>
          </div>
          <div className="grid-itemm">
            <h2>Astronomia</h2>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="row text-center">
          <h1 style={{ marginTop: 20 }}>Wszystkie wpisy</h1>
        </div>
      </div>

      <div
        className="grid-containerr"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "20px",
          padding: 40,
        }}
      >
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      
      </div>
    </div>
  );
}

export default Blog;
