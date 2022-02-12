import MainPage from "./MainPage";
import { render, screen } from "@testing-library/react";
import MainContextProvider from "../store/contexts/MainPageContextProvider";

describe("Given a Form page", () => {
  describe("When it's rendered", () => {
    test("it should be render a label text", () => {
      render(
        <MainContextProvider>
          <MainPage />
        </MainContextProvider>
      );

      const text = screen.queryByLabelText("Name:");

      expect(text).toBeInTheDocument();
    });
  });
});
