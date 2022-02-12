import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import FavoritesPage from "./FavoritesPage";

describe("Given the Favorites Page", () => {
  let wrappedPage;
  beforeAll(() => {
    wrappedPage = (
      <MainPageContextProvider>
        <FavoritesPage />
      </MainPageContextProvider>
    );
  });
  describe("When rendered", () => {
    test("Then it displays the favorites in our API", async () => {
      await render(wrappedPage);
      const streamers = await screen.findAllByText("favStreamer");
      expect(streamers.length).toBe(3);
    });
  });
});
