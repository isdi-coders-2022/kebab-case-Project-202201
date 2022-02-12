import { render, screen } from "@testing-library/react";
import MainPageContextProvider from "../../store/contexts/MainPageContextProvider";
import ListStreamerMain from "./ListStreamerMain";

describe("Given ListStreamerMain", () => {
  let wrappedListStreamerMain;
  beforeAll(() => {
    wrappedListStreamerMain = (
      <MainPageContextProvider>
        <ListStreamerMain></ListStreamerMain>
      </MainPageContextProvider>
    );
  });
  describe("When called", () => {
    test("Then it should be rendered", () => {
      render(wrappedListStreamerMain);
      // screen.debug();
    });
  });
});
