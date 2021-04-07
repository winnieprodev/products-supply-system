import styled, { css, keyframes } from "styled-components";

export const Anchor = styled.div`
  position: relative;
  display: inline-block;
  z-index: +1;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;

const openDropdownAnimation = keyframes`
    0% { 
        transform: scale(0.1); 
        opacity: 0.1; 
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const closedDropdownAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% { 
        transform: scale(0.1); 
        opacity: 0; 
    }
`;
interface DropdownProps {
  $closing: boolean;
}

export const CLOSE_ANIMATION_TIME = 300;

/* TODO: Make Dropdown slightly more re-usable with those fixed "top" / "right" values, 
   if it will be ever needed */
export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 25px;
  right: -10px;
  background: white;
  padding: 16px 24px;
  border-radius: 6px;
  transform-origin: top right;
  animation: ${openDropdownAnimation} ease 0.25s;
  ${({ $closing }) =>
    $closing &&
    css`
      animation: ${closedDropdownAnimation} ease ${CLOSE_ANIMATION_TIME}ms;
      animation-fill-mode: forwards;
    `}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.15);

  &::before {
    pointer-events: none;
    display: block;
    content: "";
    position: absolute;
    top: -20px;
    right: 10px;
    height: 0;
    width: 0;
    border: 12px solid transparent;
    border-bottom-color: white;
  }
`;

export const CancelArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  z-index: -1;
`;
