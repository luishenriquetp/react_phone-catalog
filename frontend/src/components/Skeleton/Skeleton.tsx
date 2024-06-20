import React from 'react';
import StyledSkeleton from './StyledSkeleton.ts';


interface SkeletonProps {
  // Define here props of this Component
}

function Skeleton(props: SkeletonProps): React.ReactNode {
  const {
    // someProps
  } = props;

  return (
    <StyledSkeleton >
      Skeleton Component!
    </StyledSkeleton>
  );
}

export default Skeleton;
