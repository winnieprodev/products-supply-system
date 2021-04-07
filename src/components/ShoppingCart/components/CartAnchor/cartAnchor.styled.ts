import styled, { keyframes } from "styled-components";
import { primaryColor, textOnPrimaryColor } from "styles/colors";

const popAppear = keyframes`
  from{ 
    transform: scale(0.3);
    opacity: 0;
    width: 0;
  }
  to {
    width: 24px;
    opacity: 1;
    transform: scale(1);
  }
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  background: ${primaryColor};
  animation: ${popAppear} ease 0.3s;
  color: ${textOnPrimaryColor};
`;
