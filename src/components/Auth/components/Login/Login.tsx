import { Button } from "components";

import * as Styled from "./login.styled";

interface OwnProps {
  onClick: () => void;
}
const Login: React.FC<OwnProps> = ({ onClick }) => (
  <>
    <Styled.Wrapper>
      <Button primary fullWidth onClick={onClick}>
        Login
      </Button>
    </Styled.Wrapper>
    <Styled.Footer />
  </>
);

export default Login;
