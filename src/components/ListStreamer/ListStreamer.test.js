import MainPageContexProvider from "../../store/contexts/MainPageContextProvider";
import { screen, render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import ListStreamer from "./ListStreamer";

describe("Given a ListStreamer", () => {
  let streamers = null;
  beforeAll(() => {
    streamers = [{ id: 500 }, { id: 250 }];
  });

  describe("When called a list of streamers", () => {
    test("It should display a list of streamers", () => {
      render(
        <MainPageContexProvider>
          <ListStreamer streamers={streamers} />
        </MainPageContexProvider>
      );

      const renderedElement = screen.getAllByRole("article");

      expect(renderedElement[0]).toBeInTheDocument();
    });
  });

  describe("When it get a const listStreamer that creates ListStramer with 1 streamer", () => {
    test("then it should create and compare a snapshot with ListStreamer and the created Streamer", () => {
      const listStreamer = TestRenderer.create(
        <MainPageContexProvider>
          <ListStreamer streamers={streamers} />
        </MainPageContexProvider>
      );
      expect(listStreamer.toJSON()).toMatchSnapshot();
    });
  });
});
