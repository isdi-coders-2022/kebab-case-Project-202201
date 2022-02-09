import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it get a const newNavBar that creates NavBar", () => {
    test("then it should create and compare a snapshot with newNavBar", () => {
      const newNavBar = TestRenderer.create(<NavBar />);
      expect(newNavBar.toJSON()).toMatchSnapshot();
    });
  });

  describe("WWhen it is rendered", () => {
    test("Then it should render 3 buttons on screen", () => {
      const expectedNoOfButtons = 3;
      render(<NavBar />);
      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(expectedNoOfButtons);
    });
  });
});
