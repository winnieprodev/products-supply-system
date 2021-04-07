import styled from "styled-components";
import { primaryColor } from "styles/colors";

export const Wrapper = styled.div`
  width: 200px;
  margin: 10vw auto 0;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${primaryColor};
  height: 10vh;
`;
