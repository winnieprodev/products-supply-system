import styled from "styled-components";
import { secondaryColorLighter } from "styles/colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  margin: 10px;
  margin-left: 0;
  background: ${secondaryColorLighter};
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  & > * {
    opacity: 0.2;
    padding: 12px 0;
  }
`;

export const Info = styled.div``;

export const OutletTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const OutletSubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const OutletAddress = styled.div`
  font-size: 13px;
  margin: 6px 0 2px;
`;

export const OutletPhone = styled.div`
  font-size: 13px;
`;
