import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sunriseImage from "../images/waves_sunrise.gif";
import dayImage from "../images/Day_waves.gif";
import duskImage from "../images/Waves_Dusk.gif";
import nightImage from "../images/Waves_Night.gif";
import cinefilesLogo from "../images/Cine_Logo_1.png";
import studioLogos from "../images/Studio_Logos_1.png";
import "./landingPage.css";

function LandingPage() {
  const [backgroundImage, setBackgroundImage] = useState("");

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
    <div
      className="container"
      style={{
        backgroundImage: "url(" + backgroundImage + ")",
      }}
    >
      <div>
        <Link to="/home">
          <div className="cinefiles-logo">
            <img
              className="cinefiles-logo"
              src={cinefilesLogo}
              alt="Cinefiles logo"
            />
          </div>
        </Link>
      </div>

      <div className="copy">
        <p>
          A STUDIO 135 PROJECT. <br></br>CINEFILES IS A CREATIVE RESOURCE TO BE
          USED FOR INSPIRATION, REFERENCE, CREATIVE PROJECTS, ETC ETC. <br></br>
          CAREFULLY CURATED BY APPAS PARENTS.
        </p>
      </div>
      <div>
        <img className="studio-logos" src={studioLogos} alt="studio logos" />
      </div>
    </div>
  );
}

export default LandingPage;
