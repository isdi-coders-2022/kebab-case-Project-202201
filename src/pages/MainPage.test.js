import MainPage from "./MainPage";
import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";

describe("Given a Main page", () => {
  describe("When it's rendered", () => {
    test("it should be render a div text", () => {
      render(
        <MainPageContextProvider>
          <MainPage />
        </MainPageContextProvider>
      );

      const streamer = screen.getByText("div");

      expect(streamer).toBeInTheDocument();
    });
  });
});
