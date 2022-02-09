import { render, screen } from "@testing-library/react";
import FavoriteStreamer from "./FavoriteStreamer";
import TestRenderer from "react-test-renderer";

describe("Given an instance of FavoriteStreamer component", () => {
  let streamerInfo = null;
  beforeAll(() => {
    streamerInfo = {
      profile_image_url: "a-very-specific-image-url.png",
      display_name: "adri",
    };
  });
  describe("When called with streamer Info", () => {
    test("It should display an article", () => {
      render(<FavoriteStreamer streamerInfo={streamerInfo} />);

      const article = screen.getByRole("article");

      expect(article).toBeInTheDocument();
    });

    test("It should display a heading", () => {
      render(<FavoriteStreamer streamerInfo={streamerInfo} />);

      const header = screen.getByRole("heading");

      expect(header).toHaveTextContent("adri");
    });

    test("It should display an image", () => {
      render(<FavoriteStreamer streamerInfo={streamerInfo} />);

      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
    });
  });

  describe("When receives streamerInfo", () => {
    test("Then it should follow the snapshots shape", () => {
      const favStreamer = TestRenderer.create(
        <FavoriteStreamer streamerInfo={streamerInfo} />
      );
      expect(favStreamer.toJSON()).toMatchSnapshot();
    });
  });
});
