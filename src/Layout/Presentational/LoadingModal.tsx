import React from 'react';
import StartupHeader from './StartupHeader';

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => (
  <><StartupHeader />
  <div className="loading-bar">
    {isLoading && <div className="bar" />}
      <div className="ui active inverted dimmer">
      <div className="ui massive text loader">AI가 문구를 생성하고 있습니다..</div>
    <p></p>
</div>
  </div>
  </>
);

export default LoadingBar;