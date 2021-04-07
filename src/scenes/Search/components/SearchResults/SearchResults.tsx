import image1 from "assets/images/image4.png";
import image2 from "assets/images/image5.png";
import image3 from "assets/images/image6.png";
import { AnimatedGroup, CloseIcon } from "components";
import { SearchItem } from "models";
import { useMemo } from "react";

import * as Styled from "./searchResults.styled";

interface OwnProps {
  value?: string;
  onCancel?: () => void;
}

export const SearchResults: React.FC<OwnProps> = ({ value = "", onCancel }) => {
  const results: SearchItem[] = useMemo(
    () =>
      [
        {
          title: "Ben’s Food",
          mono: "BF",
        },
        {
          title: "Avoset All Purpose Creamer Concentrate",
          image: image1,
        },
        {
          title: "Cowhead cream cheese FS Bulk Pack",
          image: image2,
        },
        {
          title: "Cowhead natural cream cheese bar 227g",
          image: image3,
        },
        {
          title: "Think Fresh Trading Pte. Ltd.",
          mono: "TFT",
        },
      ] /* TODO : just temp random Math magic so it looks like real search results */
        .sort(() => Math.random() - 0.5)
        .filter(() => Math.pow(Math.random(), value.length) > 0.01),
    [value],
  );
  return (
    <Styled.Wrapper>
      <Styled.CloseButton onClick={onCancel}>
        <CloseIcon />
      </Styled.CloseButton>
      <AnimatedGroup animationDelay={150} updateOnRerender>
        {results.map(({ title, mono, image }) => (
          <Styled.Result key={`${title}.${value}`}>
            <Styled.ResultIcon>
              {image && <Styled.ResultImage src={image} />}
              {mono}
            </Styled.ResultIcon>
            <Styled.ResultTitle>{title}</Styled.ResultTitle>
          </Styled.Result>
        ))}
      </AnimatedGroup>
    </Styled.Wrapper>
  );
};

export default SearchResults;
