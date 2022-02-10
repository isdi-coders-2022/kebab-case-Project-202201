import { render, screen } from "@testing-library/react";
import MenuToggle from "./MenuToggle";

describe("Given a component menu", () => {
  describe("When this component its instancied", () => {
    test("it should be render heading", () => {
      render(<MenuToggle />);

      const renderedElement = screen.getAllByRole("heading");

      expect(renderedElement).not.toBeNull();
    });
  });
});
