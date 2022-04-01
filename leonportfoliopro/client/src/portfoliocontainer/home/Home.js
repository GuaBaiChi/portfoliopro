import React from "react";
import Header from './header/Header';
import Profile from "./profile/Profile.js";
import Footer from "./footer/Footer.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
