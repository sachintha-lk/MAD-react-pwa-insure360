import { useState } from "react";
import Button from "./Button";

interface GetLocationProps {
  onLocationFetch: (latitude: number, longitude: number) => void; // Callback function to pass location data
}

function GetLocation({ onLocationFetch }: GetLocationProps): JSX.Element {
  const [latitude, setLatitude] = useState<number | number>();
  const [longitude, setLongitude] = useState<number | number>();

  const [fetchingLocation, setFetchingLocation] = useState(false);

  function getUserLocationLatLang() {
    fetchLocation();
    return { latitude, longitude };
  }

  function fetchLocation() {
    setFetchingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        setLatitude(position.coords.latitude);

        console.log(position.coords.longitude);
        console.log(position);
        setLongitude(position.coords.longitude);
        setFetchingLocation(false);

        onLocationFetch(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      setFetchingLocation(false);
    }
  }

  return (
    <div className="ml-2 flex items-center gap-2 ">
      <Button variant="secondary" onClick={getUserLocationLatLang}>
        Get Location
      </Button>
      <div>
        {fetchingLocation && <p>Fetching Location...</p>}
        <span> {latitude && <p>Latitude: {latitude}</p>}</span>
        <span> {longitude && <p>Longitude: {longitude}</p>}</span>
      </div>
    </div>
  );
}

export default GetLocation;
