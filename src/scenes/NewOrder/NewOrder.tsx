import localSuppliers from "assets/images/localSuppliers.svg";
import warehouse from "assets/images/warehouse.svg";
import { Breadcrumb, GridTile, Searchbar } from "components";
import { Grid } from "components";
import { useHistory, useParams } from "react-router-dom";
import ROUTES, { NewOrderParams } from "routes";
import { Empty } from "utils/types";

const NewOrder: React.FC<Empty> = () => {
  const history = useHistory();
  const { outletId } = useParams<NewOrderParams>();
  return (
    <>
      <Searchbar navigateToSearch />
      <Breadcrumb>Type of order:</Breadcrumb>
      <Grid centered>
        <GridTile
          onClick={() =>
            history.push(
              ROUTES.SUPPLIERS_LIST.use({
                outletId,
                supplierType: "warehouse",
              }),
            )
          }
          image={warehouse}
          title="Warehouse"
        />
        <GridTile
          onClick={() =>
            history.push(
              ROUTES.SUPPLIERS_LIST.use({ outletId, supplierType: "local" }),
            )
          }
          image={localSuppliers}
          title="Local Suppliers"
        />
      </Grid>
    </>
  );
};

export default NewOrder;
