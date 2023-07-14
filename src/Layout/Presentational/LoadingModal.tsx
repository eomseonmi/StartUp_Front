import React from 'react';
import StartupHeader from './StartupHeader';

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => (
  <><StartupHeader />
  <div className="loading-bar">
    {isLoading && <div className="bar" />}
    로딩중..
  </div>
  </>
);

export default LoadingBar;