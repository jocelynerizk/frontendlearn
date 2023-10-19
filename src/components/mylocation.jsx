import React from 'react';

const MyLocationLink = () => {
  const latitude = 33.9132446;
  const longitude = 35.5938398;

  return (
    <a
      href={`https://gps-coordinates.org/my-location.php?lat=${latitude}&lng=${longitude}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      ({latitude}, {longitude})
    </a>
  );
};

export default MyLocationLink;
