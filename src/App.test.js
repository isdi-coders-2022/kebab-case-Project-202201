import App from "./App";
import TestRenderer from "react-test-renderer";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import ApiKebabContextProvider from "./store/contexts/ApiKebabContextProvider";
import MainPageContextProvider from "./store/contexts/MainPageContextProvider";

describe("Given app component", () => {
  describe("When it gets a const app that creates a wrapped app", () => {
    test("then it should create and compare a snapshot component", () => {});
    const app = TestRenderer.create(
      <MainPageContextProvider>
        <ThemeContextProvider>
          <ApiKebabContextProvider>
            <App />
          </ApiKebabContextProvider>
        </ThemeContextProvider>
      </MainPageContextProvider>
    );
    expect(app.toJSON()).toMatchSnapshot();
  });
});
