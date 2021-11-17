import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import Home from "./pages/Home/Home";
import "./sass/main.css";
import { Route, Routes } from "react-router-dom";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Explore from "./pages/explore/Explore";

export const HeaderContext = React.createContext();
function App() {
  const [sidebar, setSidebar] = useState(false);

  const HandleChange = () => {
    setSidebar(!sidebar);
    console.log("sidebar", sidebar);
  };
  return (
    <HeaderContext.Provider value={{ sidebar, HandleChange }}>
      <div className="yt-clone">
        <div className="layout">
          <div className="header">
            <Header />
          </div>
          <div className="flex-main">
            <div className="sidebar-main">
              <SideBar />
            </div>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="feed/explore" element={<Explore />} />
                <Route path="feed/subscriptions" element={<Subscriptions />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HeaderContext.Provider>
  );
}

export default App;
