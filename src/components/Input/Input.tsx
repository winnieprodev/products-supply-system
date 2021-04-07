import React from "react";

import * as Styled from "./input.styled";

interface OwnProps {
  value: string;
  onChange: (newValue: string) => void;
  onlyDigits?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<OwnProps> = ({
  value,
  onlyDigits = false,
  maxLength = 30,
  onChange,
  ...rest
}) => (
  <Styled.Input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    $onlyDigits={onlyDigits}
    maxLength={maxLength}
    {...rest}
  />
);

export default Input;
