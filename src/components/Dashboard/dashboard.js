import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { CATEGORIES } from "../../constants";
import { where } from "firebase/firestore";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { Photo } from "./photo";

function Dashboard() {

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/CMSLogin");
      }
    });
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const [currentCategory, setCurrentCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const load = async () => {
      const citiesRef = collection(db, "Photos");

      let q;
      if (currentCategory !== "") {
        q = query(citiesRef, where("category", "==", currentCategory));
      } else {
        q = query(citiesRef, orderBy("date", "desc"));
      }

      const response = await getDocs(q);
      const urls = await Promise.all(
        response.docs.map((item) => {
          const data = item.data();
          return {
            url: data.url,
            description: data.description,
            id: item.id,
            category: data.category,
            name: data.name,
          };
        })
      );

      setImageUrls(urls);
    };
    load();
  }, [currentCategory]);

  return (
    <div>
      <div className="layout">
        <div className="mycard">
          <div className="menu">
            <a href="addphotos" className="blue">
              DODAJ ZDJĘCIA DO GALERII
            </a>
            <div className="red" onClick={handleLogout}>
              WYLOGUJ
            </div>
          </div>
          <div>
            <div className="buttons2-dark">
              <div
                className={`button2-dark ${
                  currentCategory === "" ? "selected-dark" : ""
                }`}
                onClick={() => setCurrentCategory("")}
              >
                Wszystko
              </div>
              {CATEGORIES.map((category, i) => {
                return (
                  <div
                    className={`button2-dark ${
                      currentCategory === category.name ? "selected-dark" : ""
                    }`}
                    key={i}
                    onClick={() => setCurrentCategory(category.name)}
                  >
                    {category.name}
                  </div>
                );
              })}
            </div>

            {imageUrls.map((image, i) => {
              return (
                <Photo
                  key={i}
                  image={image.url}
                  text={image.description}
                  id={image.id}
                  name={image.name}
                  category={image.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
