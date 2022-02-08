import { render, screen } from "@testing-library/react";
import FavoriteStreamer from "./FavoriteStreamer";

describe("Given an instance of FavoriteStreamer component", () => {
  let streamerInfo = null;
  beforeAll(() => {
    streamerInfo = {
      profile_image_url: "a-very-specific-image-url.png",
      display_name: "adri",
    };
  });
  describe("When called with streamer Info", () => {
    test("It should display the received info", () => {
      render(<FavoriteStreamer streamerInfo={streamerInfo}></FavoriteStreamer>);

      const article = screen.getByRole("article");
      const header = screen.getByRole("heading");

      expect(article).toBeInTheDocument();
      expect(header).toHaveTextContent("adri");
    });
  });
});
