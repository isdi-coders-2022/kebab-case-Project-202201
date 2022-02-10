import Detail from "./Detail";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Given the Detail component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'partner' in the document", () => {
      const streamerData = {
        profile_image_url:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
        broadcaster_type: "partner",
        display_name: "LEC",
        twitchChannel: "Channel 1",
        description:
          "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
      };

      render(<Detail streamerData={streamerData}></Detail>);

      const streamerElement = screen.getByText("partner");
      expect(streamerElement).toBeInTheDocument();
    });
  });
});
