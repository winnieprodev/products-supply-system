import { PlusIcon } from "components/Icons";

import * as Styled from "./addNewItem.styled";

interface OwnProps {
  onClick: () => void;
}

const AddNewItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  children,
}) => {
  return (
    <Styled.Block onClick={onClick}>
      <Styled.Icon>
        <PlusIcon />
      </Styled.Icon>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Block>
  );
};

export default AddNewItem;
