import { render, screen } from "@testing-library/react";
import ClipCarousel from "./ClipCarousel";

describe("Given ClipCarroussel Component", () => {
  describe("When called", () => {
    test("Should render a list", () => {
      render(<ClipCarousel streamerId={99} />);
      screen.getByRole("list");
    });
  });
});
