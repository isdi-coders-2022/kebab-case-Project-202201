import { screen, render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import ListStreamer from "./ListStreamer";

describe("Given a ListStreamer", () => {
  let streamers = null;
  beforeAll(() => {
    streamers = [1];
  });
  describe("When called a list of streamers", () => {
    test("It should display a list of streamers", () => {
      render(<ListStreamer streamers={streamers} />);

      const renderedElement = screen.getByRole("article");

      expect(renderedElement).toBeInTheDocument();
    });
  });
  describe("When it get a const App that creates Header", () => {
    test("then it should create and compare a snapshot with Header component", () => {
      const app = TestRenderer.create(<ListStreamer streamers={streamers} />);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });
});
