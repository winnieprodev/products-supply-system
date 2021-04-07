import styled from "styled-components";

import { Input as InputComponent } from "../Input";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Description = styled.div`
  padding-left: 8px;
`;

export const Input = styled(InputComponent)`
  margin: 0 2px;
`;
