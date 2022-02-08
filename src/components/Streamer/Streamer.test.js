import { render, screen } from "@testing-library/react";
import Streamer from "./Streamer";

describe("Given the Streamer component", () => {
  describe("When it's rendered", () => {
    test("Then it should be in the document", () => {
      const streamerInfo = {
        id: "124422593",
        display_name: "LEC",
        type: "",
        broadcaster_type: "partner",
        description:
          "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
      };

      render(<Streamer props={streamerInfo}></Streamer>);

      const streamerElement = screen.getByText("partner");

      expect(streamerElement).toBeInTheDocument();
    });
  });
});
