import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  margin: 10vh auto 0;
  width: 260px;
`;

const Appear = keyframes`
  from {
    transform: scale(1.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 0.1;
  }
`;

export const Icon = styled.div`
  text-align: center;
  font-size: 120px;
  opacity: 0.1;
  animation: ${Appear} ease 0.5s;
  margin: 4px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;
