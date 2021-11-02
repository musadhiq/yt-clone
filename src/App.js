import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import Home from "./pages/Home/Home";
import "./sass/main.css";

function App() {
  return (
    <div className="yt-clone">
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
