import { ErrorHandler, LoaderScreen } from "components";
import { Async, WrapperMode } from "models";
import React from "react";

interface OwnProps {
  item: Async<any> | undefined;
  loadingMessage?: string;
  errorMessage?: string;
  mode?: WrapperMode;
}

export const AsyncWrapper: React.FC<React.PropsWithChildren<OwnProps>> = ({
  item,
  errorMessage,
  loadingMessage,
  children,
  mode,
}) => {
  let body;

  if (item?.isLoading) {
    body = <LoaderScreen mode={mode}>{loadingMessage}</LoaderScreen>;
  } else if (item?.error) {
    body = (
      <ErrorHandler message={errorMessage} mode={mode} error={item.error} />
    );
  } else {
    body = children;
  }
  return <>{body}</>;
};

export default AsyncWrapper;
