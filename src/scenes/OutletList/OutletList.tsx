import {
  AsyncWrapper,
  Breadcrumb,
  EmptyState,
  GridTile,
  OutletIcon,
  Searchbar,
} from "components";
import { Grid } from "components";
import { useGetOutlets } from "queries";
import { useMemo, useState } from "react";
import { useHistory } from "react-router";
import ROUTES from "routes";
import { Empty } from "utils/types";

import { OutletInfo } from "./components";

const OutletList: React.FC<Empty> = () => {
  const history = useHistory();
  const outlets = useGetOutlets();
  const [searchValue, setSearchValue] = useState("");

  const getSelectOutlet = (outletId: string) => () =>
    history.push(ROUTES.NEW_ORDER.use({ outletId }));

  const filteredData = useMemo(
    () =>
      outlets.data?.filter(
        ({ fullname }) =>
          searchValue === "" ||
          fullname.toLowerCase().includes(searchValue.toLowerCase()),
      ) || [],
    [outlets, searchValue],
  );
  return (
    <AsyncWrapper
      item={outlets}
      loadingMessage="Fetching outlet list..."
      errorMessage="Couldn't fetch outlet list"
    >
      <Searchbar value={searchValue} onChange={setSearchValue} />
      <Breadcrumb>Select outlet:</Breadcrumb>
      <EmptyState
        items={filteredData}
        message="There are no outlets assigned to your account"
        searchPhrase={searchValue}
      >
        <Grid centered>
          {filteredData.map(({ id, fullname, address, phone }) => (
            <GridTile
              key={id}
              onClick={getSelectOutlet(id)}
              icon={<OutletIcon />}
              title={fullname}
            >
              <OutletInfo address={address} phone={phone} />
            </GridTile>
          ))}
        </Grid>
      </EmptyState>
    </AsyncWrapper>
  );
};

export default OutletList;
