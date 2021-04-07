import styled from "styled-components";
import { primaryColor, primaryColorDarker } from "styles/colors";

export default styled.div`
  & a {
    color: ${primaryColor};

    &:hover {
      color: ${primaryColorDarker};
    }
  }
`;
