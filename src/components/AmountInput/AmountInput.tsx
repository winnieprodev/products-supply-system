import React from "react";

import { IconButton } from "../Buttons";
import { MinusIcon, PlusIcon } from "../Icons";
import * as Styled from "./amountInput.styled";

interface OwnProps {
  value: number;
  maxLength?: number;
  onChange: (value: number) => void;
}

const AmountInput: React.FC<React.PropsWithChildren<OwnProps>> = ({
  value,
  onChange,
  maxLength = 4,
  children,
}) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value - 1);

  const inputOnChange = (value: string) => {
    const numberValue = parseInt(value, 10);
    Number.isNaN(numberValue) ? onChange(0) : onChange(numberValue);
  };

  const valueForInput = value !== 0 ? value.toString() : "";

  return (
    <Styled.Wrapper>
      <IconButton primary onClick={decrement} disabled={value <= 0}>
        <MinusIcon />
      </IconButton>
      <Styled.Input
        value={valueForInput}
        placeholder="0"
        onChange={inputOnChange}
        maxLength={maxLength}
        onlyDigits
      />
      <IconButton primary onClick={increment}>
        <PlusIcon />
      </IconButton>
      <Styled.Description>{children}</Styled.Description>
    </Styled.Wrapper>
  );
};

export default React.memo(AmountInput);
