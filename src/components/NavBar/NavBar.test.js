import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Given a NavBar component", () => {
  describe("When it get a const newNavBar that creates NavBar", () => {
    test("then it should create and compare a snapshot with newNavBar", () => {
      const newNavBar = TestRenderer.create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      expect(newNavBar.toJSON()).toMatchSnapshot();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should render 3 buttons on screen", () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const buttonText = screen.queryAllByRole("button");

      expect(buttonText).not.toBeNull();
    });
  });
});
