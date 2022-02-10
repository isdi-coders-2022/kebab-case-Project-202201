import Detail from "./Detail";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

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
    test("Then it should show 'partner' in the document", () => {
      render(<Detail streamerInfo={streamerData} />);

      const streamerElement = screen.getByText(/partner/);

      expect(streamerElement).toBeInTheDocument();
    });

    test("Then it should show 'LEC' in the document", () => {
      render(<Detail streamerInfo={streamerData}></Detail>);

      const streamerElement = screen.getByText(/Channel 1/);
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a description shorter than 100", () => {
    test("Then it should show 'texto breve' in the document", () => {
      streamerData.description = "texto breve";

      render(<Detail streamerInfo={streamerData}></Detail>);

      const streamerElement = screen.getByText(/texto breve/);
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When the Streamer card is clicked", () => {
    test("Then the passed action should be called", () => {
      const mockFunction = jest.fn();

      render(
        <Detail streamerInfo={streamerData} actionOnClick={mockFunction} />
      );

      const articleElement = screen.queryByRole("article");
      userEvent.click(articleElement);

      expect(mockFunction).toHaveBeenCalled();
    });
  });

  describe("When it get a const streamer that creates a streamer with StreamerData as props", () => {
    test("then it should create and compare a snapshot with Streamer with StreamerData as component", () => {
      const streamer = TestRenderer.create(
        <Detail streamerInfo={streamerData} />
      );
      expect(streamer.toJSON()).toMatchSnapshot();
    });
  });
});
