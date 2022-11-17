import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Map Please Wait...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={props.coords}
      mapContainerClassName="query-results--map"
    >
      {/* This is supposed to show the marker on the coordinates provided */}
      {/* <Marker position={coords} />  */}
    </GoogleMap>
  );
};

export default Map;
