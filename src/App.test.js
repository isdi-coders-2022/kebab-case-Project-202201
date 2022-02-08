import App from "./App";
import TestRenderer from "react-test-renderer";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import ApiKebabContextProvider from "./store/contexts/ApiKebabContextProvider";

describe("Given app component", () => {
  describe("When it gets a const app that creates a wrapped app", () => {
    test("then it should create and compare a snapshot component", () => {});
    const app = TestRenderer.create(
      <ThemeContextProvider>
        <ApiKebabContextProvider>
          <App />
        </ApiKebabContextProvider>
      </ThemeContextProvider>
    );
    expect(app.toJSON()).toMatchSnapshot();
  });
});
