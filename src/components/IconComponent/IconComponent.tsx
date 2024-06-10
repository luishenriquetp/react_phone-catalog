/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { iconMap, IconProps } from './IconComponent.types.ts';

const fallBack = () => <></>;

function Icon({ size = 16, icon, ...svgProps }: IconProps) {
  const SelectedIcon = iconMap[icon] || fallBack;

  return <SelectedIcon width={size} height={size} {...svgProps} />;
}

export default Icon;
