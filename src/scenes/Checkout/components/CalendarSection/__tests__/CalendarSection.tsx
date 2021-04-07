import { render } from "@testing-library/react";

import CalendarSection from "../CalendarSection";

describe("CalendarSection", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <CalendarSection
          value={new Date("2020-10-10")}
          onChange={jest.fn()}
          availableDates={["2020-10-11", "2020-10-20"]}
        />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
