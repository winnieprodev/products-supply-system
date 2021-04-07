import styled, { css, keyframes } from "styled-components";
import { secondaryColorLighter } from "styles/colors";

const CirclePulse = keyframes`
    0% { transform: scale(0.4) }
    10% { transform: scale(0.7) }
    20% { transform: scale(0.5) }
    30% { transform: scale(0.75) }
    40% { transform: scale(0.6) }
    50% { transform: scale(0.85) }
    60% { transform: scale(0.7) }
    70% { transform: scale(1) }
    80% { transform: scale(0.8) }
    90% { transform: scale(1.1) }
    100% { transform: scale(0.4) }
`;

export const Circle = styled.div`
  width: 48px;
  height: 48px;
  padding: 8px;
  position: relative;

  &:before {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: ${secondaryColorLighter};
    display: block;
    content: "";
    border-radius: 50%;
    animation: ${CirclePulse} 5s infinite;
  }
`;

const LogoRotate = keyframes`
    0% { transform: rotate(0deg) }
    10% { transform: rotate(0deg) }
    20% { transform: rotate(180deg)}
    80% { transform: rotate(-720deg)}
    100% { transform: rotate(0)}
`;

interface LogoImageProps {
  $delay?: number;
}
export const LogoImage = styled.img<LogoImageProps>`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 48px;
  height: 48px;
  animation: ${LogoRotate} 10s infinite;
  animation-delay: ${({ $delay = 0 }) => $delay}s;
  ${({ $delay }) =>
    $delay &&
    css`
      opacity: 0.3;
    `}
`;
