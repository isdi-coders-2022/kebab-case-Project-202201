import Streamer from "./Streamer";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import MainPageContextProvider from "../../store/contexts/MainPageContextProvider";

describe("Given the Streamer component", () => {
  const streamerInfo2 = {
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
      render(
        <BrowserRouter>
          <MainPageContextProvider>
            <Streamer streamerInfo={streamerInfo2}></Streamer>
          </MainPageContextProvider>
        </BrowserRouter>
      );

      const streamerElement = screen.getByText("LEC");
      expect(streamerElement).toBeInTheDocument();
    });

    test("Then it should show 'LEC' in the document", () => {
      render(
        <BrowserRouter>
          <MainPageContextProvider>
            <Streamer streamerInfo={streamerInfo2}></Streamer>
          </MainPageContextProvider>
        </BrowserRouter>
      );

      const streamerElement = screen.getByText("LEC");
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a description shorter than 100", () => {
    test("Then it should show 'texto breve' in the document", () => {
      streamerInfo2.description = "texto breve";
      render(
        <BrowserRouter>
          <MainPageContextProvider>
            <Streamer streamerInfo={streamerInfo2}></Streamer>
          </MainPageContextProvider>
        </BrowserRouter>
      );

      const streamerElement = screen.getByText(/texto breve/);
      expect(streamerElement).toBeInTheDocument();
    });
  });

  describe("When it gets a const streamer that creates a streamer with StreamerInfo as props", () => {
    test("then it should create and compare a snapshot with Streamer with StreamerInfo as component", () => {
      const streamer = TestRenderer.create(
        <BrowserRouter>
          <MainPageContextProvider>
            <Streamer streamerInfo={streamerInfo2} />
          </MainPageContextProvider>
        </BrowserRouter>
      );
      expect(streamer.toJSON()).toMatchSnapshot();
    });
  });
});
