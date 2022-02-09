import StreamerForm from "./StreamForm";
import { render, screen } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Image:", () => {
      render(<StreamerForm />);

      const renderedElement = screen.getByLabelText("Image:");

      expect(renderedElement).toBeInTheDocument();
    });
  });
});
