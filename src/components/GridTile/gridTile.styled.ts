import styled from "styled-components";
import {
  monoTextColor,
  secondaryColor,
  secondaryColorLighter,
} from "styles/colors";

export const Tile = styled.div`
  background: ${secondaryColorLighter};
  border-radius: 10px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${Tile} {
    background: ${secondaryColor};
  }
`;

export const Mono = styled.div`
  color: ${monoTextColor};
  text-shadow: 0 5px 10px white;
  font-size: 6vw;
  font-weight: bold;
  text-align: center;
  line-height: calc(8vw + 80px);
`;

export const Image = styled.img`
  width: 60%;
  max-height: 8vw;
  padding: 40px;
`;

export const Icon = styled.div`
  color: ${monoTextColor};
  font-size: 6vw;
  font-weight: bold;
  text-align: center;
  line-height: 11vw;
`;

export const Title = styled.div`
  margin: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Children = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
