import React from "react";
import Searchbox from "./Searchbox";

function Homepage() {

  console.log("ahmet yanik");
  
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: "url(" + "../images/background.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Searchbox />
    </div>
  );
}

export default Homepage;
