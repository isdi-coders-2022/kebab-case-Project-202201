import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it gets a image with src /logo shawarma/", () => {
    test("then it should found an image with src /logo shawarma/", () => {
      render(<Header />);

      const streamingImg = screen.queryByAltText("logo shawarma");

      expect(streamingImg).toBeInTheDocument();
    });
  });
  describe("When it get a const App that creates Header", () => {
    test("then it should create and compare a snapshot with Header component", () => {
      const app = TestRenderer.create(<Header />);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });
});
