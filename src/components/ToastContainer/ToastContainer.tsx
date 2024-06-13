import React from 'react';
import StyledToastContainer from './StyledToastContainer.ts';


interface ToastContainerProps {
  // Define here props of this Component
}

function ToastContainer(props: ToastContainerProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledToastContainer >
      ToastContainer Component!
    </StyledToastContainer>
  );
}

export default ToastContainer;
