import { AsyncWrapper, Breadcrumb, EmptyState, Searchbar } from "components";
import { useGetSupplierDetails } from "queries";
import { Link, useParams } from "react-router-dom";
import ROUTES, { SupplierDetailsParams } from "routes";
import { getSupplierTypeName } from "utils";
import { Empty } from "utils/types";
import { useMemo, useState } from "react";

import { ProductList, SupplierInfo } from "./components";

const SupplierDetails: React.FC<Empty> = () => {
  const {
    supplierId,
    productId,
    supplierType,
    outletId,
  } = useParams<SupplierDetailsParams>();
  const [searchValue, setSearchValue] = useState("");

  const async = useGetSupplierDetails(outletId, supplierId);

  const filteredProducts = useMemo(
    () =>
      async.data?.products.filter(
        ({ title }) =>
          searchValue === "" ||
          title.toLowerCase().includes(searchValue.toLowerCase()),
      ) || [],
    [searchValue, async],
  );
  return (
    <>
      <Searchbar value={searchValue} onChange={setSearchValue} />
      <Breadcrumb>
        <Link to={ROUTES.NEW_ORDER.use({ outletId })}>
          <Breadcrumb.Item>{getSupplierTypeName(supplierType)}</Breadcrumb.Item>
        </Link>
        <Link to={ROUTES.SUPPLIERS_LIST.use({ outletId, supplierType })}>
          <Breadcrumb.Item>Select Supplier</Breadcrumb.Item>
        </Link>
        Supplier Details:
      </Breadcrumb>
      <AsyncWrapper item={async}>
        {async.data?.supplier && (
          <>
            <SupplierInfo info={async.data.supplier} />
            <EmptyState items={filteredProducts} searchPhrase={searchValue}>
              <ProductList
                supplierId={supplierId}
                supplier={async.data.supplier}
                selectedProductId={productId}
                outletId={outletId}
                supplierType={supplierType}
                items={filteredProducts}
              />
            </EmptyState>
          </>
        )}
      </AsyncWrapper>
    </>
  );
};

export default SupplierDetails;
