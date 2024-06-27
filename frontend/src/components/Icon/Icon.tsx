/* eslint-disable react/require-default-props */
// Icon.tsx
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import { SVGProps } from 'react';
import { IconType, iconMap } from './Icon.ts';
import StyledIcon from './StyledIcon.ts';

const fallBack = () => <></>;

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  icon: IconType;
};

interface IconPropsWithBorder extends IconProps {
  border?: boolean;
  borderColor?: string;
}

function Icon({ size = 16, icon, border = false, borderColor, ...svgProps }: IconPropsWithBorder) {
  const SelectedIcon = iconMap[icon] || fallBack;

  if (border) {
    return (
      <StyledIcon size={size} borderColor={borderColor || 'black'}>
        <SelectedIcon width={size} height={size} {...svgProps} />
      </StyledIcon>
    );
  }

  return <SelectedIcon width={size} height={size} {...svgProps} />;
}

export default Icon;
