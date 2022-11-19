import React from "react";
import { useNavigate } from "react-router";

const MoreHomes = ({
  img,
  location,
  price,
  bedCount,
  bathCount,
  roomCount,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="listing--card more-homes-card"
      style={{ cursor: "default" }}
    >
      <img src={img} alt="House picture" />
      <div className="card-stats">
        <div className="card-price-location more-homes-location">
          <span className="card-price more-homes-price">{price}$</span>
          <span className="more-homes-room-count">{roomCount} Rooms</span>
        </div>
        <span className="card-location more-homes-location">{location}</span>
        <div className="card-features">
          <div
            className="card-features--more-homes"
            onClick={() => {
              navigate("/rent/1/info");
            }}
          >
            <span>View Home</span>
            <span className="strong-text">{">"}</span>
          </div>
          <span className="card-features--text more-homes-text strong-text">
            <i className="fa-solid fa-bed icon-small icon-smaller"></i>
            {bedCount} Beds
          </span>

          <span className="card-features--text more-homes-text strong-text">
            <i className="fa-sharp fa-solid fa-bath icon-small icon-smaller bath-icon"></i>
            {bathCount} Baths
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoreHomes;
