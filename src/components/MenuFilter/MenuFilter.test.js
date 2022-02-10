import { render, screen } from "@testing-library/react";
import MenuFilter from "./MenuFilter";

describe("Given a component menuFilter", () => {
  describe("When this component its instancied", () => {
    test("it should be render heading", () => {
      render(<MenuFilter />);

      const renderedElement = screen.getAllByRole("heading");

      expect(renderedElement).not.toBeNull();
    });
  });
});
