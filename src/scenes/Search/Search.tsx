import { Searchbar } from "components";
import { useCallback } from "react";
import { useHistory, useParams } from "react-router";
import ROUTES, { SearchParams } from "routes";
import { Empty } from "utils/types";

import { SearchResults } from "./components";

const Search: React.FC<Empty> = () => {
  const { value } = useParams<SearchParams>();
  const history = useHistory();

  const onChange = useCallback(
    (newValue: string) => {
      history.replace(ROUTES.SEARCH.use({ value: newValue }));
    },
    [history],
  );
  return (
    <>
      <Searchbar
        focus
        value={value}
        onChange={onChange}
        onCancel={history.goBack}
      />
      <SearchResults value={value} onCancel={history.goBack} />
    </>
  );
};

export default Search;
