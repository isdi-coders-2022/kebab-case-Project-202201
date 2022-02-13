import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import MainPage from "./MainPage";

jest.setTimeout(1000 * 10);
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the Favorites Page", () => {
  let wrapped;
  beforeAll(() => {
    wrapped = (
      <MainPageContextProvider>
        <MainPage></MainPage>
      </MainPageContextProvider>
    );
  });
  describe("When rendered", () => {
    test.only("Then it should render a alist of 2 streamers", async () => {
      render(wrapped);
      const streamers = await screen.findAllByText(/Fextralife/);
      expect(streamers.length).toBe(2);
    });
  });
});
