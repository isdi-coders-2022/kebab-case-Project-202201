import { render, screen } from "@testing-library/react";
import MainContextProvider from "../store/contexts/MainPageContextProvider";
import FormPage from "./FormPage";

describe("Given a Form page", () => {
  describe("When it's rendered", () => {
    test("it should be render a form", () => {
      render(
        <MainContextProvider>
          <FormPage></FormPage>
        </MainContextProvider>
      );

      const text = screen.queryByLabelText("Name:");

      expect(text).toBeInTheDocument();
    });
  });
});
