import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it gets a image with src /logo shawarma/", () => {
    test("then it should found an image with src /logo shawarma/", () => {
      render(<Header />);

      const streamingImg = screen.queryByAltText("logo shawarma");

      expect(streamingImg).toBeInTheDocument();
    });
  });
});
