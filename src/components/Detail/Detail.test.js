import Detail from "./Detail";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import MainPageContextProvider from "../../store/contexts/MainPageContextProvider";

describe("Given the Detail component", () => {
  const streamerData = {
    profile_image_url:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
    broadcaster_type: "partner",
    display_name: "LEC",
    twitchChannel: "Channel 1",
    description:
      "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
  };

  describe("When it's rendered", () => {
    test("Then it should show 'Name' in the document", () => {
      render(
        <MainPageContextProvider>
          <Detail streamerInfo={streamerData} />
        </MainPageContextProvider>
      );

      const streamerElement = screen.getByText("Name:");

      expect(streamerElement).toBeInTheDocument();
    });

    test("Then it should show 'View Count' in the document", () => {
      render(
        <MainPageContextProvider>
          <Detail streamerInfo={streamerData}></Detail>
        </MainPageContextProvider>
      );

      const streamerElement = screen.getByText("View Count:");
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When it get a const streamer that creates a streamer with StreamerData as props", () => {
    test("then it should create and compare a snapshot with Streamer with StreamerData as component", () => {
      const streamer = TestRenderer.create(
        <MainPageContextProvider>
          <Detail streamerInfo={streamerData} />
        </MainPageContextProvider>
      );
      expect(streamer.toJSON()).toMatchSnapshot();
    });
  });
});
