import { render } from "@testing-library/react";

import Modal from "../Modal";

describe("Modal", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot with default. props", () => {
      const { container } = render(
        <Modal isOpen={true} onClose={jest.fn()}>
          test
        </Modal>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with size = small", () => {
      const { container } = render(
        <Modal isOpen={true} size={"small"} onClose={jest.fn()}>
          test
        </Modal>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with size = medium", () => {
      const { container } = render(
        <Modal isOpen={true} size={"medium"} onClose={jest.fn()}>
          test
        </Modal>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with size = large", () => {
      const { container } = render(
        <Modal isOpen={true} size={"large"} onClose={jest.fn()}>
          test
        </Modal>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    test("it matches the snapshot with centered = true", () => {
      const { container } = render(
        <Modal isOpen={true} centered onClose={jest.fn()}>
          test
        </Modal>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
