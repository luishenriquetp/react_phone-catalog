import styled from 'styled-components';

interface IconProps {
  size: number;
}

const StyledIcon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  width: ${props => props.size * 2}px;
  height: ${props => props.size * 2}px;
`;

export default StyledIcon;
