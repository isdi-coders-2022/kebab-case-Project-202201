import StreamerFormEdit from "./StreamerFormEdit";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a Form Edit component", () => {
  const id = 156037856;
  describe("When it's rendered", () => {
    test("Then it should render 'Description:'", () => {
      render(
        <BrowserRouter>
          <StreamerFormEdit streamerId={id} />
        </BrowserRouter>
      );

      const renderedElement = screen.getByLabelText("Description:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      render(
        <BrowserRouter>
          <StreamerFormEdit streamerId={id} />
        </BrowserRouter>
      );

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
  });
});
