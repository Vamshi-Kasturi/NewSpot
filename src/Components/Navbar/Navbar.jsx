import React from "react";
import "./Navbar.css";
import { assets } from '../../assets/img';


export default function Navbar() {
 
  const d = new Date();
  const todayDate = d.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

  return (
    <div className="main-nav">
      <nav>
        <img  className="logo" src={assets.LogoNav} alt="" />
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="search" placeholder="Search News, Topics, or Keywords..." name="search" id="search" />
        </div>
        <h5> {todayDate} </h5>
      </nav>
    </div>
  );
}
