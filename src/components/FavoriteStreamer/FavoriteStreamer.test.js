import MainPageContexProvider from "../../store/contexts/MainPageContextProvider";
import { render, screen } from "@testing-library/react";
import FavoriteStreamer from "./FavoriteStreamer";
import TestRenderer from "react-test-renderer";

describe("Given an instance of FavoriteStreamer component", () => {
  let streamerInfo = null;
  beforeAll(() => {
    streamerInfo = {
      profile_image_url: "a-very-specific-image-url.png",
      display_name: "adri",
      id: 546545,
    };
  });
  describe("When called with streamer Info", () => {
    test("It should display an article", () => {
      render(
        <MainPageContexProvider>
          <FavoriteStreamer streamerInfo={streamerInfo} />
        </MainPageContexProvider>
      );

      const article = screen.getByRole("article");

      expect(article).toBeInTheDocument();
    });

    test("It should display a heading", () => {
      render(
        <MainPageContexProvider>
          <FavoriteStreamer streamerInfo={streamerInfo} />
        </MainPageContexProvider>
      );

      const header = screen.getByRole("heading");

      expect(header).toHaveTextContent("adri");
    });

    test("It should display two images", () => {
      render(
        <MainPageContexProvider>
          <FavoriteStreamer streamerInfo={streamerInfo} />
        </MainPageContexProvider>
      );

      const images = screen.getAllByRole("img");
      const expectedImages = 2;

      expect(images.length).toBe(expectedImages);
    });
  });

  describe("When receives streamerInfo", () => {
    test("Then it should follow the snapshots shape", () => {
      const favStreamer = TestRenderer.create(
        <MainPageContexProvider>
          <FavoriteStreamer streamerInfo={streamerInfo} />
        </MainPageContexProvider>
      );
      expect(favStreamer.toJSON()).toMatchSnapshot();
    });
  });
});
