import React from "react";
import Map from "../Components/Map";
import PropertyItem from "../Components/PropertyItem";
import { cardDetails } from "../utils/mockDB";

const Rent = () => {
  const itemElements = [<PropertyItem {...{ ...cardDetails, isNew: true }} />];

  for (let i = 0; i < 20; i++) {
    itemElements.push(<PropertyItem { ...cardDetails } />);
  }

  return (
    <div>
      <div className="query-results">
        {/* <div className="query-results--map"></div> */}
        <Map />
        <div className="query-results--details">
          <div className="query-results--details--listings">
            {itemElements}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
