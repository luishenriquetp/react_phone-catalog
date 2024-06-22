import React from 'react';
import Lottie from 'lottie-react';
import animation from './NotFoundAssets/animation.json';

import StyledNotFound from './StyledNotFoundPage.ts';

function NotFoundPage(): React.ReactNode {
  return (
    <StyledNotFound className="not_found">
      <div className="wrapper">
        <Lottie className="animation" animationData={animation} loop />
        <h1>Page not found...</h1>
      </div>
    </StyledNotFound>
  );
}

export default NotFoundPage;
