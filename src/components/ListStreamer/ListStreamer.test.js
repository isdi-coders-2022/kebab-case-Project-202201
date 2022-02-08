import { screen, render } from "@testing-library/react";

import ListStreamer from "./ListStreamer";

describe("Given a ListStreamer", () => {
  let streamers = null;
  beforeAll(() => {
    streamers = [1, 2];
  });
  describe("When called a list of streamers", () => {
    test("It should display a list of streamers", () => {
      render(<ListStreamer streamers={streamers} />);

      const renderedElement = screen.getAllByRole("article");

      expect(renderedElement[0]).toBeInTheDocument();
    });
  });
});
