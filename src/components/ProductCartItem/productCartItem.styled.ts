import { GenericProductIcon } from "components/Icons";
import styled, { css, keyframes } from "styled-components";
import { secondaryColorLighter } from "styles/colors";

const removeItem = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-300px);
  }
`;

interface WrapperProps {
  $isRemoved: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding-bottom: 12px;
  ${({ $isRemoved }) =>
    $isRemoved &&
    css`
      animation: ${removeItem} 0.7s ease;
      animation-fill-mode: forwards;
    `};
`;

export const ImageBox = styled.div`
  width: 46px;
  height: 46px;
  background: ${secondaryColorLighter};
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  mix-blend-mode: darken;
`;

export const NoImage = styled(GenericProductIcon)`
  font-size: 20px;
  text-align: center;
  display: inherit;
  margin: 0 auto;
  padding: 12px 0;
  opacity: 0.2;
`;

export const Description = styled.div`
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 15px;
  padding-bottom: 4px;
`;

export const Quantities = styled.div`
  font-size: 12px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
