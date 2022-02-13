import { render, screen } from "@testing-library/react";
import MenuToggle from "./MenuToggle";
import MainPageContextProvider from "../../store/contexts/MainPageContextProvider";

describe("Given a component menu", () => {
  describe("When this component its instancied", () => {
    test("it should be render heading", () => {
      render(
        <MainPageContextProvider>
          <MenuToggle />
        </MainPageContextProvider>
      );

      const renderedElement = screen.getAllByRole("heading");

      expect(renderedElement).not.toBeNull();
    });
  });
});
