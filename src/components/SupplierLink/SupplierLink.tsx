import { Supplier } from "models";
import React from "react";
import { Link } from "react-router-dom";
import ROUTES, { SupplierType } from "routes";

interface OwnProps {
  item: Supplier;
  supplierType: SupplierType;
  outletId: string;
}

export const SupplierLink: React.FC<OwnProps> = ({
  item,
  supplierType,
  outletId,
}) => (
  <div>
    Supplier:{" "}
    <Link
      to={ROUTES.SUPPLIER_DETAILS.use({
        outletId,
        supplierType,
        supplierId: item.id,
      })}
    >
      {item.title}
    </Link>
  </div>
);

export default React.memo(SupplierLink);
