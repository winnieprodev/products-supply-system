import styled, { keyframes } from "styled-components";
import { primaryColor } from "styles/colors";

export const ANIMATION_TIME = 1100;

export const Wrapper = styled.div`
  margin: 15px;
  width: 220px;
  display: inline-block;
`;

const animateShadow = keyframes`
  0% {
    top: var(--init-top);
    right: var(--init-right);
    width: var(--init-width);
    height: var(--init-height);
    opacity: 0.3;
    transform: scale(0.5);
  }
  
  5% {
    top: var(--init-top);
    right: var(--init-right);
    transform: scale(1.3);
    opacity: 0.7;
  }
  8% {
    top: var(--init-top);
    right: var(--init-right);
    transform: scale(1);
    opacity: 0.7;
  }


  40% {
    opacity: 0.7;
    width: 30px;
    height: 30px;
    transform: scale(1);
  }

  90% {
    opacity: 0.1;
    transform: scale(0.7);
  }

  100% {
    top: 28px; 
    right: 60px;
    width: 30px;
    height: 30px;
    transform: scale(0.5);
    opacity: 0;
  }
`;

interface ShadowProps {
  $top: number;
  $right: number;
  $width: number;
  $height: number;
}
export const Shadow = styled.div<ShadowProps>`
  position: fixed;
  z-index: 1;
  border-radius: 15px;
  pointer-events: none;
  background: ${primaryColor};
  --init-top: ${({ $top }) => $top}px;
  --init-right: ${({ $right }) => $right}px;
  --init-width: ${({ $width }) => $width}px;
  --init-height: ${({ $height }) => $height}px;

  animation: ${animateShadow} ease ${ANIMATION_TIME}ms;
  animation-fill-mode: forwards;
`;
