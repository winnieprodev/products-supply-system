import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "components/Icons";
import React, { useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import ROUTES from "routes";

import * as Styled from "./searchbar.styled";

iconLibrary.add(faSearch);

interface OwnProps {
  value?: string;
  onChange?: (newValue: string) => void;
  onCancel?: () => void;
  navigateToSearch?: boolean;
  placeholder?: string;
  focus?: boolean;
}

const Searchbar: React.FC<OwnProps> = ({
  value,
  onChange,
  navigateToSearch,
  onCancel,
  focus,
  placeholder = "Search for a supplier or a product",
}) => {
  const onChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );

  const onKeydownCallback = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (onCancel && event.key === "Escape") {
        onCancel();
      }
    },
    [onCancel],
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef?.current?.focus();
    }
  }, [focus, inputRef]);

  const history = useHistory();

  const onFocus = useCallback(() => {
    if (navigateToSearch) {
      history.push(ROUTES.SEARCH.use({ value: "" }));
    }
  }, [history, navigateToSearch]);
  return (
    <Styled.SearchBar>
      <Styled.Icon>
        <SearchIcon />
      </Styled.Icon>
      <Styled.Input
        ref={inputRef}
        value={value}
        onChange={onChangeCallback}
        onKeyDown={onKeydownCallback}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </Styled.SearchBar>
  );
};

export default Searchbar;
