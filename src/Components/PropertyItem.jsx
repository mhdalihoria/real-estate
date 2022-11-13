import React from "react";

const PropertyItem = ({
  img,
  isNew,
  type,
  location,
  price,
  bedCount,
  bathCount,
}) => {
  return (
    <div className="listing--card">
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
            <i class="fa-sharp fa-solid fa-bath icon-small bath-icon"></i>
            {bathCount} Baths
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
