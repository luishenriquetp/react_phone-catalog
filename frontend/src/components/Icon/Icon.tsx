/* eslint-disable react/require-default-props */
// Icon.tsx
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { iconMap, IconProps } from './Icon.ts';
import StyledIcon from './StyledIcon.ts';

const fallBack = () => <></>;

interface IconPropsWithBorder extends IconProps {
  border?: boolean;
}

function Icon({ size = 16, icon, border = false, ...svgProps }: IconPropsWithBorder) {
  const SelectedIcon = iconMap[icon] || fallBack;

  if (border) {
    return (
      <StyledIcon size={size}>
        <SelectedIcon width={size} height={size} {...svgProps} />
      </StyledIcon>
    );
  }

  return <SelectedIcon width={size} height={size} {...svgProps} />;
}

export default Icon;
