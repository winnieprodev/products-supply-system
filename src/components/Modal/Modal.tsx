import { CloseIcon } from "components";
import React from "react";

import * as Styled from "./modal.styled";

interface OwnProps {
  isOpen: boolean;
  centered?: boolean;
  size?: Styled.ModalSize;
  onClose: (isOpen: boolean) => void;
}

const Modal: React.FC<React.PropsWithChildren<OwnProps>> = ({
  isOpen,
  centered = false,
  size = "medium",
  children,
  onClose,
}) => {
  const toggleIsOpen = () => onClose(!isOpen);
  return (
    <Styled.Modal isOpen={isOpen}>
      <Styled.ModalWrapper $size={size} $centered={centered}>
        <Styled.ModalContent>
          <Styled.CloseIcon onClick={toggleIsOpen}>
            <CloseIcon />
          </Styled.CloseIcon>
          {children}
        </Styled.ModalContent>
      </Styled.ModalWrapper>
      <Styled.CancelArea onClick={toggleIsOpen} />
    </Styled.Modal>
  );
};

export default React.memo(Modal);
