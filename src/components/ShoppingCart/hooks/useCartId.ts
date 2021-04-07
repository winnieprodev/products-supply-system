import { useParamsOutsideSwitch } from "hooks";
import ROUTES from "routes";
import { useEffect, useState } from "react";
import { useRequestCartId } from "queries";

export const useCartId = () => {
  const [cartId, requestCartId, clearCartId] = useRequestCartId();

  const params = useParamsOutsideSwitch(ROUTES.SUPPLIER_DETAILS);

  const [prevParams, setPrevParams] = useState<typeof params>();

  useEffect(() => {
    if (!params) {
      clearCartId();
    } else if (
      params.outletId !== prevParams?.outletId ||
      params.supplierId !== prevParams?.supplierId
    ) {
      requestCartId(params.outletId, params.supplierId);
    }
    setPrevParams(params);
  }, [params]);

  return cartId;
};
