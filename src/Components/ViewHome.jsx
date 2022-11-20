import React from "react";
import { useNavigate } from "react-router";

const ViewHome = () => {
  const navigate = useNavigate(); //used to navigate to the top of the Info page
  return (
    <div
      className="card-features--more-homes"
      onClick={() => {
        navigate("/rent/1/info#");
      }}
    >
      <span>View Home</span>
      <span className="strong-text">{">"}</span>
    </div>
  );
};

export default ViewHome;
