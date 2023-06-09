import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cinefilesLogo from "../images/Cine_Logo_1.png";
import studioLogos from "../images/Studio_Logos_1.png";
import Image from "./Image";
import "./home.css";
import Search from "./Search";
import { useQuery } from "react-query";

function Home() {
  const [time, setTime] = useState("00:00");

  const updateTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    setTime(time);
  };

  // move to API folder?
  const getImages = async () => {
    try {
      let response = await fetch("http://localhost:5000/images");
      response = await response.json();
      return response;
    } catch (err) {
      console.error(err.message);
    }
  };

  const { data } = useQuery("images", getImages);

  useEffect(() => {
    setInterval(updateTime, 6000);
  }, []);

  return (
    <div className="home-container">
      <div className="nav">
        <div className="location">
          <p>Brooklyn, NY</p>
        </div>
        <div className="cf-logo">
          <Link to="/">
            <img src={cinefilesLogo} alt="Cinefiles logo" />
          </Link>
        </div>

        <div className="time">
          <p>{time}</p>
        </div>
      </div>

      <div className="filters">
        <div className="search">
          <Search />
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
        <div className="genre">
          <p>genre</p>
        </div>
      </div>

      <div className="main">
        <div className="watch_list">
          <h3>WATCH LIST</h3>
          <ul>
            <li>
              <a href="google.com">Actors on Actors</a>
            </li>
            <li>
              <a href="google.com">Mubi Release</a>
            </li>
            <li>
              <a href="google.com">Sreenings</a>
            </li>
            <li>
              <a href="google.com">Oppenheimer</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
          </ul>
        </div>
        <div className="image_gallery">
          {data && data.map((image, i) => <Image key={i} image={image} />)}
        </div>
        <div className="links">
          <h3>LINKS</h3>
          <ul>
            <li>
              <a href="google.com">Actors on Actors</a>
            </li>
            <li>
              <a href="google.com">Mubi Release</a>
            </li>
            <li>
              <a href="google.com">Sreenings</a>
            </li>
            <li>
              <a href="google.com">Oppenheimer</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
            <li>
              <a href="google.com">Short Films</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <img className="studio-logos" src={studioLogos} alt="studio logos" />
      </div>
    </div>
  );
}

export default Home;
