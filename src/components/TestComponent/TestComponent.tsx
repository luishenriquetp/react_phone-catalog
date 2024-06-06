import React from 'react';
import IconComponent from '../IconComponent/IconComponent.tsx';
import { IconType } from '../IconComponent/IconComponent.types.ts';

function TestComponent() {
  return (
    <div>
      <h1>Test Component</h1>
      <IconComponent icon={IconType.FILLED_HEARTLIKE} size={120} />
    </div>
  );
}

export default TestComponent;
