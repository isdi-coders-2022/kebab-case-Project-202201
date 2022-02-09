import { render, screen } from "@testing-library/react";
import Streamer from "./Streamer";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Given the Streamer component", () => {
  const streamerInfo = {
    id: "124422593",
    display_name: "LEC",
    type: "online",
    broadcaster_type: "partner",
    description:
      "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
    profile_image_url:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
  };

  describe("When it's rendered", () => {
    test("Then it should show 'partner' in the document", () => {
      render(<Streamer props={streamerInfo}></Streamer>);

      const streamerElement = screen.getByText("partner");
      expect(streamerElement).toBeInTheDocument();
    });

    test("Then it should show 'LEC' in the document", () => {
      render(<Streamer props={streamerInfo}></Streamer>);

      const streamerElement = screen.getByText("LEC");
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a description shorter than 100", () => {
    test("Then it should show 'texto breve' in the document", () => {
      streamerInfo.description = "texto breve";
      render(<Streamer props={streamerInfo}></Streamer>);

      const streamerElement = screen.getByText("texto breve");
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When the Streamer card is clicked", () => {
    test("Then the passed action should be called", () => {
      const mockFunction = jest.fn();

      render(<Streamer props={streamerInfo} actionOnClick={mockFunction} />);

      const streamerCard = screen.queryByText("partner");
      userEvent.click(streamerCard);
      expect(mockFunction).toHaveBeenCalled();
    });
  });

  describe("When it get a const streamer that creates a streamer with StreamerInfo as props", () => {
    test("then it should create and compare a snapshot with Streamer with StreamerInfo as component", () => {
      const streamer = TestRenderer.create(<Streamer props={streamerInfo} />);
      expect(streamer.toJSON()).toMatchSnapshot();
    });
  });
});
