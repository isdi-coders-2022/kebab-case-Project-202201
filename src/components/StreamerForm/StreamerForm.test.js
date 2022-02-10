import StreamerForm from "./StreamerForm";
import { render, screen } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Image:'", () => {
      render(<StreamerForm />);

      const renderedElement = screen.getByLabelText("Image:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      render(<StreamerForm />);

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      render(<StreamerForm />);

      const nameInput = screen.queryByPlaceholderText("Your Name");

      expect(nameInput).toBeInTheDocument();
    });
  });
});
