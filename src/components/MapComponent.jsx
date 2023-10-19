import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Parse latitude and longitude from the URL (https://mylocationnow.io/share-my-location?lat=33.8916&lng=35.5024)
    const urlParams = new URLSearchParams(window.location.search);
    //const latitude = parseFloat(urlParams.get('lat'));
    //const longitude = parseFloat(urlParams.get('lng'));
    const latitude=33.8916
     const longitude =35.5024
    
    // Create a new map centered at the provided location
    const googleMap = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
    });

    // Create a marker at the provided location
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: googleMap,
      title: "Location from URL",
    });

    // Set the map object to state for future use
    setMap(googleMap);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
