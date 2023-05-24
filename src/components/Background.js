import { useEffect, useState } from "react";
import sunriseImage from "../images/waves_sunrise.gif";
import dayImage from "../images/Day_waves.gif";
import duskImage from "../images/Waves_Dusk.gif";
import nightImage from "../images/Waves_Night.gif";
import "./background.css";

function Background() {
  const [backgroundImage, setBackgroundImage] = useState(dayImage);

  useEffect(() => {
    updateBackGroundImage();
  }, []);

  const updateBackGroundImage = () => {
    const currentHour = new Date().getHours();

    switch (true) {
      case currentHour >= 5 && currentHour < 10:
        setBackgroundImage(sunriseImage);
        break;
      case currentHour >= 10 && currentHour < 17:
        setBackgroundImage(dayImage);
        break;
      case currentHour >= 17 && currentHour < 20:
        setBackgroundImage(duskImage);
        break;
      default:
        setBackgroundImage(nightImage);
        break;
    }
  };

  return (
    <div className="Landing">
      <img class="bg" src={backgroundImage} alt="A gif of moving waves" />
    </div>
  );
}

export default Background;
