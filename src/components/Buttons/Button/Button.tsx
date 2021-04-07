import React from "react";

import * as Styled from "./button.styled";

interface OwnProps {
  fullWidth?: boolean;
  primary?: boolean;
  transparent?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: string;
}

const Button: React.FC<OwnProps> = ({
  fullWidth = false,
  primary = false,
  transparent = false,
  disabled = false,
  ...buttonProps
}) => (
  <Styled.Button
    $fullWidth={fullWidth}
    $primary={primary}
    $transparent={transparent}
    disabled={disabled}
    {...buttonProps}
  />
);

export default React.memo(Button);
