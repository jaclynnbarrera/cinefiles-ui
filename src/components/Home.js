import { useEffect, useState } from "react";
import cinefilesLogo from "../images/Cine_Logo_1.png";
import studioLogos from "../images/Studio_Logos_1.png";
import bulletTrain from "../images/bullet-train.jpg";
import "./home.css";

function Home() {
  const [time, setTime] = useState("00:00");
  const [images, setImages] = useState([]);

  const updateTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    setTime(time);
  };

  const getImages = async () => {
    try {
      let response = await fetch("http://localhost:5000/images");
      response = await response.json();

      setImages(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setInterval(updateTime(), 6000);
  });

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="home-container">
      <div className="nav">
        <div className="location">
          <p>Brooklyn, NY</p>
        </div>
        <img className="cf-logo" src={cinefilesLogo} alt="Cinefiles logo" />
        <div className="time">
          <p>{time}</p>
        </div>
      </div>

      <div className="filters">
        <div className="search">
          <p>search</p>
        </div>
        <div className="title">
          <p>title</p>
        </div>
        <div className="director">
          <p>director</p>
        </div>
        <div className="dop">
          <p>DOP</p>
        </div>
        <div className="actors">
          <p>actors</p>
        </div>
        <div className="year">
          <p>year</p>
        </div>
        <div className="frame">
          <p>frame</p>
        </div>
        <div className="color">
          <p>color</p>
        </div>
      </div>

      <div className="main">
        {/* image component */}
        {images && images.map((image) => <img src={image.url} />)}
      </div>

      <div className="footer">
        <img className="studio-logos" src={studioLogos} alt="studio logos" />
      </div>
    </div>
  );
}

export default Home;
