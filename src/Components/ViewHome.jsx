import React from "react";
import { useNavigate } from "react-router";

const ViewHome = () => {
  const navigate = useNavigate();
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
