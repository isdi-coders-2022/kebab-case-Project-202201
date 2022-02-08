import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it gets a Alt text /logo shawarma/", () => {
    test("then it should found an image in Header with alt /logo shawarma/", () => {
      render(<Header />);

      const streamingImg = screen.queryByAltText("logo shawarma");

      expect(streamingImg).toHaveAttribute("alt", "logo shawarma");
    });
  });
});
