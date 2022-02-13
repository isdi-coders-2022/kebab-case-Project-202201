import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import InfoPage from "./InfoPage";

describe("Given a component Info Page", () => {
  describe("When it's rendered", () => {
    test("it should render an article", () => {
      render(
        <MainPageContextProvider>
          <InfoPage />
        </MainPageContextProvider>
      );

      const article = screen.getByRole("article");

      expect(article).toBeInTheDocument();
    });
    test("it should render an image", async () => {
      render(
        <MainPageContextProvider>
          <InfoPage />
        </MainPageContextProvider>
      );

      const image = await screen.findByRole("img");

      expect(image).toBeInTheDocument();
    });
  });
});
