import { AsyncWrapper, EditIcon, IconButton, TrashIcon } from "components";
import { ProductCartInfo, WrapperMode } from "models";
import { useGetProduct } from "queries";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import ROUTES, { SupplierType } from "routes";

import * as Styled from "./productCartItem.styled";
interface OwnProps {
  item: ProductCartInfo;
  onRemove: () => void;
  outletId: string;
  supplierId: string;
  supplierType: SupplierType;
}

const ProductCartItem: React.FC<OwnProps> = ({
  item: { productId, quantities },
  onRemove,
  outletId,
  supplierId,
  supplierType,
}) => {
  const product = useGetProduct(productId);
  const [isRemoved, setIsRemoved] = useState(false);

  const history = useHistory();

  const onRemoveCallback = useCallback(() => {
    setIsRemoved(true);
    onRemove();
  }, [onRemove]);

  const onEditCallback = useCallback(() => {
    history.replace({
      pathname: ROUTES.SUPPLIER_DETAILS.use({
        productId,
        supplierId,
        supplierType,
        outletId,
      }),
      search: "?edit=true",
    });
  }, [history]);

  return (
    <AsyncWrapper item={product} mode={WrapperMode.singleLine}>
      {product.data && (
        <Styled.Wrapper $isRemoved={isRemoved}>
          <Styled.ImageBox>
            {product.data.image ? (
              <Styled.Image
                src={product.data.image}
                alt="Product image"
                aria-hidden
              />
            ) : (
              <Styled.NoImage />
            )}
          </Styled.ImageBox>
          <Styled.Description>
            <Styled.Title>{product.data.title}</Styled.Title>
            {quantities.map(({ type, amount }) => (
              <Styled.Quantities key={type}>
                {amount}{" "}
                {
                  product.data?.quantities.find(
                    (quantity) => quantity.type === type,
                  )?.name
                }
              </Styled.Quantities>
            ))}
          </Styled.Description>
          <Styled.Icons>
            <IconButton primary onClick={onEditCallback}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={onRemoveCallback}>
              <TrashIcon />
            </IconButton>
          </Styled.Icons>
        </Styled.Wrapper>
      )}
    </AsyncWrapper>
  );
};

export default ProductCartItem;
