import React from 'react';
import IconComponent from '../IconComponent/IconComponent.tsx';
import { IconType } from '../IconComponent/IconComponent.types.ts';

function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
      <IconComponent icon={IconType.FILLED_HEARTLIKE} />
    </div>
  );
}

export default TestComponent;
