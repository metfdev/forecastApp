import { useState, useEffect } from "react";

function LocationComponent() {
  const [location, setLocation] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("La geolocalización no es soportada por este navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        setError("Error: " + err.message);
      }
    );
  }, []);

  return [location, err];
}

export default LocationComponent;
