import {
  AsyncWrapper,
  Breadcrumb,
  EmptyState,
  Grid,
  Searchbar,
} from "components";
import { useGetSuppliersList } from "queries";
import { useMemo, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ROUTES, { SuppliersListParams } from "routes";
import { getSupplierTypeName } from "utils";
import { Empty } from "utils/types";

import { SupplierTile } from "./components";

const SuppliersList: React.FC<Empty> = () => {
  const { outletId, supplierType } = useParams<SuppliersListParams>();
  const history = useHistory();

  const [searchValue, setSearchValue] = useState("");

  const suppliersAsync = useGetSuppliersList(outletId, supplierType);

  const selectSupplier = (supplierId: string) =>
    history.push(
      ROUTES.SUPPLIER_DETAILS.use({ supplierId, supplierType, outletId }),
    );

  const filteredData = useMemo(
    () =>
      suppliersAsync.data?.filter(
        ({ title }) =>
          searchValue === "" ||
          title.toLowerCase().includes(searchValue.toLowerCase()),
      ) || [],
    [suppliersAsync, searchValue],
  );
  return (
    <>
      <Searchbar value={searchValue} onChange={setSearchValue} />
      <Breadcrumb>
        <Link to={ROUTES.NEW_ORDER.use({ outletId })}>
          <Breadcrumb.Item>{getSupplierTypeName(supplierType)}</Breadcrumb.Item>
        </Link>
        Select Supplier
      </Breadcrumb>
      <AsyncWrapper
        item={suppliersAsync}
        loadingMessage="Fetching available suppliers"
        errorMessage="Could not fetch available suppliers"
      >
        <EmptyState items={filteredData} searchPhrase={searchValue}>
          <Grid itemsInRow={5} centered={filteredData.length < 5}>
            {filteredData.map((supplier) => (
              <SupplierTile
                key={supplier.id}
                item={supplier}
                onClick={() => selectSupplier(supplier.id)}
              />
            ))}
          </Grid>
        </EmptyState>
      </AsyncWrapper>
    </>
  );
};

export default SuppliersList;
