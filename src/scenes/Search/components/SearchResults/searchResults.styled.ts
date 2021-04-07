import styled from "styled-components";
import { secondaryColorLighter } from "styles/colors";

export const Wrapper = styled.div`
  position: relative;
  padding: 40px 0;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 8px;
  width: 16px;
  height: 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;

  &: hover {
    background-color: ${secondaryColorLighter};
  }
`;

export const ResultIcon = styled.div`
  width: 34px;
  height: 30px;
  border-radius: 6px;
  background: ${secondaryColorLighter};
  text-align: center;
  font-weight: bold;
  color: #9e9e9e;
  line-height: 30px;
  margin: 8px;
`;

export const Result = styled.div`
  display: flex;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 6px;

  &: hover {
    background-color: ${secondaryColorLighter};

    ${ResultIcon} {
      background-color: white;
    }
  }
`;

export const ResultImage = styled.img`
  max-height: 100%;
  width: 100%;
  mix-blend-mode: darken;
`;

export const ResultTitle = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 4px;
`;
