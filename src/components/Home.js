import { useEffect, useState } from "react";
import cinefilesLogo from "../images/Cine_Logo_1.png";
import "./home.css";

function Home() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    setInterval(updateTime(), 6000);
  });

  const updateTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    setTime(time);
  };

  return (
    <div className="home-container">
      <div className="nav">
        <div className="search-bar">
          <p>search bar here</p>
        </div>
        <img className="cf-logo" src={cinefilesLogo} alt="Cinefiles logo" />
        <div className="time">
          <p>{time}</p>
        </div>
      </div>
      <div>
        <div>side bar</div>
        <div>main content</div>
      </div>
      <div>footer</div>
    </div>
  );
}

export default Home;
