import { useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { generateRandomCoords } from "../utils/randomCoords";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  
  const coords = useMemo(() => (generateRandomCoords()), []);
//   const coords = useMemo(() => ({ lat: 44, lng: -80 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={coords}
      mapContainerClassName="query-results--map"
    >
      {/* This is supposed to show the marker on the coordinates provided */}
      {/* <Marker position={coords} />  */}
    </GoogleMap>
  );
};

export default Map;
