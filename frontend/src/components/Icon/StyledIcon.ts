import styled from 'styled-components';

interface StyledIconProps {
  size: number;
  borderColor?: string;
}

const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  width: ${props => props.size * 2}px;
  height: ${props => props.size * 2}px;
  border: 1px solid ${({ borderColor }) => borderColor};
`;

export default StyledIcon;
