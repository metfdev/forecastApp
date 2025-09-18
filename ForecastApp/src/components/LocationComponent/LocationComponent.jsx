import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch.jsX';

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
        setError("Error al obtener la ubicación: " + err.message);
      }
    );
  }, []);

  const { data, loading, error } = useFetch(`https://api.openweathermap.org/data/3.0/reverse?lat=${location?.latitude}&lon=${location?.longitude}&APPID=${import.meta.env.VITE_APP_API_KEY}`);

  if (loading) return <p>Obteniendo ubicación...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {location ? (
        <p>{console.log(data)}</p>
      ) : (
        <p>{err}</p>
      )}
    </div>
  );
}

export default LocationComponent;