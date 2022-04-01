import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"> </i>
              </a>
              <a href="https://myaccount.google.com/intro/profile">
                <i className="fa fa-google-plus-square"> </i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"> </i>
                {/* fa-instagram-square, doesn't work */}
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square"> </i>
              </a>
              <a href="https://twitter.com/?lang=en">
                <i className="fa fa-twitter"> </i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
          <span className="primary-text"><em>
              {" "}
              Hello, I am </em><span className="highlighted-text">Leon</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developing Programmer ",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Development",
                    1000,
                    "Cross Platform v",
                    1000,
                    "React/React Native Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Aspiring programmer in Java, Python and ReactJS
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="resume.jpg" download="This is a resume.jpg">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'> </div>
        </div>
      </div>
    </div>
  );
}
// https://youtu.be/ilw_g_rxtVc?t=2835
