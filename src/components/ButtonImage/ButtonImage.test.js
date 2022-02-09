import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonImage from "./ButtonImage";

describe("Given a ButtonImage Component", () => {
  describe("When it is clicked", () => {
    test("It should do the action", () => {
      const action = jest.fn();

      render(<ButtonImage actionOnClick={action} />);

      const button = screen.queryByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});