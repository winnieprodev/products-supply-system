import styled, { css, keyframes } from "styled-components";
import { secondaryColorLighter } from "styles/colors";
export type ModalSize = "small" | "medium" | "large";

interface ModalCoreProps {
  isOpen: boolean;
}

interface ModalWrapperProps {
  $centered: boolean;
  $size: ModalSize;
}

export const Modal = styled.div<ModalCoreProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: +1;
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  width: 24px;
  text-align: center;
  padding: 8px;
  border-radius: 50%;
  color: #000000;
  &:hover {
    background: ${secondaryColorLighter};
  }
`;

const openDropdownAnimation = keyframes`
    0% { 
        transform: scale(0.1) translateY(-30px) translateX(150px); 
        opacity: 0.1; 
    }
    100% {
        transform: scale(1) translateY(0) translatex(0);
        opacity: 1;
    }
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
  transform: none;
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.75rem auto;
  pointer-events: none;
  border-radius: 6px;
  animation: ${openDropdownAnimation} ease 0.25s;
  width: auto;
  min-width: 360px;
  ${({ $centered }) =>
    $centered &&
    css`
      min-height: calc(100% - 3.5rem);
    `}
  ${({ $size }) =>
    $size === "small"
      ? css`
          max-width: 400px;
        `
      : $size === "medium"
      ? css`
          max-width: 600px;
        `
      : $size === "large" &&
        css`
          max-width: 900px;
        `}
`;

export const CancelArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: -1;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 16px 24px;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`;
