import React from "react";

import * as Styled from "./gridTile.styled";

interface BaseOwnProps {
  onClick: () => void;
  title: string;
  image?: string;
  icon?: React.ReactNode;
  mono?: string;
}

interface WithImageProps extends BaseOwnProps {
  image: string;
}

interface WithIconProps extends BaseOwnProps {
  icon: React.ReactNode;
}
interface WithMonoProps extends BaseOwnProps {
  mono: string;
}

type OwnProps = WithImageProps | WithMonoProps | WithIconProps;

const GridTile: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  title,
  image,
  icon,
  mono,
  children,
}) => {
  return (
    <Styled.Wrapper onClick={onClick}>
      <Styled.Tile>
        {icon && <Styled.Icon>{icon}</Styled.Icon>}
        {image && <Styled.Image src={image} />}
        {mono && <Styled.Mono>{mono}</Styled.Mono>}
        {children}
      </Styled.Tile>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default React.memo(GridTile);
