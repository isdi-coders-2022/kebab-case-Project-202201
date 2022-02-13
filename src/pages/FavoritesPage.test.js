import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import FavoritesPage from "./FavoritesPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
      render(wrappedPage);
      const streamers = await screen.findAllByText("favStreamer");
      expect(streamers.length).toBe(3);
    });
  });
});
