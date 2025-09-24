import { useState, useEffect } from "react";

/**
 * @description - Componente que obtiene la ubicación del usuario mediante la geolocalización del navegador
 * @var {Object} location - Objeto que contiene la ubicación del usuario
 * @var {Object} err - Objeto que contiene el error
 *
 * @return {Array} - Array que contiene la ubicación del usuario y el error
 * @author Miguel Ticaray
 */
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
