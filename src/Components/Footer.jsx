import React from "react";
import appStore from "../images/app-store.svg";
import playStore from "../images/play-store.svg";

const Footer = () => {
  return (
    <footer>
      {/*********** the dark blue side of the footer ************/}

      <div className="footer-upper">
        {/*********** the input field in footer ************/}
        <div className="footer-upper--mail-feed">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Subscribe to mail feed"
            className="mail-feed--input"
          />
          <button className="mail-feed--btn">Done →</button>
        </div>

        <div className="footer-upper--footer-body">
          {/*********** company name and description + social media links ************/}
          <div className="footer-body--intro">
            <span className="title">
              <span className="stronger-text">Oswa</span>Tech
            </span>
            <p className="footer-body--intro__desc thin-text">
              The most beautiful exclusive properties and luxury apartments.
            </p>
            <div className="footer-body--into__socials">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/*********** useful links ************/}
          <div className="footer-body--useful-links">
            <p className="title strong-text">Useful Links</p>

            <p className="item thin-text">About</p>
            <p className="item thin-text">Partners</p>
            <p className="item thin-text">Contact</p>
          </div>

          {/*********** help ************/}
          <div className="footer-body--help">  
          <p className="title strong-text">Useful Links</p>

            <p className="item thin-text">FAQs</p>
            <p className="item thin-text">Terms & Conditions</p>
            <p className="item thin-text">Policy</p>
            <p className="item thin-text">Privacy</p>
          </div>

          {/*********** get on app store ************/}
          <div className="footer-body--download">
            <p className="title strong-text">
              Download the App
            </p>
            <div className="download-container">
              <img src={appStore} alt="Get it on App Store" />
              <img src={playStore} alt="Get it on Play Store" />
            </div>
          </div>
        </div>
      </div>
      {/*********** the light blue side of the footer ************/}
      <div className="footer-lower">
        <div className="footer-lower-body">
        <div className="footer-lower--copyright">
          <span className="thin-text">&copy; Copyright 2021, IZAR.com</span>
        </div>
        <div className="footer-lower--terms">
          <a href="#" className="thin-text terms">Terms & Conditions</a>
          <a href="#" className="thin-text">Privacy Policy</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
