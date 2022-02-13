import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
      const streamers = await screen.findAllByText(/favStreamer/);
      expect(streamers.length).toBe(3);
    });
  });

  describe("When the delete button is clicked on a Favortire Card", () => {
    test("Then that card should be removed from the document", async () => {
      render(wrappedPage);
      const streamer1 = await screen.findByText("favStreamer1");
      const streamer2 = await screen.findByText("favStreamer2");
      const streamer3 = await screen.findByText("favStreamer3");

      expect(streamer1).toBeInTheDocument();
      expect(streamer2).toBeInTheDocument();
      expect(streamer3).toBeInTheDocument();

      const deleteButton = screen.getAllByTitle("Delete from favorites")[0];
      userEvent.click(deleteButton);

      expect(streamer1).not.toBeInTheDocument();
      expect(streamer2).toBeInTheDocument();
      expect(streamer3).toBeInTheDocument();
    });
  });
});
