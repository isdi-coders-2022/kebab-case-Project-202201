import StreamerForm from "./StreamForm";
import { render, screen, fireEvent } from "@testing-library/react";
import ApiKebabContextProvider from "../../store/contexts/ApiKebabContextProvider";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test.only("Then it should do an action when click Add button", () => {
      const actionOnAddMock = jest.fn();
      render(
        <ApiKebabContextProvider>
          <StreamerForm actionOnAdd={actionOnAddMock} />
        </ApiKebabContextProvider>
      );

      const imageInput = screen.getByLabelText("imageInput");
      fireEvent.change(imageInput, { target: { value: "my-image" } });

      fireEvent.click(screen.getByText("ADD +"));

      expect(actionOnAddMock).toHaveBeenCalled();
      expect(actionOnAddMock).toHaveBeenCalledWith("my-image");
    });
  });
});
