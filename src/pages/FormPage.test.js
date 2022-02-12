import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import FormPage from "./FormPage";

describe("Given a Form page", () => {
  describe("When it's rendered", () => {
    test("it should be render a label text", () => {
      render(
        <MainPageContextProvider>
          <FormPage />
        </MainPageContextProvider>
      );

      const text = screen.queryByLabelText("Name:");

      expect(text).toBeInTheDocument();
    });
  });
});
