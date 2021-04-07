import { useTimeout } from "hooks";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

import * as Styled from "./dropdown.styled";

interface OwnProps {
  anchor: React.ReactElement;
  closeOnRouteSwitch?: boolean;
}

enum State {
  closed = "closed",
  open = "open",
  closing = "closing",
}

const Dropdown: React.FC<React.PropsWithChildren<OwnProps>> = ({
  anchor,
  closeOnRouteSwitch,
  children,
}) => {
  const [state, setState] = useState<State>(State.closed);
  const location = useLocation();

  useEffect(() => {
    if (closeOnRouteSwitch && location && state === State.open) {
      setState(State.closing);
    }
  }, [closeOnRouteSwitch, location]);

  const toggleState = useCallback(
    () =>
      setState((prev) => (prev === State.open ? State.closing : State.open)),
    [],
  );

  const cleanup = useCallback(() => {
    setState(State.closed);
  }, []);

  useTimeout(cleanup, Styled.CLOSE_ANIMATION_TIME, state === State.closing);

  return (
    <Styled.Anchor>
      {<Styled.Clickable onClick={toggleState}>{anchor}</Styled.Clickable>}
      {state !== State.closed && (
        <>
          <Styled.Dropdown $closing={state === State.closing}>
            {children}
          </Styled.Dropdown>
          {state === State.open && <Styled.CancelArea onClick={toggleState} />}
        </>
      )}
    </Styled.Anchor>
  );
};

export default React.memo(Dropdown);
