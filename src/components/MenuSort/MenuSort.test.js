import { render, screen } from "@testing-library/react";
import MenuSort from "./MenuSort";

describe("Given a component Meni Sort", () => {
  describe("Then this component is instancied", () => {
    test("it should be rendering a heading", () => {
      render(<MenuSort />);

      const renderedMenu = screen.getAllByRole("heading");

      expect(renderedMenu).not.toBeNull();
    });
  });
});
