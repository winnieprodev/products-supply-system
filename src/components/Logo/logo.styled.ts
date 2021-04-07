import styled from "styled-components";
import { secondaryColorLighter } from "styles/colors";

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  padding: 8px;
  position: relative;

  &:before {
    position: absolute;
    right: 12px;
    top: 12px;
    left: 12px;
    bottom: 12px;
    z-index: -1;
    background: ${secondaryColorLighter};
    display: block;
    content: "";
    border-radius: 50%;
  }
`;

export const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;
