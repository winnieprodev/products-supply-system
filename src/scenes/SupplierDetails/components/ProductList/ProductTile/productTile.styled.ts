import { GenericProductIcon } from "components";
import styled, { css } from "styled-components";
import {
  primaryColor,
  secondaryColor,
  secondaryColorLighter,
} from "styles/colors";

interface BlockProps {
  $selected: boolean;
}

export const Block = styled.div<BlockProps>`
  cursor: pointer;
  background: white;
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;

  ${({ $selected }) =>
    $selected &&
    css`
      padding: 28px 10px;
      margin-top: -18px;
      background: #f4f4f4;
    `}
`;

export const Content = styled.div`
  position: relative;
  color: #808080;
  background: ${secondaryColorLighter};
  border-radius: 10px;
  position: relative;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${secondaryColor};
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  mix-blend-mode: darken;
`;

export const NoImage = styled(GenericProductIcon)`
  font-size: 100px;
  text-align: center;
  display: inherit;
  margin: 0 auto;
  padding: 4vh 0;
  opacity: 0.2;
`;

export const InfoSection = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
  background: rgba(244, 244, 244, 0.5);
  border-radius: 6px;
`;

export const QuantitySection = styled.div`
  flex-grow: 1;
  padding: 10px 0 10px 10px;
`;

export const QuantityDescription = styled.div`
  color: #000000;
  font-size: 10px;
`;

export const SerialSection = styled.div`
  width: 35%;
  padding: 10px 10px 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${primaryColor};
  font-size: 9px;
  text-align: right;
`;

export const Title = styled.div`
  padding: 10px;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;
