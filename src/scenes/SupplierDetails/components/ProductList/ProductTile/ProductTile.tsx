import { Product } from "models";

import * as Styled from "./productTile.styled";

interface OwnProps {
  onClick: () => void;
  item: Product;
  isSelected: boolean;
}

const ProductTile: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  item,
  isSelected,
}) => {
  return (
    <Styled.Block $selected={isSelected} onClick={onClick}>
      <div>
        <Styled.Content>
          {item.image ? <Styled.Image src={item.image} /> : <Styled.NoImage />}
          <Styled.InfoSection>
            <Styled.QuantitySection>
              {item.quantities.map(({ type, description }, index) => (
                <Styled.QuantityDescription key={index}>
                  {type}: {description}
                </Styled.QuantityDescription>
              ))}
            </Styled.QuantitySection>
            {item.code && (
              <Styled.SerialSection>{item.code}</Styled.SerialSection>
            )}
          </Styled.InfoSection>
        </Styled.Content>
        <Styled.Title>{item.title}</Styled.Title>
      </div>
    </Styled.Block>
  );
};

export default ProductTile;
