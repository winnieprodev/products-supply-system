import { useAsync } from "hooks";
import { useCallback, useState } from "react";

import { GetCartIdMutation, useGetCartIdMutation } from "../gen";

const mapper = (rawData: GetCartIdMutation): number | undefined =>
  rawData?.find_or_create_cart[0]?.id || undefined;

export const useRequestCartId = () => {
  const [getCartIdMutation, { data, loading, error }] = useGetCartIdMutation();

  const [isIdDefined, setIsIdDefined] = useState(false);

  const requestCartId = useCallback((outletId: string, supplierId: string) => {
    getCartIdMutation({
      variables: {
        outletId: parseInt(outletId, 10),
        supplierId: parseInt(supplierId, 10),
      },
    });
    setIsIdDefined(true);
  }, []);

  const clearCartId = useCallback(() => setIsIdDefined(false), []);

  const cartId = useAsync({
    isLoading: loading,
    error,
    data: (isIdDefined && data) || undefined,
    mapper,
  });

  return [cartId, requestCartId, clearCartId] as const;
};
