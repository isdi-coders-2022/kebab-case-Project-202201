import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it gets a image with src /logo shawarma/", () => {
    test("then it should render an image with src /logo shawarma/", () => {
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
  describe("When the header image is clicked", () => {
    test("Then the passed action should be called", () => {
      const mockFunction = jest.fn();

      render(<Header actionOnClick={mockFunction} />);

      const button = screen.queryByAltText("logo shawarma");
      userEvent.click(button);
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
