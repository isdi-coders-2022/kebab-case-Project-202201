import { render, screen } from "@testing-library/react";
import MainContextProvider from "../store/contexts/MainPageContextProvider";
import InfoPage from "./InfoPage";

describe("Given a component Info Page", () => {
  describe("When it's rendered", () => {
    test("it should be render an article", () => {
      render(
        <MainContextProvider>
          <InfoPage />
        </MainContextProvider>
      );

      const article = screen.getByRole("article");

      expect(article).toBeInTheDocument();
    });
  });
});
