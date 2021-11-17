import React, { useContext } from "react";
import { HiHome } from "react-icons/hi";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { HeaderContext } from "../../App";
import { Link } from "react-router-dom";
function SideBar() {
  const { sidebar } = useContext(HeaderContext);
  return (
    <>
      <div className={sidebar ? "sidebar" : "sidebar hidden"}>
        <div className="container-side">
          <div className="menu-items">
            <Link to="/">
              <div className="menu-item">
                <HiHome className="icon" /> <span>Home</span>
              </div>
            </Link>
            <Link to="feed/explore">
              <div className="menu-item">
                <MdOutlineExplore className="icon" /> <span>Explore</span>
              </div>
            </Link>
            <Link to="feed/subscriptions">
              <div className="menu-item">
                <MdOutlineSubscriptions className="icon" />
                <span>Subscriptions</span>
              </div>
            </Link>
            <div className="menu-item">
              <MdOutlineVideoLibrary className="icon" /> <span>Library</span>
            </div>
            <div className="menu-item">
              <MdOutlineHistory className="icon" /> <span>History</span>
            </div>
            <div className="menu-item">
              <MdOutlineWatchLater className="icon" />
              <span>Watch later</span>
            </div>
            <div className="menu-item">
              <AiOutlineLike className="icon" /> <span>Liked videos</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
