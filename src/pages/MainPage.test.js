import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../store/contexts/MainPageContextProvider";
import MainPage from "./MainPage";

jest.setTimeout(1000 * 10);
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the Main Page", () => {
  let wrapped;
  beforeAll(() => {
    wrapped = (
      <MainPageContextProvider>
        <MainPage></MainPage>
      </MainPageContextProvider>
    );
  });
  describe("When rendered", () => {
    test.only("Then it should render a list of 2 streamers", async () => {
      render(wrapped);
      const streamer1 = await screen.findByText("Fextralife");
      const streamer2 = await screen.findAllByText(/Trainwreckstv/);
      expect(streamer1).toBeInTheDocument();
      expect(streamer2).toBeInTheDocument();
    });
  });
});
