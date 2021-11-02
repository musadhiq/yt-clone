import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsYoutube, BsSearch, BsBell } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { IoAppsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <>
      <div className="header-nav">
        <header>
          <div className="menu">
            <FiMenu size={28} className="icon" />
            <div className="yt-logo">
              <BsYoutube size={30} color="red" className="yt-icon" />
              <h1>YouTube</h1>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button className="submit">
              <BsSearch className="icon" size={15} />
            </button>
          </div>
          <div className="actions">
            <div className="create">
              <MdVideoCall size={23} className="icon" />
            </div>
            <div className="apps">
              <IoAppsOutline size={23} className="icon" />
            </div>
            <div className="subscribe">
              <BsBell size={23} className="icon" />
            </div>
            <div className="avatar">
              <CgProfile size={23} className="icon avatar-icon" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
