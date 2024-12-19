import React, { useState } from 'react';
// import { getFullImagePath } from '../helpers/imageHelper';

const MyImage = ({src, alt}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };


  return (
    <img
      src={error ? "load.png" : loading ? "load.png" : src}
      alt={error ? 'Error' : alt}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default MyImage;