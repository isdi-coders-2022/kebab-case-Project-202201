import { render, screen } from "@testing-library/react";
import MenuSearch from "./MenuSearch";

describe("Given a component menuFilter", () => {
  describe("When this component its instancied", () => {
    test("it should be render heading", () => {
      render(<MenuSearch />);

      const renderedElement = screen.getAllByRole("textbox");

      expect(renderedElement).not.toBeNull();
    });
  });
});
