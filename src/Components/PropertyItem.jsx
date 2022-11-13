import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyItem = ({
  img,
  isNew,
  type,
  location,
  price,
  bedCount,
  bathCount,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="listing--card"
      onClick={() => {
        navigate("/rent/1/info");
      }}
    >
      <div className="card-badge">{isNew ? "New" : type}</div>
      <img src={img} alt="House picture" />
      <div className="card-stats">
        <div className="card-price-location">
          <span className="card-price">{price}$</span>
          <span className="card-location">{location}</span>
        </div>
        <div className="card-features">
          <span className="card-features--text">
            <i className="fa-solid fa-bed icon-small"></i>
            {bedCount} Beds
          </span>

          <span className="card-features--text">
            <i className="fa-sharp fa-solid fa-bath icon-small bath-icon"></i>
            {bathCount} Baths
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
