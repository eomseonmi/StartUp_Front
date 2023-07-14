import React, { useState, useEffect } from 'react';
import LoadingBar from "../Presentational/LoadingModal";
import ReactLoading from 'react-loading';
const LoadingBarContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);

  }, []);

  return <LoadingBar isLoading={isLoading} />;
};

export default LoadingBarContainer;