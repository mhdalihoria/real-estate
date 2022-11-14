import { useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const coords = useMemo(() => ({ lat: 44, lng: -80 }), []);

  async function data() {
    const response = await axios.get(
      "https://api.3geonames.org/?randomland=yes&json=1"
    );
    const data = await response;
    console.log(data);
  }

  useEffect(() => {
    // fetch('https://api.3geonames.org/?randomland=yes&json=1', {
    //     method: 'GET',
    //     mode: "cors",
    //     headers: {
    //         // 'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': 'https://api.3geonames.org',
    //         // "Access-Control-Allow-Methods": 'GET',
    //       },
    // })
    //     .then(res=>console.log(res))

    //     .catch(err => console.error(err))

    data();
  }, []);

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
