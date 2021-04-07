import { Button } from "components";
import { useTimeout } from "hooks";
import React, { useCallback, useRef, useState } from "react";

import * as Styled from "./addToOrderButton.styled";

interface OwnProps {
  edit?: boolean;
  disabled: boolean;
  onClick: () => void;
}

interface ShadowProps {
  right: number;
  top: number;
  width: number;
  height: number;
}
export const AddToOrderButton: React.FC<OwnProps> = ({
  edit,
  disabled,
  onClick,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [shadowProps, setShadowProps] = useState<ShadowProps | undefined>(
    undefined,
  );

  const onClickCallback = () => {
    const boundingBox = buttonRef.current?.getBoundingClientRect();

    if (boundingBox) {
      setShadowProps({
        right: boundingBox.right - boundingBox.width,
        top: boundingBox.top,
        width: boundingBox.width,
        height: boundingBox.height,
      });
    }
    onClick();
  };

  const cleanup = useCallback(() => {
    setShadowProps(undefined);
  }, []);

  useTimeout(cleanup, Styled.ANIMATION_TIME, shadowProps !== undefined);

  return (
    <Styled.Wrapper ref={buttonRef}>
      <Button primary fullWidth disabled={disabled} onClick={onClickCallback}>
        {edit ? "Update order" : "Add to order"}
      </Button>
      {shadowProps && (
        <Styled.Shadow
          $top={shadowProps.top}
          $right={shadowProps.right}
          $width={shadowProps.width}
          $height={shadowProps.height}
        />
      )}
    </Styled.Wrapper>
  );
};

export default React.memo(AddToOrderButton);
