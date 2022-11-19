import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Map from "../Components/Map";
import MoreHomes from "../Components/MoreHomes";
import house from "../images/house.jpg";
import { moreHomes } from "../utils/mockDB";
import { ContextObj } from "../Context";

const Info = () => {
  const navigate = useNavigate();
  const {randomCoordinates} = useContext(ContextObj)

  return (
    <div className="info-page-container">
      <div className="navigation strong-text" onClick={() => navigate(-1)}>
        {"< Back"}
      </div>
      <div className="content-container">
        <div className="property-info-container">
          <div className="property-info-container__location-container">
            <h1 className="area-name strong-text">
              Kansas Rental Buildings - New Bahgdad
            </h1>
            <h3 className="area-address thin-text">
              1434 E Kael St, Mesa, AZ 85203
            </h3>
          </div>
          <div className="property-info-container__details-container">
            <div className="details-container__owner-price-share-container">
              <div className="owner-price-container">
                <p className="price-amount strong-text">3000$</p>
                <p className="price-frequency">per month</p>
                <p className="owner">
                <i className="fas fa-crown" style={{fontSize: "1rem"}}></i> <span className="strong-text">Owned by: </span> IZAR
                </p>
              </div>
              <div className="share-container">
                <p className="share">Share</p>
              </div>
            </div>
            <div className="details-container__desc-container">
              <p>
                $799,0004 bd3 ba-- sqft <br /> 545 E Park Avenue, Long Beach, NY
                11561 <br />
                For saleZestimate®: $786,700 <br /> Est. payment: $5,324/mo{" "}
                <br />
                Get pre-qualified For saleZestimate®: $786,700 <br /> Get
                pre-qualified
              </p>
            </div>
            <div className="details-container__feature-container">
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
              <div className="feature">
                <span><i className="fas fa-wifi"></i>WiFi Enabled</span>
              </div>
            </div>
            <div className="details-container__contact-btns-container">
              <button className="contact-btn"><i className="fas fa-info-circle"></i>Seller Details</button>
              <button className="contact-btn"><i class="fab fa-whatsapp"></i>Seller Whatsapp</button>
            </div>
          </div>
          <div className="property-info-container__images">
            <img src={house} alt="image of house" className=" main" />
            <img src={house} alt="image of house" className="property-info--img" />
            <img src={house} alt="image of house" className="property-info--img" />
            <img src={house} alt="image of house" className="property-info--img" />
          </div>
        </div>
        <div className="location-and-places-container">
          <h1 className="location-places-header strong-text">
            Location and near places:
          </h1>
          <div className="cards-container">
            <div className="house-location location-card">
              <div className="location-card-map">
                <Map coords={randomCoordinates}/>
              </div>
              <p className="location-card-title">Nearby Places</p>
            </div>
            <div className="nearby-locations location-card">
              <div className="location-card-map">
                <Map coords={randomCoordinates}/>
              </div>
              <p className="location-card-title">Nearby Places</p>
            </div>
            <div className="nearby-locations location-card">
              <div className="location-card-map">
                <Map coords={randomCoordinates}/>
              </div>
              <p className="location-card-title">Nearby Places</p>
            </div>
            <div className="nearby-locations location-card">
              <div className="location-card-map">
                <Map coords={randomCoordinates}/>
              </div>
              <p className="location-card-title">Nearby Places</p>
            </div>
            <div className="nearby-locations location-card">
              <div className="location-card-map">
                <Map coords={randomCoordinates}/>
              </div>
              <p className="location-card-title">Nearby Places</p>
            </div>
          </div>
        </div>
        <div className="features-and-services-container">
          <h1 className="features-services-header strong-text">Features and services:</h1>
          <div className="features-services-feature-container">
            <div className="feature"><i className="fa-sharp fa-solid fa-bath bath-icon"></i>6 bedrooms</div>
            <div className="feature"><i className="fa-sharp fa-solid fa-bath bath-icon"></i>6 bedrooms</div>
            <div className="feature"><i className="fa-sharp fa-solid fa-bath bath-icon"></i>6 bedrooms</div>
            <div className="feature"><i className="fa-sharp fa-solid fa-bath bath-icon"></i>6 bedrooms</div>
            <div className="feature"><i className="fa-sharp fa-solid fa-bath bath-icon"></i>6 bedrooms</div>
          </div>
        </div>
        <div className="tour-vid-container">
          <h1 className="tour-vid-title strong-text">Take a Tour in the house:</h1>
          <div className="tour-vid-vid">
            <img src={house} alt="House Tour Video" />
          </div>
        </div>
        <div className="more-homes-container">
          <h1 className="more-homes-title">
            More Homes for you:
          </h1>
          <div className="more-homes-card-container">
            <MoreHomes {...moreHomes}/>
            <MoreHomes {...moreHomes}/>
            <MoreHomes {...moreHomes}/>
            <MoreHomes {...moreHomes}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
