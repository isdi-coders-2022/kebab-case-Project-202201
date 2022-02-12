import MainPage from "./MainPage";
import { render, screen } from "@testing-library/react";
import MainContextProvider from "../store/contexts/MainPageContextProvider";

describe("Given a Main page", () => {
  describe("When it's rendered", () => {
    test("it should be render a label text", () => {
      render(
        <MainContextProvider>
          <MainPage />
        </MainContextProvider>
      );

      const streamer = screen.queryByRole("container");

      expect(streamer).toBeInTheDocument();
    });
  });
});
