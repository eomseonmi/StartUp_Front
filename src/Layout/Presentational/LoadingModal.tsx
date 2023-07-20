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
      <div className="ui  massive text loader">
        <h1 className="messagecolor">AI가 생성 중 입니다.</h1></div>
    <p></p>
</div>
  </div>
  </>
);

export default LoadingBar;