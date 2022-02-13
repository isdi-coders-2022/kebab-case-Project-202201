import StreamerFormEdit from "./StreamerFormEdit";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a Form Edit component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Image:'", () => {
      render(
        <BrowserRouter>
          <StreamerFormEdit />
        </BrowserRouter>
      );

      const renderedElement = screen.getByLabelText("Image:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      render(
        <BrowserRouter>
          <StreamerFormEdit />
        </BrowserRouter>
      );

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      render(
        <BrowserRouter>
          <StreamerFormEdit />
        </BrowserRouter>
      );

      const nameInput = screen.queryByPlaceholderText("Your Name");

      expect(nameInput).toBeInTheDocument();
    });
  });
});
