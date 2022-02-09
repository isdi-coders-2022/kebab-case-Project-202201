import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import ButtonText from "./ButtonText";

describe("Given a ButtonText Component", () => {
  describe("When it is clicked", () => {
    test("It should do an action", () => {
      const action = jest.fn();

      render(<ButtonText actionOnClick={action} />);

      const button = screen.queryByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
  describe("When it get a const button that creates a ButtonText", () => {
    test("then it should create and compare a snapshot with ButtonText component", () => {
      const button = TestRenderer.create(<ButtonText />);
      expect(button.toJSON()).toMatchSnapshot();
    });
  });
});
