import { render } from "@testing-library/react";

import EmptyState from "../EmptyState";

describe("EmptyState", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for zero items", () => {
      const { container } = render(
        <EmptyState items={[]}>do not show that!</EmptyState>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for zero items with custom message", () => {
      const { container } = render(
        <EmptyState items={[]} message="test of a custom message">
          do not show that!
        </EmptyState>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for one item with custom message", () => {
      const { container } = render(
        <EmptyState items={["item"]}>Show me that!</EmptyState>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for zero items when the searchQuery is used", () => {
      const { container } = render(
        <EmptyState items={[]} searchPhrase="some">
          Show me that!
        </EmptyState>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot for zero items with custom message, when the searchQuery is used", () => {
      const { container } = render(
        <EmptyState
          items={[]}
          searchPhrase="some"
          searchMessage="custom message"
        >
          Show me that!
        </EmptyState>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
