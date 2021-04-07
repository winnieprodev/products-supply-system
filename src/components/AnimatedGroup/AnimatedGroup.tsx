import React, { useEffect, useRef, useState } from "react";
import { spring } from "react-flip-toolkit";

import * as Styled from "./animatedGroup.styled";

interface OwnProps {
  onComplete?: () => void;
  updateOnRerender?: boolean;
  animationDelay?: number;
}

export const AnimatedGroup: React.FC<React.PropsWithChildren<OwnProps>> = ({
  children,
  onComplete,
  updateOnRerender = false,
  animationDelay = 0,
}) => {
  const [firstRun, setFirstRun] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (updateOnRerender === false && firstRun === false) {
      return;
    }
    if (containerRef === null || containerRef.current === null) {
      return;
    }
    const squares = [...(containerRef.current.children as any)];
    squares.forEach((el, i) => {
      el.classList.add(Styled.ANIMATED_CLASS_LIST);

      spring({
        config: "stiff",
        values: {
          translateY: [-15, 0],
          opacity: [0, 1],
        },
        onUpdate: ({ translateY, opacity }: any) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        delay: i * 30 + animationDelay,
        onComplete,
      });
      setFirstRun(false);
    });
  }, [
    children,
    firstRun,
    updateOnRerender,
    containerRef,
    onComplete,
    animationDelay,
  ]);
  return (
    <Styled.Wrapper ref={containerRef} $firstRun={firstRun}>
      {children}
    </Styled.Wrapper>
  );
};

export default React.memo(AnimatedGroup);
