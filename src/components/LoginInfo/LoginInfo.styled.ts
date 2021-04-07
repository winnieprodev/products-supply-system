import styled from "styled-components";
import { textOnPrimaryColor } from "styles/colors";

interface CircleProps {
  $img: string;
}

export const Circle = styled.div<CircleProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 24px;
  text-align: center;
  line-height: 24px;
  background: center no-repeat url(${({ $img }) => $img});
  background-size: contain;
  border: 1px solid white;
  color: ${textOnPrimaryColor};
`;

export const Dropdown = styled.div`
  width: 230px;
  font-size: 13px;
`;

export const User = styled.div`
  display: flex;
  padding: 8px 0 16px;
`;

interface ImageProps {
  $img: string;
}
export const Image = styled.div<ImageProps>`
  width: 30%;
  height: 60px;
  background: center no-repeat url(${({ $img }) => $img});
  background-size: cover;
  border-radius: 6px;
`;

export const Details = styled.div`
  margin-left: 8px;
`;
export const Title = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 15px;
`;
