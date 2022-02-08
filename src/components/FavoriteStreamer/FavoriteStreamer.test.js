import { render, screen } from "@testing-library/react";
import FavoriteStreamer from "./FavoriteStreamer";

describe("Given an instance of FavoriteStreamer component", () => {
  let streamerInfo = null;
  beforeAll(() => {
    streamerInfo = {
      profile_image_url: "",
      display_name: "adri",
    };
  });
  describe("When called with streamer Info", () => {
    test("It should display the received info", () => {
      render(<FavoriteStreamer streamerInfo={streamerInfo}></FavoriteStreamer>);

      const renderedElement = screen.getByText("adri");

      expect(renderedElement).toBeInTheDocument();
    });
  });
});
