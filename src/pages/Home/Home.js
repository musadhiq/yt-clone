import React from "react";
import HomeSpotlight from "../../components/home/HomeSpotlight";
import HomeBar from "../../components/homeBar/HomeBar";

function Home() {
  return (
    <div className="homepage">
      <HomeBar />
      <HomeSpotlight />
    </div>
  );
}

export default Home;
