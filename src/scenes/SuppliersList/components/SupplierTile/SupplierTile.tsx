import { GridTile } from "components";
import { Supplier } from "models";
import React from "react";

interface OwnProps {
  onClick: () => void;
  item: Supplier;
}

const SupplierTile: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  item,
}) => {
  return <GridTile onClick={onClick} title={item.title} mono={item.mono} />;
};

export default React.memo(SupplierTile);
