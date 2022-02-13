import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import FavoritPage from "./FavoritesPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a Favorite Page", () => {
  describe("When its rendered", () => {
    test("Then should rendered button", () => {
      render(
        <BrowserRouter>
          <MainPageContextProvider>
            <FavoritPage />
          </MainPageContextProvider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
